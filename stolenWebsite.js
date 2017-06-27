var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var myCounter = 0;

$(function()
{
    $('.non-text').mouseover(function()
    {
        myCounter++;
        document.getElementById("hover_counter_num").innerHTML = myCounter;
    });

});

$('#hover_counter_btn').click(resetCounter);

function resetCounter() {
    myCounter = 0;
    document.getElementById("hover_counter_num").innerHTML = myCounter;
}
