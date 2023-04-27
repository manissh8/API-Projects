const quote= document.getElementById("quote");
const button =document.getElementById("btn");
const author = document.getElementById("author");
const url="https://api.quotable.io/random";

let getQuote = ()=>{
    fetch(url)
    .then((data) => data.json())
    .then(item => {
      quote.textContent=`${item.content}`;
      author.textContent=`${item.author}`;
    })
}
window.addEventListener("load", getQuote);
button.addEventListener("click",getQuote);