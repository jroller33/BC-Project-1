# uCook

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


***   PLEASE NOTE: This app uses API keys that must be hardcoded in './assets/script.js' to work correctly. These free API keys only have a limited number of calls, so if you receive an error message (especially from YouTube Data API), then either the API keys are missing or we have reached our quota of API calls. You will have to wait at least one hour before attempting to use the app again.   ***

#

This is a recipe app where you can find new recipes and save them, watch recipe videos, or create your own. This application features Tailwind CSS, jQuery, dynamically updated HTML and CSS, and server-side APIs.

You can save recipes by typing or pasting them into the text area and clicking "Save recipe". You can save up to five different recipes by clicking the tabs at the top of the page. These saved recipes use localStorage to persist on the page, even after refresh.

Underneath the "Save recipe" button there is a random recipe from the Recipe Database API. This recipe will be different each time the page is loaded or refreshed. If you find a recipe you like, you can copy it and paste it into the text area to save it.

Below the random recipe, there is a YouTube Search Bar, which uses the YouTube Data API. If you enter a search query into it and click the "Search" button, then the iFrame underneath will show the first result from your search.
#
Deployed Application: https://jroller33.github.io/BC-Project-1/ 

# Screenshot of Application: #
![Screenshot](./assets/screenshot.jpg "Screenshot")

#
This project is licensed under the MIT License.