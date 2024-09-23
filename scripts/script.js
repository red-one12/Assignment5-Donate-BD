




const allDonateNowBtn = document.querySelectorAll('.each-donate-btn');

for(let i = 0; i<allDonateNowBtn.length; i++){

  allDonateNowBtn[i].addEventListener('click', function(){
    

    const parentElement = allDonateNowBtn[i].parentElement;
    
    const getInputElementID = parentElement.children[3].id;

    const currentDonationBalanceID = parseFloat(parentElement.children[0].children[1].innerHTML);

    const inputValueInNumber = stringToNumber(getInputElementID);

    // console.log(inputValueInNumber);
    


    

    const modal = document.getElementById('my_modal_5');
    const navBalance = stringToNumberForText('nav-money');


    if(inputValueInNumber === false){
      document.getElementById(getInputElementID).value = '';
      alert('Invalid Input');
      modal.close();
    }

    else{
      if(navBalance >= inputValueInNumber){
        console.log('good money');


        const newNavBalance = navBalance - inputValueInNumber;
        document.getElementById('nav-money').innerText = newNavBalance;

        const newLocationBalance = currentDonationBalanceID + inputValueInNumber;

        parentElement.children[0].children[1].innerHTML = newLocationBalance;

        document.getElementById(getInputElementID).value = '';
        modal.showModal();
      }
      else{
        alert('Insufficient Balance');
        document.getElementById(getInputElementID).value = '';
      }
    }
    
    

  });

}


