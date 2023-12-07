var axios = require('axios').default;

const tokens = require('../input/tokens.json')

const GITHUB_TOKEN = '';
const GITHUB_USER = 'Dkdaniz';
const GITHUB_REPO = 'figma4devs';

var options = {
  method: 'POST',
  url: `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/dispatches`,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/8.4.2',
    Accept: 'application/vnd.github.everest-preview+json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  data: {
    event_type: 'update-tokens',
    client_payload: {
      tokens: JSON.stringify(tokens),
      filename: 'design-tokens.tokens.json',
      commitMessage: 'Update Style Tokens',
    },
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
