// Node
const fs = require('fs')

// Functions
const reverseTweetStream = require('./reverseTweetStream')
const processTweets = require('./processTweets')

// Main
const stream = fs.createReadStream('./config/tweets.csv')

reverseTweetStream(stream)
  .then((tweetsArray) => {
    processTweets(tweetsArray)
  })
