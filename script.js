

//=======Scroll reveal======

ScrollReveal().reveal('.about-Container,.service-Container,.project-Container,.contact-container', { duration: 500, origin: 'top', distance: '50px', delay: 500, reset: true });
ScrollReveal().reveal('.home-section,.social-icon,.follow-me,.your message,#message,.send-btn,#button', { duration: 1000, origin: 'bottom', distance: '100px', delay: 500, reset: true });
ScrollReveal().reveal('.home-image,.about-image,#service-box-2,#portfolio-box-2', { duration: 1000, origin: 'top', distance: '100px', delay: 500, reset: true });
ScrollReveal().reveal('#service-box-1,#portfolio-box-1,#name,.about-pragra', { duration: 1000, origin: 'left', distance: '100px', delay: 500, reset: true });
ScrollReveal().reveal('#service-box-3,#portfolio-box-3,#email,#about-heading', { duration: 1000, origin: 'right', distance: '100px', delay: 500, reset: true });

    //==========mobile menu toggle icon bar =========


    let sidemenu = document.getElementById("side-menu");

    function openmenu() { 
      sidemenu.style.right = "0"
    }

    function closemenu() {
      sidemenu.style.right = "-200px"
    }


    //----home section---

    //----home page download cv button call funtion---

    let = document.getElementById("button-cv").addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "RESUME.pdf"; link.download = "My.CV.pdf";
      link.click();
    });


    //-----service section buttons--

  //open function ------  

function openModel(modelId){

  document.querySelector(".popup-overlay").style.display="block";
  document.getElementById(modelId).style.display="block";

}

//----close function--

function closeModel(modelId){

  document.querySelector(".popup-overlay").style.display="none";
  document.getElementById(modelId).style.display="none";
}





    //----project section in web development project liink--1 
   
       function web() {

        window.open("https://example.com");
      
    };

    //----project section in UI Design project liink--2 

     function uidesign() {

      window.open("https://www.figma.com/design/cz3mlMJF1AgR9B8MSrytn3/All-in-one-page?node-id=144-89&t=31egXU80Xx1Ugism-1");
    };

    //----project section in Grapics Design project liink-3-

    function grapic () {

      window.open("https://example.com");
    };

 


 
