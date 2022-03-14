const button = document.getElementById("findButton")
const container = document.getElementById("container")
const input = document.getElementById("input")
const body = document.querySelector("body")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.minWidth = "400px"

button.addEventListener("click", function () {
    
    let typedText = document.getElementById("input").value;
   let texto = document.createElement("p")
   let array = []
   array = getAnagramsOf(typedText)
   texto.innerText = `${array.join(" ")}`
   container.appendChild(texto)
    
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