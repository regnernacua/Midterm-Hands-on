let quantity = 0;

function addQuantity() {
    quantity = quantity + 1;
    document.getElementById('quantity-tag').innerHTML = quantity;
}
function subQuantity() {
    quantity = quantity + 1;
    document.getElementById('quantity-tag').innerHTML = quantity;
}

function showBox() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'flex';
    document.getElementById('box3').style.display = 'flex';
}