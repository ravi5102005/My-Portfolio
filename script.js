
let TestimonialDetails=[
    {Name:"Sudhrasan",
     Img :"sudhrasan.jpg",
     Work:"ZS-Tech",
     Comment:"Ravi is an incredibly hardworking and dedicated individual who consistently puts in maximum effort to achieve his goals. His determination and commitment are truly inspiring, driving him to excel in whatever he sets his mind to. With his strong work ethic and unwavering focus, he serves as a remarkable example of diligence and dedication to everyone around him."},
     {Name:"Rajesh",
     Img :"rajesh.jpeg",
     Work:"ZS-Tech",
     Comment:`I've had the privilege of collaborating with Ravi on a few projects, and it's always
     been an absolute blast.
     His talent and creativity know no bounds. What I love most is their ability to bring
     fresh perspectives and ideas to
     the table. Ravi has this knack for making even the most mundane topics exciting and
     engaging`},
     {Name:"Advik Singh Somvanshi",
     Img :"advik.png",
     Work:"ZS-Tech",
     Comment:"Working with Ravikrishnan has been an absolute pleasure. His expertise as a web developer shines through in every project, and his collaborative approach makes teamwork seamless. Highly recommend him for any web development needs!"}
]


 function _(idName) {
  let id = document.getElementById(idName);
  return id;
}
 let menuClick = 1;
 _("hamburger_menu").addEventListener("click",(event)=>{
    // console.log()
    if(menuClick==1){
        openMenuPage();
    }
    else{
        closeMenuPage();
    }
 });



 let Testimonial=0;
_("right_arrow").addEventListener("click",()=>{
    if(Testimonial<2){
        document.getElementsByClassName("Testimonial_person_name")[0].textContent=TestimonialDetails[++Testimonial].Name;
        document.getElementsByClassName("Testimonial_person_work")[0].textContent=TestimonialDetails[Testimonial].Work;
        document.getElementsByClassName("comment")[0].textContent=TestimonialDetails[Testimonial].Comment;
        document.getElementById("person_img").style.backgroundImage =`url(${TestimonialDetails[Testimonial].Img})`;
        _("right_arrow").style.display="inline";
    }
    if(Testimonial==2){
            _("right_arrow").style.display="none";
        }
        _("left_arrow").style.display="inline";
})
_("left_arrow").addEventListener("click",()=>{
    if(Testimonial>0){
      _("left_arrow").style.display="inline";
      document.getElementsByClassName("Testimonial_person_name")[0].textContent=TestimonialDetails[--Testimonial].Name;
      document.getElementsByClassName("Testimonial_person_work")[0].textContent=TestimonialDetails[Testimonial].Work;
      document.getElementsByClassName("comment")[0].textContent=TestimonialDetails[Testimonial].Comment;
      document.getElementById("person_img").style.backgroundImage =`url(${TestimonialDetails[Testimonial].Img})`;
    }
    if(Testimonial==0){
            _("left_arrow").style.display="none";
        }
    _("right_arrow").style.display="inline";
})


_("menu1").addEventListener(("click"),(event)=>{
    if(event.target.className=="menu_link"){
    closeMenuPage();
    }
})


function openMenuPage(){
        _("menu").style.transform="translateX(0)";
        _("hamburger_menu").textContent=">";
        _("hamburger_menu").style.backgroundColor=" rgb(255, 217, 189)";
        document.getElementsByClassName("preson1_img")[0].style.zIndex="1";
        _("right_arrow").style.zIndex="0";
        _("right_arrow").style.transition="0s";
        menuClick=0;
}

function closeMenuPage(){
    _("menu").style.transform="translateX(100%)";
        _("hamburger_menu").textContent="<";
        _("hamburger_menu").style.backgroundColor="rgba(0,0,0,0)";
        _("right_arrow").style.zIndex="3";
        _("right_arrow").style.transition="3s";
        menuClick=1;
}

function initTestimonial(){
      document.getElementsByClassName("Testimonial_person_name")[0].textContent=TestimonialDetails[Testimonial].Name;
      document.getElementsByClassName("Testimonial_person_work")[0].textContent=TestimonialDetails[Testimonial].Work;
      document.getElementsByClassName("comment")[0].textContent=TestimonialDetails[Testimonial].Comment;
}
initTestimonial();



 // Get the video element
 const video = document.querySelector('.project1_animation');
// When the video ends, replay it from the beginning
video.addEventListener('ended', function() {
    video.currentTime = 0; // Set current time to the beginning
    video.play(); // Start playing again
});

// Prevent pausing the video
video.addEventListener('pause', function(event) {
    event.preventDefault();
    video.play();
});
