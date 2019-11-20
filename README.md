PART 1
Create a NodeJS project using npm init.
Create a folder in your project called server.
Create a JavaScript file in the server folder named server.js.
In server.js
Import (require) path and fs.
Create an array consisting of at least 5 chirp objects.
Write the array to a file in the root of the project called chirps.json.
Add code to server.js that reads the file and outputs the chirps to the console

PART TWO
Install request-promise from npm and save it to your package.json file.
Create a JavaScript file in the root of your project called reddit.js.
Use request-promise to retreive articles from https://reddit.com/r/popular.json.
Extract from each article title, url, and author
Push each extracted article to an array.
Write the array to a file in the root of your project called popular-articles.json.
