




const allDonateNowBtn = document.querySelectorAll('.each-donate-btn');

for(let i = 0; i<allDonateNowBtn.length; i++){

  allDonateNowBtn[i].addEventListener('click', function(){
    

    const parentElement = allDonateNowBtn[i].parentElement;
    
    const getInputElementID = parentElement.children[3].id;

    const currentDonationBalanceID = parseFloat(parentElement.children[0].children[1].innerHTML);

    const forDonation = parentElement.children[1].innerText;

    

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

        let historyCardsDiv = document.getElementById('history-cards-div');

        
        
        const currentTime = new Date();
        console.log(currentTime);
        
        const newCard = document.createElement('div');
        const historyCard  = `
          <div class="each-history-card w-full border border-gray-200 rounded-lg p-4 flex flex-col gap-3">
          <h1 class="font-bold text-lg">${inputValueInNumber} Taka is ${forDonation}</h1>
          <p class="text-gray-500 text-sm">Date: ${currentTime}</p>
          </div>
        `;

        newCard.innerHTML = historyCard;
        historyCardsDiv.insertBefore(newCard, historyCardsDiv.firstChild);


      }
      else{
        alert('Insufficient Balance');
        document.getElementById(getInputElementID).value = '';
      }
    }
    
    

  });

}














document.getElementById('nav-donate-btn').addEventListener('click', function(){

  const donateCardsDiv = document.getElementById('donate-cards-div');
  const allHistoryDiv = document.getElementById('history-cards-div');


  const navDonateBtn = document.getElementById('nav-donate-btn');
  const navHistoryBtn = document.getElementById('nav-history-btn');
  navDonateBtn.style.backgroundColor = '#B4F461';
  navHistoryBtn.style.backgroundColor = '#EDEBE8';



  donateCardsDiv.classList.remove('hidden');
  allHistoryDiv.classList.add('hidden');


})




document.getElementById('nav-history-btn').addEventListener('click', function(){

  const donateCardsDiv = document.getElementById('donate-cards-div');
  const allHistoryPage = document.getElementById('history-cards-div');


  const navDonateBtn = document.getElementById('nav-donate-btn');
  const navHistoryBtn = document.getElementById('nav-history-btn');
  navDonateBtn.style.backgroundColor = '#EDEBE8';
  navHistoryBtn.style.backgroundColor = '#B4F461';

  donateCardsDiv.classList.add('hidden');
  allHistoryPage.classList.remove('hidden');

})




document.getElementById('blog-btn').addEventListener('click', function(){

  window.location.href = "./accordion/accordion.html";

})



