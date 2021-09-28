<p align="center">🎉
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-challenge-compasso-uol"> Descrição </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

# 🔖 Sobre

Esse projeto foi desenvolvido com o objetivo de ensinar testar meus conhecimentos em NodeJs.

# ChallengeProfitfyme
Requisitos da entrega Nesta estapa esperamos que você construa o código que contemple as seguintes operações expostas como endpoints REST para: 
    <br/>
   ### Tarifa

*   Uma tarifa é a entidade que representa essa taxa cobrada pela plataforma de venda.
*   Há dois tipos de tarifas, a tarifa padrão, que não apresenta data de início e nem data de fim, que representa a tarifa atual da plataforma de venda.
*   Um exemplo de tarifa seria:

```json
    {
        "id": "411594b5-c996-4756-a719-408dd4517161",
        "percentage_amount": 10,
        "is_default": true
    }
```

*   O outro tipo de tarifa, é a tarifa por período, que possui uma data de inicio e data de fim, que representa a tarifa de um período passado da plataforma de venda.
*   Um exemplo de tarifa seria:

```json
    {
        "id": "411594b5-c996-4756-a719-42342424d2sa",
        "percentage_amount": 10,
        "start_date": "2019-07-16T03:00:00Z",
        "end_date": "2019-07-17T02:59:59Z",
        "is_default": false
    }
```

Onde:

*   `id` é um UUID v4;
*   `percentage_amount` é o valor em percentual;
*   `start_date` está em UTC no formato ISO-8601 e representa o período inicial da tarifa, podendo ser nulo;
*   `end_date` está em UTC no formato ISO-8601 e representa o período final da tarifa, podendo ser nulo;
*   `is_default` define se é uma tarifa padrão ou não;

### Critérios para inserir uma Tarifa:

*   Só pode ter **uma** tarifa padrão;
*   Timezone é America/Sao_Paulo;
*   Não pode ter mais de uma tarifa no mesmo período, por exemplo, se há um fee com início em `"2019-07-17T03:00:00Z"` e fim em  `"2019-07-25T02:59:59Z"`, não poderá ser inserido um fee com início em `"2019-07-18T03:00:00Z"` e fim em `"2019-07-19T02:59:59Z"`;
*   A hora do `start_date` deve ser transformado para o primeiro horário dessa data (ex. `"2019-07-17T03:00:00Z"`).
*   A hora do `end_date` deve ser transformado para o último horário dessa data (ex. `"2019-07-18T02:59:59Z"`).

## ✍🏻 Ferramentas e Skill
<br/>
Linguagem Javascript[SuperSet-TypeScript] - Runtime Enviroment NodeJs.<br/>
Framework: Express<br/>
ORM - TypeORM<br/>
Banco - Postgres.<br/>


## 🗂 Material de apoio 

- [Express](http://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [Reflect-Metada](https://www.npmjs.com/package/reflect-metadata)
- [Uuid](https://www.npmjs.com/package/uuid)
- [Tsyringe](https://www.npmjs.com/package/tsyringe)
- [Express-Async-Erros](https://www.npmjs.com/package/express-async-errors)
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Swagger](https://swagger.io/)

## 👍🏻 Como baixar

```

    // Clonar repositório
    git clone https://github.com/jonathanGroupRoot/desafio-backend-profitfyme

    // Acessar diretório
    cd desafio-backend-profitfyme

     // Instalar dependências
     yarn

    //Configurar o docker, host-do-banco em desafio-backend-profitfyme/docker-compose.yml

    // Iniciar projeto
    docker-compose start

    //Rodar-as-migrations
    yarn typeorm migration:run


    //Documentação
    (http://localhost:3000/api-docs/#/)
```


<h3 align="center">👨‍💻 Desenvolvido por Jonathan Vinicius Braz Silva 👨‍💻</h3>
