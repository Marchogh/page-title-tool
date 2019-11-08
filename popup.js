let itemInput = document.querySelector('input[type="text"]');
let itemOutput = document.querySelector(".output");
let titleLength = document.querySelector(".length");
let pageTitle = document.querySelector(".page-title");
let metaOutput = document.querySelector(".meta-output");
let url = document.querySelector(".url");
let currentTitle = document.querySelector(".current-title-length");

itemInput.addEventListener("keyup", runEvent);

function runEvent(e) {
  itemOutput.innerHTML = e.target.value;
  titleLength.innerHTML = e.target.value.length;
  if (e.target.value.length >= 65) {
    titleLength.classList.add("red");
    titleLength.classList.remove("blue");
    titleLength.classList.remove("yellow");
  } else {
    titleLength.classList.add("blue");
    titleLength.classList.remove("red");
    titleLength.classList.remove("yellow");
  }
}

// Page title & Url from current browser window
chrome.tabs.query(
  { active: true, lastFocusedWindow: true, currentWindow: true },
  function(tabs) {
    pageTitle.innerHTML = tabs[0].title;
    url.innerHTML = tabs[0].url;
    currentTitle.innerHTML = tabs[0].title.length;

    if (tabs[0].title.length >= 65) {
      currentTitle.classList.add("red");
      currentTitle.classList.remove("blue");
      currentTitle.classList.remove("yellow");
    } else {
      currentTitle.classList.add("blue");
      currentTitle.classList.remove("red");
      currentTitle.classList.remove("yellow");
    }
  }
);
