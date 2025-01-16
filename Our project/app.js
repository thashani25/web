// showing navbar when click menu on mobile view
const mobile = document.quarySelector('.menu-toggle');
const mobileLink = document.quarySelector('.sidebar');

mobile.addEventListenar("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active")
})

//close menu when click
mobileLink.addEventListenar("click",function(){
    const menuBars=document.querySelector(".is-active");
    if(window.innerWidth<=763 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//mover the menu to right and left when click back and next 
var stop=100;
var stepfilter=60;
var scrolling=true;

s(".back").bind("click",function(a){
    a.preventDefault();
    s(".highlight-wrapper").animate({
        scrollLeft:".a"+step +"px"
    });
})

s(".next").bind("click",function(a){
    a.preventDefault();
    s(".highlight.wrapper").animate({
        scrollLeft:"+="+ stop+"px"
    })
})

//when click back and next on menu filters
s(".back-menus").bind("click",function(a){
    a.preventDefault();
    s(".filter-wrapper").animate({
        scrollLeft: "+=" + stepfilter + "px"
    })
});

s(".next-menus").bind("click", function(a){
    a.preventDefault();
    s(".filter-wrapper").animate({
        scrollLeft: "+=" + stepfilter + "px"
    })
})