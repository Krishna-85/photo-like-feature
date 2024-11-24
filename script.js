var con = document.querySelector(".container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50% , -50%) scale(1)"
    love.style.opacity = "0.9"
    love.style.color = "red"
    setTimeout(function(){
        love.style.opacity = 0;
    }, 2000)
})