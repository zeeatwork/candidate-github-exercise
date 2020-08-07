'use strict'

function returnData(userName) {
const url = `https://api.github.com/users/${userName}/repos`;

console.log('finding repositories for ${username}');

fetch(url)
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
})
.then(responseJson => displayRepos
  (responseJson))
  .catch(err => {
    $('#js-error-message').text('something went wrong: ${err.message}');
  });
}