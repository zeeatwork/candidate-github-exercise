'use strict'

function displayRepos(responseJson) {
  console.log(responseJson);
  $('#results').empty();
  console.log('emptied');
  $('#results').append(`Repository Name: ${responseJson.repo}  || Repository Link: ${responseJson.url}`);

  $('#results').removeClass("hidden");
  console.log("displayed");
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const userName = $("#user-name").val();
    returnData(userName);
  });
}

$(watchForm);