const topSection = document.getElementById("homeSection");
const midSection = document.getElementById("midSection");
const botSection = document.getElementById("botSection");
const pageDownButton = document.getElementById("scrollDownButton");
const inputFields = document.getElementsByClassName("form-input");
const submitButton = document.getElementById("form-submit");
const scrollList = document.getElementById("scrollList");

pageDownButton.addEventListener("click",pageDown);
pageDownButton.addEventListener("keydown", function(event){
  if(event.keyCode === 13){
    pageDownButton.click();
  }
});
function pageDown(){
  document.getElementById('midSection').scrollIntoView();
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



const fetchProducts = 
  fetch('https://cws.auckland.ac.nz/gas/api/AllItems',
      {
          headers : {
              "Accept" : "application/json",
          },
      });

const streamProducts = 
fetchProducts.then((response) => response.json())
.then((data) => list(data,data.length));

function list(a,b){
  let i;
  for( i = 0;i<b;i++){
      console.log(a[i].name);
      var product = document.createElement("div");
      var picdiv = document.createElement("div");
      var pic = document.createElement("img");
      var textdiv = document.createElement("div");
      var name = document.createElement("h1");
      var desc = document.createElement("div");



      let idname = "image"+i;
      pic.setAttribute("id",idname)
      name.textContent = a[i].name
      desc.textContent = a[i].description

      // textdiv.style.cssText = "position: absolute;top: 0;bottom: auto;left:auto;right: 0;width: 50vw;height: 25vh;font-weight: bold;text-align: center;font-size: 1.2rem;display: flex;flex-direction: column;background-color: #c9b2aa;padding-right: 5vw;"
      // name.style.cssText = "position: absolute;margin-top: 15vh;font-size: 2rem;text-align: left;padding-left: 5vw;padding-right: 5vw;animation-name: slide_title;animation-duration: 0.75s;animation-iteration-count: 1;"
      // desc.style.cssText = "position: absolute;font-size: 1.2rem;text-align: left;padding-left: 5vw;margin-top: 30vh;padding-right: 5vw;"
      pic.style.cssText = "width: 20vw;height: 25vh;margin: auto;"
      picdiv.style.cssText = "width: 20vw;"
      product.style.cssText = "width: 86vw;height: 25vh;"

      textdiv.appendChild(name);
      textdiv.appendChild(desc);
      picdiv.appendChild(pic);
      product.appendChild(picdiv);
      product.appendChild(textdiv);
      scrollList.appendChild(product);

      var fetchimage = fetch('https://cws.auckland.ac.nz/gas/api/ItemPhoto/'+a[i].id);
      const baba = fetchimage.then((response) => response.blob())
      .then(imageblob => {
        const imageObjectURL = URL.createObjectURL(imageblob);
        document.getElementById(idname).setAttribute("src", imageObjectURL);
    });
  }
}







  // var link = document.createElement("a");
  // link.innerText = "Link Text"
  // link.setAttribute('href', 'http://www.google.it');
  // node.appendChild(link);
  // p.appendChild(node);