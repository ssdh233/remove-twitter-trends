function removeTwitterTrends(callback) {
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
  removeTwitterTrends(() => {
    clearInterval(whatever);
  });
}, 100);
