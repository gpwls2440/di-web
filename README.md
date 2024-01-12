
<p align="center" style="padding:20px 0px 20px 0px">
   <img width="600" src="./public/di.png" />
</p>

## 설치

```shell
git clone git@github.com:kbam-di/di-web-fe.git // clone
cd di-web-fe // your folder
pnpm install // dependency install
pnpm codegen // code generation
pnpm dev // dev
```

## 기술 스택

- [`React`](https://react.dev/)
- [`React-Router`](https://reactrouter.com/en/main/)
- [`TypeScript`](https://www.typescriptlang.org/)
- [`Jotai`](https://jotai.org/)
- [`Recharts`](https://recharts.org/en-US/)
- [`DayJs`](https://day.js.org/)
- [`@tanstack/react-query V4`](https://tanstack.com/query/v4/docs/react/overview)
- [`PNPM`](https://pnpm.io/ko/)
- [`Vite`](https://ko.vitejs.dev/)
- [`Vitest`](https://vitest.dev/)
- [`Storybook`](https://storybook.js.org/)
- [`@graphql-codegen/cli`](https://the-guild.dev/graphql/codegen)

## 폴더구조

```
├── index.html
├── .eslintrc // eslint config
├── package.json
├── codegen.yml // graphql-codegen 설정
├── .vscode // vscode 설정
├── .storybook // 스토리북 설정
├── doc // 컨센션 정의
├── public // public
└── src
    ├── assets // assets
    ├── components // components
    │     ├── atoms // atomic 컴포넌트
    │     │      ├── Button 
    │     │      ├── Input 
    │     │      └── ...
    │     ├── chart // 각종 차트
    │     │      ├── LineChart  
    │     │      ├── PieChart 
    │     │      └── ...
    │     └── factors // 각종 factors
    │           ├── MasterFactor 
    │           └── ProFactor 
    │        
    ├── constants // 각종 정의
    ├── gql // graphql file,
    ├── hooks // react hooks
    ├── interface // interface, typess
    ├── layout // layout 설정
    ├── pages // pages 
    ├── routes // routes 정의
    └── services // graphql API 공통함수 및 graphql-codegen에 의해 생성된 코드 
```