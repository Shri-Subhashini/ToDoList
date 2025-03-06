const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(event){
  //console.log(event);
  if(event.key == "Enter"){
    addToDo(this.value);
    this.value = "";
}
});

const addToDo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <i class = "fas fa-times"></i>`;
    listItem.addEventListener("click", function(){
        this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })
    toDoBox.appendChild(listItem);
}

const arr = [1,2,3,4];
const answer = [];
let previousVal = 0;
//ans [1,3,6,10]
for(let i = 0; i < arr.length; i++){ 
    answer[i] = previousVal + arr[i];
    previousVal = answer[i];
}
console.log(answer);

let counter = 0;
const getData = () => {
    //calls an API and gets a data
    console.log("Fetching data...", counter++);
};

const doSomeMagic = function(fn, delay){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() =>{
            getData.apply(context, arguments);
        }, delay);
    }

}

const betterFunction = doSomeMagic(getData, 300);