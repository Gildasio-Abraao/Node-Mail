# Node Mail

Aplicação Node para envio de e-mail utilizando o **Nodemailer**.

## Testando a aplicação

Primeiro instale todas as dependências:

```bash
  npm install
```

Depois vamos executar a aplicação:

```bash
  npm run dev
```

Você também deve criar algumas variáveis de ambiente no seu arquivo _.env_:

    MAILER_HOST = smtp.ethereal.email
    MAILER_PORT = 587
    MAILER_AUTH_USER = example@ethereal.email
    MAILER_AUTH_PASS = 12345678

No _body_ da requisição você deve enviar os dados de quem vai receber o e-mail, exemplo:

    "name": "Nome do Usuario",
    "email": "exemplo@gmail.com"


## Tecnologias

- Node.js
- TypeScript

Futuramente desejo implementar alguns testes unitários para estudo, então provavelmente essa stack vai evoluir.


## Links

- Node Mailer: https://nodemailer.com/about/
- Ethereal (para testes): https://ethereal.email/
