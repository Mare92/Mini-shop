let AllTotal = 0;

function addToCart (element){
        let mainEl = element.closest('.single-item');
        let price = mainEl.querySelector('.price').innerText;
        let name = mainEl.querySelector('h3').innerText;
        let quantity = mainEl.querySelector('input').value;
        let cartItems = document.querySelector('.cart-items');

        if (parseInt(quantity) > 0){

            price = price.substring(1);
            price = parseInt(price);

            let Total = price * parseInt(quantity);

            AllTotal += Total;


            cartItems.innerHTML += `<div class ="cart-single-item">
                                        <h3>${name}</h3>
                                        <p>${price} x ${quantity} = $<span>${Total}</span></p>
                                        <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                    </div> `; 
            
            document.querySelector('.total').innerText = `Total:$${AllTotal}`;

            Element.innerText = 'Dodato';
            element.setAttribute('disabled', 'true');
        }
        else{
            alert('MORATE ODABRATI KOLICINU..!!!')
        }
       // let input = element.previousElementSibling;
}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let komponente = document.querySelectorAll('.single-item');

    AllTotal -=price;

    document.querySelector('.total').innerText = `Total: $${AllTotal}`;
    mainEl.remove();

    komponente.forEach(function(kmpt){
            let itemName = kmpt.querySelector('.si-content h3').innerText;

            if(itemName ==name){
                kmpt.querySelector('.actions input').value = 0;
                kmpt.querySelector('.actions button').removeAttribute('disabled');
                kmpt.querySelector('.actions button').innerText = 'Dodaj';
            }

    });
}