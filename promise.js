function gameRating() {
  let isNotAvailable = true; //variavle takes static boolean input
  return new Promise((resolve, reject) => {
    if (isNotAvailable) {
      reject({
        message: "The Game Rating Property is not Available ",  // message if promise fails
      });
    } else {
      resolve("The Game is Rated"); // resolved response
    }
  });
}

// then catch block for gameRating function promise
gameRating()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });
