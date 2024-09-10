/* Vraiables */
let head_button =document.getElementById("head-button");
let logo=document.querySelector(".logo");
let menu=document.getElementById("menu");
let nav=document.querySelector("header .container nav");
let body=document.querySelector("body");
let hero=document.querySelector(".hero");
let header=document.querySelector("header");
let cont=document.querySelector("header .container");
let featured=document.querySelector(".featured");
let how_work=document.querySelector(".how_work");
let p_how=document.querySelector(".how_work .container p");
let h2_how=document.querySelector(".how_work .container h2");
let featured_cont=document.querySelector(".featured .container");
let divs=document.querySelectorAll(".div1");
let meals_divs =document.querySelectorAll(".hide-element");
let outline_input=document.querySelectorAll(".outline");
let how=document.getElementById("how");
let meals=document.getElementById("meals");
let meals_div=document.querySelector(".meals");
let test=document.getElementById("test");
let test_div=document.querySelector(".test");
let price=document.getElementById("price");
let price_div=document.querySelector(".pricing");
let free=document.getElementById("free");
let free_div=document.querySelector(".freesec");
how.onclick=()=>
    {
        window.scrollTo(0,how_work.offsetTop);
        
    }
meals.onclick=()=>
    {
        window.scrollTo(0,meals_div.offsetTop);
        
    }
price.onclick=()=>
    {
        window.scrollTo(0,price_div.offsetTop);
        
    }
    free.onclick=()=>
    {
        window.scrollTo(0,free_div.offsetTop -580);
        
    }
test.onclick=()=>
{
    window.scrollTo(0,test_div.offsetTop);
}
let f=0,x=0;
//////////////////
/*Show Elment On scroll */
window.onscroll =()=>
{
    let featured_top=featured.offsetTop;
    if(window.scrollY >= featured_top - 200)
    {
        featured_cont.classList.add("show-elemnt");
    }
    if(window.scrollY >= featured_top &&!x )
    {
        header.classList.add("fix-header");
        cont.classList.add("white");
    }
    else
    {
        header.classList.remove("fix-header");
        cont.classList.remove("white");
    }
    if(window.scrollY >= how_work.offsetTop - 200)
    {
        h2_how.classList.add("show-elemnt");
        p_how.classList.add("show-elemnt");
        divs.forEach(elment=>{
            if(window.scrollY>elment.offsetTop - 200)
            {
                elment.classList.add("show-elemnt");
            }
        })
    }
    meals_divs.forEach(elme=>{
        if(window.scrollY>elme.offsetTop - 200)
        {
            elme.classList.add("show-elemnt");
        }
    })
}
/////////////////////
/* Show Header (responsive) */
head_button.onclick=()=>
{
    x=1;
    if(!f)
    {
    head_button.style.cssText="margin-bottom: 50px";
    head_button.innerHTML=`<i class="fa-regular fa-circle-xmark"></i>`;
    f=1;
    logo.classList.add("hidden");
    menu.classList.add("menu");
    menu.classList.remove("hidden2");
    nav.classList.add("nav-res");
    // body.classList.add("body-hidden");
    }
    else
    {
        head_button.style.cssText="margin-bottom: 0px";
        head_button.innerHTML=`<i class="fa-solid fa-bars"></i>`;
        f=0;
        logo.classList.remove("hidden");
        menu.classList.remove("menu");
        menu.classList.add("hidden2");
        nav.classList.remove("nav-res");
        // body.classList.remove("body-hidden");
    }
}
function outline( id)
{
    let elm_id=document.getElementById(id);
    elm_id.style.cssText=" outline: 13px solid #fdf2e99c"
}
function del(id)
{
    let elm_id=document.getElementById(id);
    elm_id.style.cssText=" outline:none"
}