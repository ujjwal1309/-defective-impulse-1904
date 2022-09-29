
// var navbar=document.querySelector(".navbar");
// var help=document.querySelector(".help")

// window.onscroll=function(){
//     if(window.pageYOffset >= help.offsetTop)
//     {
//         navbar.classList.add("sticky")
//     }
//     else
//     {
//         navbar.classList.remove("sticky")
//     }
// }


document.querySelector("#search").addEventListener("mouseover",blur);
document.querySelector("#search").addEventListener("mouseout",blurNormal);

function blur(){
    var search=document.getElementsByTagName("body")[0];
    search.style.background="rgba(0,0,0,0.3 )"
}
function blurNormal(){
    var search=document.getElementsByTagName("body")[0];
    search.style.background="none";
}

document.querySelector("#brand").addEventListener("mouseover",brand);
document.querySelector("#brand").addEventListener("mouseout",brandClose);


function brand(){
    document.querySelector(".brands").classList.add("brands-show");
    var search=document.getElementsByTagName("body")[0];
    search.style.background="rgba(0,0,0,0.3 )"
}

function brandClose(){
    document.querySelector(".brands").classList.remove("brands-show");
    var search=document.getElementsByTagName("body")[0];
    search.style.background="none";
}