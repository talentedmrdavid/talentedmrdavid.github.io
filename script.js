// Dark mode toggle
function toggleDark() {
  document.body.classList.toggle("dark");
}

// Reading progress bar
window.onscroll = function () {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
};
