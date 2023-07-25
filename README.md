# Finance Tracker  Platform

- [Finance Tracker  Platform](#finance-tracker--platform)
  - [About](#about)
  - [Installation](#installation)
        - [Note for backend](#note-for-backend)
  - [Backend](#backend)
    - [API Documentation](#api-documentation)
      - [User](#user)
        - [Get all users](#get-all-users)
        - [Get transaction by email](#get-transaction-by-email)
        - [Create user](#create-user)
        - [Update user](#update-user)
        - [Delete user](#delete-user)
      - [Wallet](#wallet)
        - [Get all wallets](#get-all-wallets)
        - [Get wallet by id](#get-wallet-by-id)
        - [Create transaction](#create-transaction)
        - [Update transaction](#update-transaction)
        - [Delete transaction](#delete-transaction)
      - [Transaction](#transaction)
        - [Get all transactions](#get-all-transactions)
        - [Get transaction by id](#get-transaction-by-id)
        - [Create transaction](#create-transaction-1)
        - [Update transaction](#update-transaction-1)
        - [Delete transaction](#delete-transaction-1)
  - [Issues](#issues)


  
## About

Welcome to our personal finance app! Our app is designed to help you manage your finances and achieve your financial goals. We understand that managing your money can be stressful, time-consuming, and confusing, but we believe that it doesn't have to be. Our app provides a simple, user-friendly interface that makes it easy to track your income, expenses, and savings, so you can get a clear picture of your financial health.

## Installation

Run

```bash
git clone https://github.com/BinniesLite/finance_app.git
```

To start the project from the root of the project using Docker Compose, run the command `docker compose up` in your terminal.

Make sure you have Docker and docker compose installed on your machine.

For front-end navigate to **localhost:80** and for back-end navigate to **localhost:3000**

After adding packages or changing dockerfile, run `docker compose up --build -d` to rebuild the images in detached mode.


##### Note for backend
To make changes to database, you will need to first open the integrated terminal inside the container to make changes to the database. Check Prisma documentation for more instructions on how to interact with the database.

Run `docker exec -it backend bash` to open the integrated terminal inside the container. 



##  Backend

This is the backend of the project. It is a RESTful API built with Node.js and Express.js. It is connected to a PostgreSQL database using Docker.


### API Documentation

#### User

##### Get all users

```http
GET /api/user
```

##### Get transaction by email

```http
GET /api/user/email
```

##### Create user

```http
POST /api/user/create
```

##### Update user

```http
PUT /api/user/email
```

##### Delete user

```http
DELETE /api/user/email
```

#### Wallet

##### Get all wallets

```http
GET /api/wallet
```

##### Get wallet by id

```http
GET /api/wallet/${id}
```

##### Create transaction

```http
POST /api/wallet/create
```

##### Update transaction

```http
PUT /api/wallet/${id}
```

##### Delete transaction

```http
DELETE /api/wallet/${id}
```

#### Transaction

##### Get all transactions

```http
GET /api/transaction
```

##### Get transaction by id

```http
GET /api/transaction/${id}
```

##### Create transaction

```http
POST /api/transactions/create
```

##### Update transaction

```http
PUT /api/transaction/${id}
```

##### Delete transaction

```http
DELETE /api/transactions/delete/${id}
```


```mermaid
erDiagram
  WALLET ||--o{ TRANSACTION : has
  
  USER ||--O{ TRANSACTION : make 
  USER ||--O{ WALLET : has

  WALLET { 
    string ID PK
    string name  
    date created_at 
    string description 
  }
  
  TRANSACTION {
    string ID PK
    string name 
    int wallet_id FK
    float amount 
    date created_at 
    string type 
  }

  USER {
    string ID PK
    string username
    string password
    string email
    date created_at
    url user_image

  }

```

## Issues

If you have any issues with the project, please feel free to open an issue on the repo.
