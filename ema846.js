const topSection = document.getElementById("homeSection");
const midSection = document.getElementById("midSection");
const botSection = document.getElementById("botSection");
const pageDownButton = document.getElementById("scrollDownButton");
const inputFields = document.getElementsByClassName("form-input");
const scrollList = document.getElementById("scrollList");
const searchButton = document.getElementById("searchbutton");
const searchinput = document.getElementById("search");
const toshop = document.getElementById("shopButton");

searchButton.addEventListener("click",search);

toshop.addEventListener("click",pageDown);

pageDownButton.addEventListener("click",pageDown);

function pageDown(){
  document.getElementById('midSection').scrollIntoView();
}

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

let counter = 0;

function list(a,b){
  scrollList.innerHTML = "";
  let i;
  for( i = 0;i<b;i++){
     
      var product = document.createElement("div");
      var picdiv = document.createElement("div");
      var pic = document.createElement("img");
      var textdiv = document.createElement("div");
      var name = document.createElement("h1");
      var desc = document.createElement("div");
      var price = document.createElement("div");
      var button = document.createElement("button");

      let idname = "image"+i;
      pic.setAttribute("id",idname)
      name.textContent = a[i].name
      desc.textContent = a[i].description
      price.textContent = "$ "+a[i].price+".00"
      button.textContent = "Buy Now!"

      textdiv.style.cssText = "margin-left: 25.1vw; margin-top: 0.2vh;width: 59.5vw;height: 40vh;font-weight: bold;text-align: center;font-size: 1.2rem;display: flex;flex-direction: column;background-color: #c9b2aa;"
      name.style.cssText = "margin-top: 1vh;font-size: 1.5rem;text-align: centre;"
      desc.style.cssText = "font-size: 0.75rem;padding-left: 2.5vw; padding-right: 2.5vw; margin-top: 0vh;"
      price.style.cssText = "font-size: 1.25rem; margin-top: 1.5vh;text-align: centre;"
      button.style.cssText = "width: 10vw;height: 5vh;margin-top: auto; margin-bottom:1vh;margin-left:auto;margin-right: auto;"

      pic.style.cssText = "position: absolute; width: 25vw;height: 40vh;margin: auto;"
      picdiv.style.cssText = "width: 25vw; margin-top:0.2vh"
      product.style.cssText = "width: 86vw;height: 40vh;"

      textdiv.appendChild(name);
      textdiv.appendChild(desc);
      textdiv.appendChild(price);
      textdiv.appendChild(button);
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

function search(){
  
  var inputVal = searchinput.value;
  var fetchProducts = 
  fetch('https://cws.auckland.ac.nz/gas/api/Items/'+inputVal,
      {
          headers : {
              "Accept" : "application/json",
          },
      });

const streamProducts = 
fetchProducts.then((response) => response.json())
.then((data) => list(data,data.length));
searchinput.value = "";
}

