/*logic:when you click at any item of projectlist :
===>this message will appear below"you have recently showed this project"
*/


const projList = document.getElementsByClassName("projects");
const messagecont =document.getElementsByClassName("message");
console.log(projList);
for(let i = 0 ; i<projList.length ; i++ ){
    console.log(projList[i]);

    projList[i].addEventListener("click" , function(){
        console.log("you have recently showed this project");
        messagecont[i].textContent="You have recently showed this project";
        console.log(messagecont.textContent);
        projList[i].children[0].style.color="darkgray";
        projList[i].children[1].style.color="green ";

})

}

//____________dark mode_______________


const darkmodebtn = document.getElementById("darkmode");
const header =document.getElementById("head");
const main =document.getElementById("main");
const navList =document.getElementsByClassName("a_nav");
const info =document.getElementById("info");


darkmodebtn.addEventListener("click" , function(){
header.style.background="rgb(29, 29, 126)";

for(let i=0; i<navList.length ; i++) {
    navList[i].style.background ="black";
    navList[i].style.color="white"
}

main.style.background="black";
main.style.color="white";

darkmodebtn.style.background="black"
darkmodebtn.style.color="white"

info.style.color="rgb(157 181 203)";

})


//________________________more info button_________________________


const moreinfobtn1 = document.getElementById("moreinfo01");
const moreinfobtn2 = document.getElementById("moreinfo02")
// const photos =document.getElementsByClassName("card");


// moreinfobtn1.addEventListener("click" , function(event){
//     event.preventDefault();
// photos[0].style.width="100px";
// photos[0].style.height="100px";

// })

// moreinfobtn2.addEventListener("click" , function(){






// })