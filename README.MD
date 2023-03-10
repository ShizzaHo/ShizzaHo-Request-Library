# ShizzaHo Request Library

This library provides you with a convenient and easy way to work with queries using async/await and fetch API

## Installing the library in your project

Installation for ES6: ```npm i szh-request```

NPM: https://www.npmjs.com/package/szh-request

Installation for Node.JS: ```npm i szh-request-node```

NPM: https://www.npmjs.com/package/szh-request-node

## Connecting to the project

### Connecting via ES6

```js
import szhRequest from szh-request
```

### Connecting via Require

```js
const szhRequest = require('szh-request-node');
```

## Using the library

### Structure of the request

```js
await szhRequest.send(URL, OPTIONS);
```

ShizzaHo Request Library takes only two arguments, (each of which is mandatory!) The first argument is the URL, to which the request will be sent.

The second argument is the request settings, they are made as an object, and take the following parameters:

- **method** - Used to set the request mode, the following values are accepted: GET, POST, PUT, PATCH, DELETE, COPY, HEAD, OPTIONS, LINK, UNLINK, PURGE, LOCK, UNLOCK, PROPFIND, VIEW. (Required parameter, not case sensitive)
- **params** - Used to set parameters in the URL string, in the final version is formatted in: `?param=value&param2=value2`
- **headers** - Sets the headers for the request (Taken as an object)
- **body** - Sets the body for the request (Taken as an object, the parameter is not taken into account when using a GET or HEAD request)

### Examples of use

<br>

**Getting Cat Facts**

Code:

```js
const response = await szhRequest.send('https://meowfacts.herokuapp.com/', {
  method: 'GET',
  params: {
    lang: 'eng', // Language
    count: '5', // Number of facts
  },
});

console.log(await response.json());
```

Result:

```js
{
  data: [
    "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
    "Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points.",
    'The ancestor of all domestic cats is the African Wild Cat which still exists today.',
    "Besides smelling with their nose, cats can smell with an additional organ called the Jacobson's organ, located in the upper surface of the mouth.",
    'Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.',
  ];
}
```

<br>

**Try to send a POST request**

Code:

```js
const response = await szhRequest.send('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: {
    title: 'Hello',
    body: 'World',
    userId: 1,
  },
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

console.log(await response.json());
```

Result:

```js
{ id: 101 }
```

## References and more

GitHub: https://github.com/ShizzaHo/ShizzaHo-Request-Library