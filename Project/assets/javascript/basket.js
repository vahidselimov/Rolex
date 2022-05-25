let table=document.querySelector(".table")
let basket = JSON.parse(localStorage.getItem("basket"));
for (const product of basket) {
    let tr=document.createElement("tr")
    let thimg=document.createElement("th")
    let image=document.createElement("img")
image.src=product.image
image.alt="image"
image.setAttribute("width","150px")
thimg.append(image)
thprc=document.createElement("th")
thprc.innerText=product.price
thtitle=document.createElement("th")
thtitle.innerText=product.title
thcount=document.createElement("th")
thcount.innerText=product.count
thtotal=document.createElement("th")
// thtotal.innerText=(product.count)*(product.price)
tr.append(thimg,thprc,thtitle,thcount)
table.lastElementChild.append(tr)
console.log(table);


}