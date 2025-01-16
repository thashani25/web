//for shopping cart part
//for cart popup
function toggleCartPopup(){
    const cartPopup=document.getElementById("cart-popup");
    cartPopup.classList.toggle("active");
}

//for close cart popup
function closecart(){
    const cartPopup=document.getElementById('cart-popup');
    cartPopup.classList.remove('active');
}

//for add to cart button
function addtocart(itemName,itemPrice){
    const cartItems= document.getElementById('cart-Item').getElementsByTagName('today')[0];
    const exsitingItems=Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textConent===itemName);
    if(exsitingItems){
        const itemCount=parseInt(exsitingItems.querySelector('.item-count').textContent)+1;
        exsitingItems.querySelector('.item-count').textContent=itemCount;

        const itemTotal=parseFloat(exsitingItems.querySelector('.item-total').textContent)+parseFloat(itemPrice);
        exsitingItems.querySelector('.item-total').textConent=itemTotal.toFixed(2);
    }
    else {
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
            <td>Rs{itemName}</td>
            <td class='item-count'>1</td>
            <td class='item-price'>Rs{itemPrice}</td>
            <td class='item-total'>Rs{itemPrice}</td>
        `;
    }
    updateCertcountAndTotal();
    
}
// update cart count and total
function updateCertcountAndTotal(){
    const cartCount = document
}