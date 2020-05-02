const axios = require("axios");

const api = {
  getUser(username) {
    const response = axios.get(`https://api.github.com/users/${username}`);
    return response;
  }
};

module.exports = api;
