function removeTwitterTrends() {
  function tryToRemove(callback) {
    console.log("Trying to removing Twitter Trends");
    const div = document.querySelector(
      `div[aria-label="タイムライン: トレンド"]`
    );
    if (div) {
      div.style.display = "none";
      callback();
    }
  }

  let whatever = setInterval(() => {
    tryToRemove(() => {
      clearInterval(whatever);
    });
  }, 100);
}

setInterval(() => removeTwitterTrends(), 100);
