console.log("sing.js loaded");


for (var ans = window.prompt('How many verses do you want to hear?'), i = ans; i >=0 ; i--){

  if(i===0){
    console.log('No more bottles of beers on the wall!');
    console.log('No more bottles of beers on the wall,')
    console.log('No more bottles of beer!');
    break;
  } else if (i===1) {
    console.log('1 more bottle of beers on the wall!');
    console.log('1 more bottle of beers on the wall,');
    console.log('1 more bottle of beer!');
  }else if (i === ans) {
    console.log( i + ' more bottles of beers on the wall,');
    console.log( i + ' more bottles of beer!');
  }else {
    console.log( i + ' more bottles of beers on the wall!');
    console.log( i + ' more bottles of beers on the wall,')
    console.log( i + ' more bottles of beer!');

  }
  console.log('Take one down and pass it around,')
};
