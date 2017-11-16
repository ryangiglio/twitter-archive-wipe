const processTweet = (tweet) => {
  return new Promise((resolve, reject) => {
    console.log(`Processing tweet id: ${tweet.tweet_id}`)

    resolve()
  })
}

module.exports = function (tweetsArray) {
  const iterateTweet = (tweetsArray, index) => {
    processTweet(tweetsArray[index])
      .then((response) => {
        setTimeout(() => iterateTweet(tweetsArray, index + 1), 0)
      })
  }

  iterateTweet(tweetsArray, 0)
}
