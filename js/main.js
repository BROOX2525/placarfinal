$(document).ready(function(){
  contMn=0;
  document.getElementById("btnMenu").addEventListener("click", function(){
    if (contMn%2==0) {
      $("#btnMenu").addClass('nav-btn__inative');
      $("#navLeft").addClass('nav-left__active');
    } else {
      $("#btnMenu").removeClass('nav-btn__inative');
      $("#navLeft").removeClass('nav-left__active');
    }
    contMn++;
  });
});
