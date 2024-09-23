function stringToNumber(id){

  const number = document.getElementById(id).value;

  if(isNaN(number) || parseFloat(number)<0){
    return false;
  }

  else{
    return true;
  }

}


function stringToNumberForText(id){

  const number = document.getElementById(id).innerText;

  return parseFloat(number);


}