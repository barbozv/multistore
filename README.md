# Template para projetos e-commerce

Arquetipo em React desenvolvido utilizando o NextJs versão 13.

Este é o Next.js projeto estruturado baseado no create-next-app.

## Tecnologias utilizadas

- Next.js 13
- React
- Styled-Components (CSS-in-JS)
- Typescript
- Jest
- @testing-library/react
- Husky
- Lint-staged
- Eslint
- Prettier

## Pré-requisitos

NodeJs
yarn

## Vamos iniciar

### Para executar o projeto

Criar o arquivo .env.local na raiz do projeto

```config
NEXT_PUBLIC_STORE_URL=http://localhost:3000
NEXT_PUBLIC_GRAPHQL_API_ENDPOINT=http://localhost:3300/graphql
```

### Para executar os Testes

```bash
yarn test
```

```bash
npm run dev
# ou
yarn dev
```

Para rodar os testes

Executar o projeto em produção

```bash
yarn build
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser e veja o resultado.

## Aprender mais

- [Next.js Documentation](https://nextjs.org/docs) - sobre o Next.js e API.
- [Learn Next.js](https://nextjs.org/learn) - Next.js tutorial.
