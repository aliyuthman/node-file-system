import fs from "fs";

const cleanTweets = (tweetToClean) => {
  //code that remove bad tweets
};

const useImportedTweets = (errorData, data) => {
  const cleanedTweetsJson = cleanTweets(data);
  const tweetsObj = JSON.parse(cleanedTweetsJson);
  console.log(tweetsObj.tweet2);
};

fs.readFile("./tweets.json", useImportedTweets);
