// app.js
document.addEventListener('DOMContentLoaded', function () {
    const billForm = document.getElementById('bill-form');
    const addItemBtn = document.getElementById('add-item');
    const billList = document.getElementById('bill-list');
    const generateBillBtn = document.getElementById('generate-bill');
    const totalAmount = document.getElementById('total');
    let total = 0;

    addItemBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const itemInput = document.getElementById('item');
        const priceInput = document.getElementById('price');
        const itemName = itemInput.value;
        const itemPrice = parseFloat(priceInput.value);

        if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName}: $${itemPrice}`;
            billList.appendChild(listItem);
            total += itemPrice;
            totalAmount.textContent = `Total: $${total.toFixed(2)}`;
            itemInput.value = '';
            priceInput.value = '';
        } else {
            alert('Please enter valid item name and price.');
        }
    });

    generateBillBtn.addEventListener('click', function () {
        if (total > 0) {
            // Send bill details to the server for further processing
            fetch('/generate-bill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ totalAmount: total })
            })
            .then(response => response.json())
            .then(data => {
                alert(`Bill generated successfully. Bill ID: ${data.billId}`);
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('No items added to the bill.');
        }
    });
});
