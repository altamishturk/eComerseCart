function totalAmount() {
    let productAmountElem = document.querySelector('#product_amount');
    let shippingAmountElem = document.querySelector('#shipping_amount');
    let totalAmountElem = document.querySelector('#total_amount');
    let amount1Amount = parseInt(document.querySelector('#prize').innerText);
    let amount2Amount = parseInt(document.querySelector('#prize1').innerText);
    const totalProductAmount = amount1Amount + amount2Amount;
    let shippingCharge = 2;
    let totalamount = totalProductAmount + shippingCharge;
    productAmountElem.innerText = totalProductAmount;
    shippingAmountElem.innerText = shippingCharge;
    totalAmountElem.innerText = totalamount;
    console.log(productAmountElem, shippingAmountElem, totalAmountElem);
}

function incriment(product, prize) {
    let productQtyValue = product.value;
    let productQty = parseInt(productQtyValue);
    const Prize = parseInt(prize.innerText);

    if (Prize == 24) {
        fixedPrize = 24;
    }
    else {
        fixedPrize = 36;
    }
    productQty++;

    if (productQty > 5) {

        productQty = 5;
        product.value = productQty;

    }
    else {
        product.value = productQty;
    }

    let variablePrize = fixedPrize * productQty;
    prize.innerText = variablePrize;



    console.log(fixedPrize, Prize);
    totalAmount();

}

function decriment(product, prize) {
    let productQtyValue = product.value;
    let productQty = parseInt(productQtyValue);
    const Prize = parseInt(prize.innerText);

    if (Prize == 24) {
        fixedPrize = 24;
    }
    else {
        fixedPrize = 36;
    }

    productQty--;


    if (productQty < 0) {
        productQty = 0;
        product.value = productQty;

    }
    else {
        product.value = productQty;
    }

    let variablePrize = fixedPrize * productQty;
    prize.innerText = variablePrize;
    console.log(fixedPrize, Prize);
    totalAmount();

}



totalAmount();