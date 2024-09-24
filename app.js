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

//_________________________________dark mode__________________________________________


const darkmodebtn = document.getElementById("darkmode");
const header =document.getElementById("head");
const main =document.getElementById("main");
const navList =document.getElementsByClassName("a_nav");
const info =document.getElementById("info");


// darkmodebtn.addEventListener("click" , function(event){
// event.preventDefault();
// header.style.background="rgb(29, 29, 126)";

// for(let i=0; i<navList.length ; i++) {
//     navList[i].style.background ="black";
//     navList[i].style.color="white"
// }

// main.style.background="black";
// main.style.color="white";

// darkmodebtn.style.background="black"
// darkmodebtn.style.color="white"

// info.style.color="rgb(157 181 203)";

// })
//________________best solution_________________
function darkmode(){
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
    
}


//_______________________________more info button_________________________________________


const moreinfobtn = document.getElementsByClassName("moreinfo")
const photos =document.getElementsByClassName("cer_photo");
const photoscont =document.getElementsByClassName("card");
const moreinfomsg =document.getElementsByClassName("infomsg");



//____________button1________

        moreinfobtn[0].addEventListener("click" , function(){
           moreinfobtn[0].style.background="rgb(29, 29, 126)"
               moreinfobtn[0].style.color="white"
              if(moreinfobtn[0].innerText==="More information"){
                moreinfobtn[0].innerText="Less infromation"
                photos[0].style.display="none"
                moreinfomsg[0].style.display="inline"
              }else{
                moreinfomsg[0].style.display="none"
                photos[0].style.display="inline"
                moreinfobtn[0].innerText="More information"
                moreinfobtn[0].style.background="white"
                moreinfobtn[0].style.color="rgb(29, 29, 126)"
              }  
        })
        
//____________button 2______________

moreinfobtn[1].addEventListener("click" , function(){
    moreinfobtn[1].style.background="rgb(29, 29, 126)"
        moreinfobtn[1].style.color="white"
       if(moreinfobtn[1].innerText==="More information"){
         moreinfobtn[1].innerText="Less infromation"
          photos[1].style.display="none"
         moreinfomsg[1].style.display="inline"
       }else{
          moreinfomsg[1].style.display="none"
         photos[1].style.display="inline"
         moreinfobtn[1].innerText="More information"
         moreinfobtn[1].style.background="white"
         moreinfobtn[1].style.color="rgb(29, 29, 126)"
       }  
 })
    
    





  





















