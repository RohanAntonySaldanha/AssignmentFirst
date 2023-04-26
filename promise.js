function gameRating() {
  let isNotAvailable = true;
  return new Promise((resolve, reject) => {
    if (isNotAvailable) {
      reject({
        message: "The Game Rating Property is not Available ",
      });
    } else {
      resolve("The Game is Rated");
    }
  });
}

gameRating()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });
