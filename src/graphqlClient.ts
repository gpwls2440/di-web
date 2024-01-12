// Dependency
import { GraphQLClient, RequestDocument } from 'graphql-request';
import { GQLVariables, Any } from '@interface/common';
import { API_URL } from '@constants/common';
import { getSdk } from '@services/signOn';
import Cookies from 'js-cookie';

export const baseClient = new GraphQLClient(API_URL);
export const authClient = new GraphQLClient(API_URL);

let isRefreshing: boolean = false;
const failedRequestsQueue: Any[] = [];
const searchParams = Object.fromEntries(
  new URLSearchParams(window.location.search),
);

/**
 * graphqlBaseClient
 * @description grpahql Client
 * @param {string | DocumentNode} document Gql
 * @param {Object} variables variables
 * @returns {Object}
 */
export function graphqlBaseClient<T, V = GQLVariables>(
  document: RequestDocument,
  variables?: V,
) {
  return async (): Promise<T> => {
    try {
      return await baseClient
        .request(document, variables)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

/**
 * graphqlAuthClient
 * @description Authorization 값을 참조하는 grpahql Client
 * @param {string | DocumentNode} document Gql
 * @param {Object} variables variables
 * @returns {Object}
 */
export function graphqlAuthClient<T, V = GQLVariables>(
  document: RequestDocument,
  variables?: V,
) {
  return async (): Promise<T> => {
    authClient.setHeaders({
      Authorization: `JWT ${Cookies.get('authorization')}`,
    });

    try {
      return await authClient
        .request(document, variables)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          const errorMessage = error.response.errors[0]?.message;
          if (errorMessage === 'Error decoding signature') {
            if (!searchParams.uid) {
              window.location.href = '/error';
            }
            const { uid } = searchParams;

            if (!isRefreshing) {
              isRefreshing = true;
              authClient.setHeaders({});
              const sdk = getSdk(authClient);
              sdk
                .signOn({ uid })
                .then((data) => {
                  const expires = new Date(Date.now() + 60 * 60 * 3 * 1000);
                  Cookies.set('authorization', `${data.signOn?.token}`, {
                    expires,
                  });
                  authClient.setHeaders({
                    Authorization: `JWT ${data.signOn?.token}`,
                  });
                  failedRequestsQueue.forEach((request) =>
                    request.onSuccess(`JWT ${data.signOn?.token}`),
                  );
                  failedRequestsQueue.length = 0;
                })
                .catch((err) => {
                  failedRequestsQueue.forEach((request) =>
                    request.onFailure(err),
                  );
                  failedRequestsQueue.length = 0;
                })
                .finally(() => {
                  isRefreshing = false;
                });
            }

            return new Promise((resolve) => {
              failedRequestsQueue.push({
                onSuccess: (token: string) => {
                  authClient.setHeaders({
                    Authorization: `${token}`,
                  });

                  resolve(authClient.request(document, variables));
                  isRefreshing = false;
                },

                onFailure: () => {
                  // 404 Page로
                  window.location.href = '/error';
                },
              });
            });
          }
          throw error;
        });
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
