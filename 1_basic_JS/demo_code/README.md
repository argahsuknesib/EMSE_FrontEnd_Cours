# Usage 

## Prerequisite

You must have `node` installed on your machine. Version 12 or above is recommended. 

```
$ node --version
v12.19.0
```

You should have `npm` installed on your machine (version 6 or higher recommended). If you know what you're doing, you can use `yarn` instead.

```
npm --version
6.14.5
```

## Install dependencies

Run the command 

```
npm install
```

## Init or reinitialize the database

Run the command

```
npm run db:init
```

You should run this command the first time you use this repo in order to create the sample dataset (file `data.json`). You may run this command anytime
in order to reset your dataset to the initial sample dataset.

## Start the API server

Run the command 

```
npm run start:api_server
```

This will start an HTTP server on http://localhost:3014. You can now access the API on that URL. See the API documentation for details on endpoints.

## Start the frontend server

```
npm run start:frontend_server 
```

This will start a simple HTTP server on http://localhost:8080, that serves all static files located under the `./frontend` directory.

 
# API documentation

Below is the documentation of the API endpoints server by the API server 

## Articles

### List

Endpoint : 

```
GET /articles
```

Response body

```
[{
  "id": 1,
  "title": "First article",
  "content": "Lorem ipsum",
  "author": "John Doe"
}, {
  "id": 2
  "title": "Second article",
  "content": "Lorem ipsum",
  "author": "Jane Doe"
}]
```

### Show

Endpoint 

```
GET /articles/:id
```

Response body : 

```
{
  "id": 1,
  "title": "First article",
  "content": "Lorem ipsum",
  "author": "John Doe"
}
```

### Create

Endpoint 

```
POST /articles
```

Request body

```
{
  "title": "First article",
  "content": "Lorem ipsum",
  "author": "John Doe"
}
```

Reponse body
```
{
  "id": 4,
  "title": "First article",
  "content": "Lorem ipsum",
  "author": "John Doe"
}
```

## Comments

### List

List all comments of an article.

Endpoint : 

```
GET /articles/:article_id/comments
```

Response body

```
[{
  "id": 1,
  "author": "John Doe",
  "content": "Lorem ipsum",
  "articleId": 1
}, {
  "id": 2
  "author": "John Doe",
  "content": "Lorem ipsum",
  "articleId": 1
}]
```

### Show

Endpoint 

```
GET /comments/:id
```

Response body : 

```
{
  "id": 2
  "author": "John Doe",
  "content": "Lorem ipsum",
  "articleId": 1
}
```

### Create

Endpoint 

```
POST /articles/:article_id/comments
```

Request body

```
{
  "content": "Lorem ipsum",
  "author": "John Doe"
}
```

Reponse body
```
{
  "id": 4,
  "content": "Lorem ipsum",
  "author": "John Doe",
  "articleId": 1
}
```



# If you want to go further

This API is generated by `json-server` : https://github.com/typicode/json-server

You may modify the dataset as you want to experiment further frontend capabilities. You may also see the full API functionalities generated by json-server
(such as filtering, pagination, ???) if you want to play with those.
