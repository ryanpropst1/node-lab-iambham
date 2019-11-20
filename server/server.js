let fs = require("fs");
const path = "path";

// const data = require("./chirps");
// let rp = require("request-promise");

let chirp = {
  chirp1: "Tweet Dear",
  chirp2: "Tweet Tweet Dearie",
  chirp3: "Tweet What Not",
  chirp4: "Sulfur Crested Cockatoos",
  chirp5: "Lorikeets tweet tweet tweet"
};

fs.writeFile("./chirps.json", JSON.stringify(chirp), err => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("write file has finished successfully!");
});

fs.readFile("./chirps.json", "utf-8", (err, data) => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("read file finished and successful!");
  let dataChirps = JSON.parse(data);
  console.log(dataChirps);
});
