function menuOption() {
  var div = document.getElementsByClassName("navigation_bar")[0]; 
  if (div.style.display === "none") { 
    div.style.display = "inline-block";
  } else {
    div.style.display = "none";
  }
}



//Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5f87064e2901b920769365bd/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    
// Weather API code
(function(d, s, id) {
  if (d.getElementById(id)) {
      if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
      }
      return;
  }
  const fjs = d.getElementsByTagName(s)[0];
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');

var reviewForm = document.querySelector()