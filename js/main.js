const numberContainer = document.querySelector('.section-container-s1__number');
const rateNumber = document.querySelector('.section-container-s2__result-span');
const submitBtn = document.querySelector('.section-container-s1__button');
const section1 = document.querySelector('.section-container-s1');
const section2 = document.querySelector('.section-container-s2');

numberContainer.addEventListener('click' , (e) =>{
   let numberSelected = e.target.innerText;
   rateNumber.innerText = numberSelected;
    if(numberSelected >=1 || numberSelected <=5 ){
        submitBtn.addEventListener('click', ()=>{
            section1.style.display = 'none';
            section2.style.display = 'flex';
        });
    }
});

