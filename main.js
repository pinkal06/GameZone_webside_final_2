document.querySelector(".search-btn").addEventListener("click",function(){

let search=document.querySelector(".search-box").value;

if(search=="")
{
alert("Please Enter Game Name");
}

else
{
alert("Searching for : "+search);
}

});
function playGame(gamePage){

window.location.href=gamePage;

}
document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault()

alert("🎮 Welcome Gamer! Login Successful")

})
let btn = document.getElementById("topBtn")

window.onscroll = function(){

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
btn.style.display="block"
}else{
btn.style.display="none"
}

}

btn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
})
}


