let allbtn=document.querySelectorAll(".btn-floating")
let card_content=document.querySelectorAll(".card-content")
let price=document.querySelectorAll(".price")
if (localStorage.getItem("basket")==null) {
   localStorage.setItem("basket",JSON.stringify([])) 
}
// basket=[];
allbtn.forEach(btn=>{
    btn.addEventListener("click",function(e){
        e.preventDefault()
        let Id=(btn.parentElement.parentElement.getAttribute("data-id"));
        let image=(this.previousElementSibling.previousElementSibling.getAttribute("src"));
    let price=(btn.parentElement.parentElement.lastElementChild.lastElementChild.innerText)
  let title=(btn.parentElement.parentElement.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.innerText)
    
    let marka=(btn.previousElementSibling.innerText)
        let basket=JSON.parse(localStorage.getItem("basket"))
        let exisPro=basket.find(p=>p.id==Id)
        if (exisPro===undefined) {
            basket.push({
                id:Id,
                count:1,
                image,
                price,
                title,
                marka,
            })
        }
        else{
exisPro.count++;
        }
        localStorage.setItem("basket",JSON.stringify(basket))
        calcCount()
       
        console.log(basket);
    })
}

);
function calcCount() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let count = basket.reduce((t, val) => {
      return (t += val.count);
    }, 0);
    let countValue = document.querySelector("sup");
    countValue.innerText = count;
  }
  calcCount();
