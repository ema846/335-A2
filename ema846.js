const topSection = document.getElementById("homeSection");
const midSection = document.getElementById("midSection");
const botSection = document.getElementById("botSection");
const pageDownButton = document.getElementById("scrollDownButton");
const inputFields = document.getElementsByClassName("form-input");
const submitButton = document.getElementById("form-submit");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");


pageDownButton.addEventListener("click",pageDown);
pageDownButton.addEventListener("keydown", function(event){
  if(event.keyCode === 13){
    pageDownButton.click();
  }
});
function pageDown(){
  document.getElementById('midSection').scrollIntoView();
}

let storyIndex = 1;

showStory(storyIndex);

function plusStory(n) {
  showStory(storyIndex += n);
}
function showStory(n) {
  let i;
  let story = document.getElementsByClassName("story");
  if (n > story.length) {
    storyIndex = 1;
    }

  if (n < 1) {
    storyIndex = story.length;
    }
  for (i = 0; i < story.length; i++) {
    story[i].style.display = "none";
  
  story[storyIndex-1].style.display = "block";
  }
}

// prevButton.addEventListener("keydown", function(event){
//   if(event.keyCode === 13){
//     prevButton.click();
//   }
// });

// nextButton.addEventListener("keydown", function(event){
//   if(event.keyCode === 13){
//     nextButton.click();
//   }
// });

const fetchVersion = 
  fetch('https://cws.auckland.ac.nz/gas/api/Version',
      {
            headers : {
                "Accept" : "text/plain",
            },
      });

const streamVersion = 
fetchVersion.then((response) => response.text());
streamVersion.then((data) => document.getElementById("version").innerHTML ="Verson: " + data);



// const fetchProducts = 
//   fetch('https://cws.auckland.ac.nz/gas/api/AllItems',
//       {
//           headers : {
//               "Accept" : "application/json",
//           },
//       });

// const streamProducts = 
// fetchProducts.then((response) => response.json())
// .then((data) => list(data,data.length));

// function list(a,b){
//   // let i;
//   // for( i = 0;i<b;i++){
//   //     console.log(a[i].name);
//   // }
//   const wa = getElementById("productImage");
//   // wa.source = 
// }

const fetchimage = fetch('https://cws.auckland.ac.nz/gas/api/ItemPhoto/5431446829');
const baba = fetchimage.then((response) => response.blob())
.then(imageblob => {
  const imageObjectURL = URL.createObjectURL(imageblob);
  document.getElementById("productImage").setAttribute("src", imageObjectURL);
});

var p = document.getElementById("aaaaa");
var node = document.createElement("div");
  var link = document.createElement("a");
  link.innerText = "Link Text"
  link.setAttribute('href', 'http://www.google.it');
 node.appendChild(link);
  p.appendChild(node);