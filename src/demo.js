const szhRequest = require('szh-request-node');

const cats = async () => {
  const response = await szhRequest.send('https://meowfacts.herokuapp.com/', {
    method: 'GET',
    params: {
      lang: 'eng',
      count: '5',
    },
  });

  console.log(await response.json());
};

const postCreate = async () => {
  const response = await szhRequest.send(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: {
        title: 'Hello',
        body: 'World',
        userId: 1,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );

  console.log(await response.json());
};

cats();
postCreate();