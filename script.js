//updateTotal Price

function UpdateTotalPrice (){
var TotalPrice = document.getElementById('total-price')
var Price = document.getElementsByClassName('price')
var sum = 0;
    for(let i=0; i< Price.length;i++){
        sum += Number(Price[i].innerHTML)
    }
    TotalPrice.innerHTML = sum
    return  TotalPrice.innerHTML
}


//btn plus
let plusBtn = document.getElementsByClassName('plus-btn'); 
//let Prix_Unitaire = document.getElementsByClassName('Prix_unitaire')

//let qte = document.getElementsByClassName('Quantity')
for(let i=0; i< plusBtn.length;i++){
    plusBtn[i].addEventListener('click', function(event){
        //Increment qte
        //event.target = plusBtn[i]
       // method1 qte[i].innerHTML = parseInt(qte[i].innerHTML) + 1;
       //2 
       let qte = event.target.nextElementSibling
       qte.innerHTML = Number(qte.innerHTML) +1

       let Prix_Unitaire = event.target.nextElementSibling.nextElementSibling.nextElementSibling;
       let Price = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
       
       //update totalPrice/article
       Price.innerHTML = Number(Prix_Unitaire.innerHTML) * Number(qte.innerHTML)
       //update Total PRice
       UpdateTotalPrice()
    })
}
//minusBtn
let minusbtn = document.getElementsByClassName('sustraction-btn')
for (let i=0; i < minusbtn.length; i++){
    minusbtn[i].addEventListener('click', function(e){
        let qte = e.target.previousElementSibling
        if (Number(qte.innerHTML>0)){
            qte.innerHTML = Number(qte.innerHTML) -1
        }
        let Prix_Unitaire = e.target.nextElementSibling
        let Price = e.target.nextElementSibling.nextElementSibling.nextElementSibling
        Price.innerHTML = Number(Prix_Unitaire.innerHTML) * (qte.innerHTML)
        UpdateTotalPrice()
        
    })
}

//deleteBtn
let deletebtn = document.getElementsByClassName('delete-btn')
for ( let i=0; i<deletebtn.length; i++) {
     deletebtn[i].addEventListener('click', function(e){
     e.target.parentElement.remove()
     UpdateTotalPrice()
    })
}

//toggle for heart
let heartbtn = document.getElementsByClassName('fa-heart')
for (let i=0; i<heartbtn.length; i++) {
    heartbtn[i].addEventListener('click',function(){
        heartbtn[i].classList.toggle('full')
    })
}



