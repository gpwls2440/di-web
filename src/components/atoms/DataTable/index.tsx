// Dependency
import { Fragment, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CircleIcon from '../CircleIcon';

// css
import './data-table.css';

type DataTableItem = string | number;

type DataTableHeadItem = {
  color?: string;
  title: string;
};

interface DataTable {
  isLoading?: boolean;
  head?: DataTableHeadItem[];
  col?: DataTableItem[];
  data?: DataTableItem[][];
  headIndex?: number;
  className?: string;
}

export default memo(function DataTable(props: DataTable) {
  const {
    isLoading = false,
    head = [],
    col = [],
    data,
    headIndex = 1,
    className,
  } = props;
  return (
    <div className={`data-table ${className}`}>
      <table>
        {col?.map((item) => {
          return (
            <colgroup key={uuidv4()}>
              <col width={`${item}`} />
            </colgroup>
          );
        })}
        <thead>
          <tr>
            {head?.map((item) => {
              return (
                <th key={uuidv4()}>
                  {isLoading && item.title && (
                    <>
                      {item.color && (
                        <div className='table-icon-title-wrap'>
                          <CircleIcon bgColor={item.color} />
                          <span className='table-icon-title'>{item.title}</span>
                        </div>
                      )}
                      {!item.color && <>{item.title}</>}
                    </>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((raw) => {
            return (
              <tr key={uuidv4()}>
                {raw?.map((cell, index) => {
                  return (
                    <Fragment key={uuidv4()}>
                      {headIndex >= index + 1 && <th key={uuidv4()}>{cell}</th>}
                      {headIndex < index + 1 && <td key={uuidv4()}>{cell}</td>}
                    </Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
