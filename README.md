# Goophy2-alpha
* Google images scrape using npm Nightmare.
* Uses React.JS display.
* Uses Node.js server.

## Giphy has an API, but they don't have the best search engine.
Sometimes Giphy does well.  Popular memems can be found reliably using well-established and correct search terms.

### Some searches will fail with Giphy.  Google is much better.
* _Civilization 6_ or any other video game will return few if any animated gifs of game footage.
* _"You were so preoccupied with whether you could"_, a paraphrase of Ian Malcolm from Jurassic Park, will find irrelevant results on Giphy, but Google will succeed.  _"Your scientists were so preoccupied with whether you could"_ will succeed.
* _"I don't think so Tim"_ performs poorly on Giphy.  Google will return some Home Improvement-themed results. 

## Google is not the easiest site to scrape statically
Notice that Google Images requires JavaScript to display the results page with in-page access to the animated gifs.  A direct scrape using npm Cheerio (or jQuery) would only give you cached still images and a link to the page where the gif was found.  Attempting to find the animated gif with a follow-up leads to unpredictable results which may also depend on JavaScript.

### This program uses npm Nightmare to run a Google Image search
(as if you had selected Safe Search and Tools-type:animated), simulates a mouse click on each of the first 24 results, and captures the URL of each animated gif.  You can set __show:true__ in the nightmare.js file to see it live, or tweak the number of results.

## Use:
This is a Node application.  You will need to run the command __node server__ from the console.  Then open __localhost:3001__ in the web browser.  Type a search and click the Search button _(hitting Enter won't work in this version!)_.  Wait.  (Check the server console to see progress)
