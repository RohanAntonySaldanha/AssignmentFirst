function gameRating() {
  let IsBad = false;
  return new Promise((resolve, reject) => {
    if (IsBad) {
      reject({
        message: "The Game is not Good",
      });
    } else {
      resolve("It is a Good Game");
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
