const button = document.getElementById("findButton")
const container = document.getElementById("container")
const input = document.getElementById("input")
const body = document.querySelector("body")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.minWidth = "400px"
let textoo = document.getElementById("textoo")
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;

   let array = []
   array = getAnagramsOf(typedText)
   textoo.innerText = `${array.join(" ")}`
   if (array.length===0){
       textoo.innerText = "Sem anagramas"
   }

    
});

function getAnagramsOf(x){
   const array = [] 
    for(let i = 0; i < words.length; i++){
        if(alphabetize(words[i])===alphabetize(x)){
            array.push(words[i]);
        }
    }
    return array;
}
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}