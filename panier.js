alert ("BIENVENUE SUR FEUG-DIAYY BOUTIQUE")
var item = document.getElementsByClassName('item');
var total = document.getElementsByClassName('total');
var totalPrice = [];

var minusBtn = document.getElementsByClassName('minus');
var plusBtn = document.getElementsByClassName('plus');
var quantity = document.getElementsByClassName('quantity');
var likeBtn = document.getElementsByClassName("like");
var removeBtn = document.getElementsByClassName("remove");

let price = 10; // prix de l'article
for (let i = 0; i < total.length; i++)
{
    totalPrice.push(0);

    minusBtn[i].addEventListener('click', () => {
        let qty = parseInt(quantity[i].textContent);
        if (qty >= 1) {
            qty--;
            quantity[i].textContent = qty;
            totalPrice[i] -= price;
            total[i].textContent = `Total: $${totalPrice[i]}`;
        }
    });
    
    plusBtn[i].addEventListener('click', () => {
        let qty = parseInt(quantity[i].textContent);
        qty++;
        quantity[i].textContent = qty;
        totalPrice[i] += price;
        total[i].textContent = `Total: $${totalPrice[i]}`;
    });
    
    likeBtn[i].addEventListener('click', () => {
        likeBtn[i].toggle('liked');
    });
    
    removeBtn[i].addEventListener('click', () => {
        const qty = parseInt(quantity[i].textContent);
        document.removeChild(item[i]);
        totalPrice[i] -= price * qty;
        total[i].textContent = `Total: $${totalPrice[i]}`;
    });
}


