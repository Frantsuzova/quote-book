randomQuote ();
changeColor ();


$(".btn-new").on('click', function() {
  randomQuote();
  changeColor();
});


function randomQuote () {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=ru", function (quoteObj) { 
  $("#quote").html(quoteObj.quoteText);
  $("#author").html(quoteObj.quoteAuthor);
  });
  return;
}


function changeColor () {
  let rgbColorValues = [0, 51, 102, 153, 204, 255];
  let colorValue = [];
  for (i = 0; i < 3; i++) {
    let randArrIndx = Math.floor(Math.random() * 5);
    colorValue.push(rgbColorValues[randArrIndx]);
  }
  colorValue = 'rgb(' + colorValue.join(",") + ')';
  $( "body" ).css("background-color", colorValue);
  $( ".btn" ).css("color", colorValue);
  if (colorValue === '255,255,255') {
    $( ".btn" ).css("color", "0,0,0");
  } else {
    $( ".btn" ).css("color", colorValue);
  }
  return
}
