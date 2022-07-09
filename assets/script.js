$(document).ready(() => {
  // doSearch, get text in search input, make ajax call, populate divs with results
  const doSearch = () => {
    console.log("search");
    // Get text fom input search box
    let searchQuery = $('#youtubeSearchBar').val();
    // make the endpoint with query parameters (https://developers.google.com/youtube/v3/docs/search/list)
    // part=snippet is required. maxResults=10 set the number of results we want to retrieve
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=' + searchQuery;
    
     
    
    // ajax request here setting the url, method GET. iframe will hold the first video result
    $.ajax({
      url: url,
      method: 'GET',
      success: (result) => {
        $('.video-play').text('');
        $('.video-play').append(`<iframe class="flex-auto grid place-items-center w-screen h-screen" src=https://www.youtube.com/embed/${result.items[0].id.videoId} allowFullScreen title='youtube player' />`)
        // iframe class="aspect-w-16 aspect-h-9 grid h-screen place-items-center grid h-screen place-items-center"
      },
      error: (err, response) => {
        console.log(err.responseText);
        $('.video-play').text(err.responseText);
      }
    })
  };



  //  RECIPE DATABASE API
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=spaghetti",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   $('#recipeApiResults').append(`<textarea />`)
  // });



    //  TABS, RECIPE TEXT AND SAVING TO LOCAL STORAGE
  const doTabCapture = (index) => {
      // $(".tab").each(function (index) {
  //   console.log(index);
  // $(".tabCheck").on('click', function (event) {
  //      event.preventDefault();
  //     console.log("recipe1tab");
      $('#recipeInput').val("");
      $('#recipeInput').val(JSON.parse(localStorage.getItem(index)));
      currentTab.currentId = index;
  // })
  // })
  }
  // click event on submit button, doSearch with input text
      $("#youtubeSearchButton").on("click", function(event) {
        event.preventDefault();
        console.log("search button");
        doSearch();
      
    });

    $(".tab").on("click",function (event) {
      // event.preventDefault();
      console.log("hello",$(this).attr("value"));

      doTabCapture($(this).attr("value"));
    })
  
    let currentTab = {currentId: 0, changed: false};
    // on document ready doSearch with default intput text
  if ($("#youtubeSearchBar").attr("data-type") == "0") {
      doSearch();
     
      $("#youtubeSearchBar").attr("data-type", "1")
  }

  if (!currentTab.changed)
  {
    console.log("here")
    doTabCapture(0)
    currentTab.changed = true;
  }

  // $(".tab").each(function (index) {
  //   console.log(index);
  //  // $('#recipeInput').val("");
  //  //  $('#recipeInput').val(localStorage.getItem(index));
  // })
  // $("#recipe1").on('click', function (event) {
  //   event.preventDefault();
  //   console.log("recipe1tab");
  //   $('#recipeInput').val("");
  //   $('#recipeInput').val(localStorage.getItem('1'));
  // })
  var saveRecipe1 = $("#saveRecipeButton");
  saveRecipe1.on('click', function (event) {
    event.preventDefault();
    
    var recipe1Input = $('#recipeInput').val();
  console.log("hello ", String(currentTab.currentId));
  localStorage.setItem(String(currentTab.currentId), JSON.stringify(recipe1Input));
  
  })



  });

//  **********************  Recipe Text Input and localStorage below   **********************************************

// var defaultTab = recipe1tab;
// $('#recipeInput').val(localStorage.getItem('1'));

// var recipe2Input = $('#recipeInput').val();
// var recipe2tab = $("#recipe2");
// recipe2tab.on('click', function (event) {
//   event.preventDefault();
//   console.log("recipe2tab");
//   $('#recipeInput').val("");
//   $('#recipeInput').val(localStorage.getItem('2'));
  
//   var saveRecipe2 = $("#saveRecipeButton");

//   saveRecipe2.on('click', function (event) {
//   event.preventDefault();
//   console.log(recipe2Input);
//   localStorage.setItem('2', JSON.stringify(recipe2Input));


//   })
// })

// var recipe3tab = $("#recipe3");
// recipe3tab.on('click', function (event) {
//   event.preventDefault();
//   console.log("recipe3tab");
//   $('#recipeInput').val("");
//   $('#recipeInput').val(localStorage.getItem('3'));

//   var saveRecipe3 = $("#saveRecipeButton");

//   saveRecipe3.on('click', function (event) {
//   event.preventDefault();
//   var recipe3Input = $('#recipeInput').val();
//   console.log(recipe3Input);
//   localStorage.setItem('3', JSON.stringify(recipe3Input));


//   })
// })

// var recipe4tab = $("#recipe4");
// recipe4tab.on('click', function (event) {
//   event.preventDefault();
//   console.log("recipe4tab");
//   $('#recipeInput').val("");
//   $('#recipeInput').val(localStorage.getItem('4'));

//   var saveRecipe4 = $("#saveRecipeButton");

//   saveRecipe4.on('click', function (event) {
//     event.preventDefault();
//     var recipe4Input = $('#recipeInput').val();
//     console.log(recipe4Input);
//     localStorage.setItem('4', JSON.stringify(recipe4Input));
//   })
// })

// var recipe5tab = $("#recipe5");
// recipe5tab.on('click', function (event) {
//   event.preventDefault();
//   console.log("recipe5tab");
//   $('#recipeInput').val("");
//   $('#recipeInput').val(localStorage.getItem('5'));

//   var saveRecipe5 = $("#saveRecipeButton");

//   saveRecipe5.on('click', function (event) {
//   event.preventDefault();
//   var recipe5Input = $('#recipeInput').val();
//   console.log(recipe5Input);
//   localStorage.setItem('5', JSON.stringify(recipe5Input));


//   })
// })



// //        YouTube API

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '500',
//     width: '1000',
//     videoId: 'M7lc1UVf-VE',
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }
// 

// saveButton.on('click', function (event) {
//   event.preventDefault();
//   var recipeInput = $('#recipeInput').val();
//   console.log(recipeInput);
//   localStorage.setItem("0", JSON.stringify(recipeInput));

//   saveButton.on('click', function (event) {
//   event.preventDefault();
//   var recipeInput = $('#recipeInput').val();
//   console.log(recipeInput);
//   localStorage.setItem("0", JSON.stringify(recipeInput));


// })

// })

// $('#recipeInput').val(localStorage.getItem('0'));



/*
function store(){
  var recipeInput= document.getElementById("recipeInput");
  localStorage.setItem("recipeInput", recipeInput.value);
 }

*/


/*      Dynamically Create HTML elements:
function myFunction() {
    const newP = document.createElement("p");
    const textP = document.createTextNode("Hello");
    newP.appendChild(textP);
    const element = document.getElementById("div1");
    element.appendChild(newP);
  }

  myFunction();
  */