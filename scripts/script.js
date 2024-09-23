const navBalance = stringToNumberForText('nav-money');





const allDonateNowBtn = document.querySelectorAll('.each-donate-btn');

for(let i = 0; i<allDonateNowBtn.length; i++){

  allDonateNowBtn[i].addEventListener('click', function(){
    

    const parentElement = allDonateNowBtn[i].parentElement;
    
    const getInputElementID = parentElement.children[3].id;

    const inputValueInNumber = stringToNumber(getInputElementID);
    console.log(inputValueInNumber);


    

    const modal = document.getElementById('my_modal_5');

    if(inputValueInNumber === false){
      document.getElementById(getInputElementID).value = '';
      alert('Invalid Input');
      modal.close();
    }

    else{
      console.log('good money');
      document.getElementById(getInputElementID).value = '';
      modal.showModal();
    }
    
    

  });

}




// document.getElementById('donate-btn-one').addEventListener('click', function(){

//   const inputOne = stringToNumber('input-donate-1');
  
//   if(inputOne < 0 || typeof inputOne !== "number"){
//     alert('invalid input');
//     return;
//   }

// })