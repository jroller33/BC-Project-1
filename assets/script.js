$(document).ready(() => {

  //              YOUTUBE SEARCH AND DYNAMICALLY CREATE IFRAME
  // doSearch, get text in search input, make ajax call, populate divs with results
  const doSearch = () => {
    let searchQuery = $('#youtubeSearchBar').val();
    console.log(searchQuery);
    // if (searchQuery == null) { searchQuery = "pizza recipe" }
    // }

    // make the endpoint with query parameters (https://developers.google.com/youtube/v3/docs/search/list) part=snippet is required. maxResults=10 set the number of results we want to retrieve
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=' + searchQuery;

    // ajax request here setting the url, iframe will hold the first video result
    $.ajax({
      url: url,
      method: 'GET',
      success: (result) => {
        $('.video-play').text('');
        $('.video-play').append(`<iframe class="w-1/2 h-96 flex-auto grid place-items-center" src=https://www.youtube.com/embed/${result.items[0].id.videoId} allowFullScreen title='youtube player' />`)
      },
      error: (err, response) => {
        console.log(err.responseText);
        $('.video-play').text(err.responseText);
      }
    })
  };

  // click event on submit button, doSearch with input text
  $("#youtubeSearchButton").on("click", function (event) {
    event.preventDefault();
    //  console.log("search button");
    doSearch();
  });

  // on document ready doSearch with default input text -- NOT WORKING
  if ($("#youtubeSearchBar").attr("data-type") == "0") {
    searchQuery = "pizza recipe";
    console.log(searchQuery);
    doSearch();

    $("#youtubeSearchBar").attr("data-type", "1")
  }

  //                    RECIPE DATABASE API (response is a random recipe)

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    }
  };

  $.ajax(settings).done(function (response) {
    // console.log(response);
    // console.log(response.recipes[0].title);
    // console.log(response.recipes[0].instructions);
    $('#recipeApiResults').append((response.recipes[0].title)) + '\n';
    $('#recipeApiResults').append(response.recipes[0].instructions);
  });

  //             TABS, RECIPE TEXT AND SAVING TO LOCAL STORAGE

  const doTabCapture = (index) => {
    $('#recipeInput').val("");
    $('#recipeInput').val(JSON.parse(localStorage.getItem(index)));
    currentTab.currentId = index;
  }

  $(".tab").on("click", function (event) {
    // event.preventDefault();
    console.log("hello", $(this).attr("value"));

    doTabCapture($(this).attr("value"));
  })

  let currentTab = { currentId: 0, changed: false };

  if (!currentTab.changed) {
    doTabCapture(0)
    currentTab.changed = true;
  }

  var saveRecipe1 = $("#saveRecipeButton");
  saveRecipe1.on('click', function (event) {
    event.preventDefault();

    var recipe1Input = $('#recipeInput').val();
    console.log("hello ", String(currentTab.currentId));
    localStorage.setItem(String(currentTab.currentId), JSON.stringify(recipe1Input));

  })
});
