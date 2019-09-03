let memes = [
  {
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    width: 1200,
    height: 800
  },
  {
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200
  },
  {
    name: "Two Buttons",
    url: "https://i.imgflip.com/1g8my4.jpg",
    width: 600,
    height: 908
  },
  {
    name: "Mocking Spongebob",
    url: "https://i.imgflip.com/1otk96.jpg",
    width: 502,
    height: 353
  },
  {
    name: "Change My Mind",
    url: "https://i.imgflip.com/24y43o.jpg",
    width: 482,
    height: 361
  }
];

let currentIndex = 0;
let hoveredIndex = 0;

document.addEventListener("DOMContentLoaded", () => {  
  let memeTemplates = document.querySelectorAll("img.meme-selection");

  document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("meme-selection")) {
      hoveredIndex = Array.prototype.indexOf.call(memeTemplates, event.target);  
      document.getElementById("meme-title").innerHTML = memes[hoveredIndex].name;
    } else {
      hoveredIndex = currentIndex;
      document.getElementById("meme-title").innerHTML = memes[currentIndex].name;
    }

    if (hoveredIndex == currentIndex) {
      document.getElementById("meme-title").innerHTML = memes[currentIndex].name.bold();
    }
  }, false);

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("meme-selection")) {
      currentIndex = Array.prototype.indexOf.call(memeTemplates, event.target);  
      document.getElementById("selected-meme").src = memes[currentIndex].url;
      document.getElementById("selected-meme").width = memes[currentIndex].width/2;
      document.getElementById("selected-meme").height = memes[currentIndex].height/2;
    }

    if (hoveredIndex == currentIndex) {
      document.getElementById("meme-title").innerHTML = memes[currentIndex].name.bold();
    }
  }, false);

});
