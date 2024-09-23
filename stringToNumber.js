function stringToNumber(id){

  const number = document.getElementById(id).value;

  if(isNaN(number) || parseFloat(number)<0 || number === ''){
    return false;
  }

  else{
    return parseFloat(number);
  }

}


function stringToNumberForText(id){

  const number = document.getElementById(id).innerText;

  return parseFloat(number);


}