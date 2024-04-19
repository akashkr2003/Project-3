let tog = document.querySelector("#toggle")
let currMode = 'light'
tog.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.background = "black"
    }else{
        currMode = "light"
        document.querySelector("body").style.background = "white"
    }
    console.log(currMode)
})
