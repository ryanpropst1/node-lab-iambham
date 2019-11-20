const rp = require("request-promise");
const fs = require("fs");
const path = require("path");

// let dataPath = path.join(__dirname, "./popular-articles.json");
let redditSpecData = [];

// let options = {
//   uri: "https://reddit.com/r/popular.json",
//   headers: {
//     "User-Agent": "Request-Promise"
//   },
//   resolveWithFullResponse: true,
//   json: true // Automatically parses the JSON string in the response
// };

rp("https://reddit.com/r/popular.json")
  .then(res => {

    // parsing over the JSON file and then iterrating over
    // the parsed file and map to new object
    let redditArticles = JSON.parse(res).data.children.map(
      element => element.data
    );
    // console.log(redditArticles);
    // iterrate over the object and map to deconstructed Object to
    // hold title, author and URL and push to new array
    redditArticles.map(redittArticle => {
      let newData = {
        title: redittArticle.title,
        author: redittArticle.author_fullname,
        url: redittArticle.url
      };
      redditSpecData.push(newData);
      console.log(redditSpecData);


// write array to JSON file and save as popular_articles
      fs.writeFileSync(
        "./popular_articles.json",
        JSON.stringify(redditSpecData),
        err => {
          if (err) {
            console.log(`Error wrting JSON file!, Error: ${err}`);
          } else {
            console.log("write file has finished successfully!");
          }
        }
      );
    });
  })
  .catch(function(err) {
    // API call failed...
    console.log(`API call failed, error: ${err}`);
  });
