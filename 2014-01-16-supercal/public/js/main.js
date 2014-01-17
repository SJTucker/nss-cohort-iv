$(document).ready(initialize);

function initialize(){
  $('.number').click(displayNumber);
  $('#neg').click(changeSign);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);
};

function parseTag(){
  
}

function compute(){
  var operator = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);

  switch(operator){
    case 'add':
      var total = numbers[0] + numbers[1];
      $('#display').text(total);
      $('#queue').empty();
    //  var aa = $(a).text(); //or aa = a.textContent();
      /* {
        var x = 0;
        for(var i = 0; i < $('#queue li').length; i ++)
          {
            var y = $('#queue li');
            x += y[i];
          }
        return x;
        $('#display').text(x);
      }*/
    break;
    case 'sub':
      var numbers = parseTag($lis);
      var total = numbers[1] + numbers[0];
      $('#display').text(total);
      $('#queue').empty();
    break;
    case 'mult':
      var $lis = $('#queue li')
      var a = parseFloat($lis[0].textContent);
      var b = parseFloat($lis[1].textContent);
      var total = a * b;
      $('#display').text(total);
      $('#queue').empty();
    break;
    case 'div':
      var $lis = $('#queue li')
      var a = parseFloat($lis[0].textContent);
      var b = parseFloat($lis[1].textContent);
      var total = a / b;
      $('#display').text(total);
      $('#queue').empty();
    break;
    case 'sum':
       // var $numArray = $('#queue li');
        var y = 0;
        for(var i = 0; i < $('#queue li').length; i ++)
          {
            y += parseFloat($('#queue li')[i]);
          }
        return y;
        $('#display').text(y);
        $('#queue').empty();

    break;
    case 'pow':
      var $lis = $('#queue li')
      var a = parseFloat($lis[0].textContent);
      var b = parseFloat($lis[1].textContent);
      var total = Math.pow(a, b);
      $('#display').text(total);
      $('#queue').empty();

  }
  
}

function pushToQueue(){
  var x = $('#display').text();
  $('#display').text('0');
  var $li = $('<li>');
  $li.text(x);
  $('#queue').prepend($li);
}
function displayNumber(){
  var display = $('#display').text();
  var current = this.textContent;
  var output;
  if(current === '.' && containsChar(display, '.')) return;
  
  if(display === '0' && current !== '.')
    output = current;
  else
    output = display + current;

  $('#display').text(output);
}

function changeSign(){
  var number = $('#display').text();
  number *= -1;
  $('#display').text(number);

}

