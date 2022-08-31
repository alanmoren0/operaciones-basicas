const radioplus=document.querySelector('#radio-plus');
const radiominus=document.querySelector('#radio-minus');
const radiodiv=document.querySelector('#radio-div');
const radiomul=document.querySelector('#radio-mul');
const input1=document.querySelector('#first-number');
const input2=document.querySelector('#second-number');
const button=document.querySelector('.primary-button');
const h1resultado=document.querySelector('.h1resultado');


button.addEventListener('click',()=>{
    makeOperation();
})

function makeOperation(){
	if (radiominus.checked) {
		h1resultado.textContent=makerest(Number(input1.value),Number(input2.value));
	}else if(radioplus.checked){
		h1resultado.textContent=makesum(Number(input1.value),Number(input2.value));
	}else if(radiodiv.checked){
		h1resultado.textContent=makediv(Number(input1.value),Number(input2.value));
	}else if(radiomul.checked){
		h1resultado.textContent=makemul(Number(input1.value),Number(input2.value));
	}
}

makesum = (a, b) => {
  return(a+b);
}

makerest = (a, b) => {
  return(a-b);
}

makediv = (a, b) => {
  return(a/b);
}

makemul = (a, b) => {
  return(a*b);
}