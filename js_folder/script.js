$(document).ready(function (){
    $(".add_btn").click(function (){
        const parentBtn = $(this).closest(".add_minus_btn");
        // set other button to default if another button was clicked
        $(".add_minus_btn").each(function (){
            $(this).find(".add_btn").show()
            $(this).find(".add_quantity").hide()
            $(this).css({"background" : "#fff"});
        });

        // remove add_btn and display add_quantity
        $(this).hide();
        parentBtn.find(".add_quantity").css({"display" : "flex"});
        parentBtn.css({"background-color" : "hsl(14, 86%, 42%)"});
    });

    // Decrement the number when the remove icon is clicked
    $('.remove_icon').click(function () {
        // Find the nearest .number_quantity element
        let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
        
        // Get the current quantity value
        let currentValue = parseInt($quantity.text()) || 0; // Default to 0 if not a number
        
        // Only decrement if the current value is greater than 0
        if (currentValue > 0) {
            $quantity.text(currentValue - 1);
        }
    });

    // Increment the number when the add icon is clicked
    $('.add_icon').click(function () {
        // Find the nearest .number_quantity element
        let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
        
        // Get the current quantity value
        let currentValue = parseInt($quantity.text()) || 0; // Default to 0 if not a number
        
        // Increment and update the text
        $quantity.text(currentValue + 1);
    });

//     // Function to handle add button click
// $('.add_btn').click(function () {
//     let $addQuantity = $(this).closest('.add_quantity').find('.number_quantity');
//     let $dollarAmount = $(this).closest('.add_product').find('.dollar_amount');

//     // Update quantity in the product section
//     let quantityValue = parseInt($addQuantity.text()) || 0;
//     $addQuantity.text(quantityValue + 1);

//     // Find corresponding quantity in cart
//     let $cartQuantity = $('.quantity'); // Adjust selector to target the right product dynamically
//     let $cartAmountAdded = $('.amount_added'); // Adjust selector to target the right product dynamically

//     // Update quantity in the cart
//     let cartQuantityValue = parseInt($cartQuantity.text()) || 0;
//     $cartQuantity.text((cartQuantityValue + 1) + "x");

//     // Update dollar amounts
//     let itemPrice = parseFloat($dollarAmount.text().replace('$', '')) || 0; // Get item price
//     let totalAmount = itemPrice * (cartQuantityValue + 1);
//     $cartAmountAdded.text(`$${totalAmount.toFixed(2)}`);

//     // Optionally update total order amount dynamically
//     updateTotalAmount();
// });

// // Function to update the total amount in the cart
// function updateTotalAmount() {
//     let total = 0;

//     // Loop through each .amount_added to sum the values
//     $('.amount_added').each(function () {
//         total += parseFloat($(this).text().replace('$', '')) || 0;
//     });

//     // Update the total amount
//     $('.total_amount').text(`$${total.toFixed(2)}`);
// }


// // Function to handle add_icon click
// $('.add_icon').click(function () {
//     let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
//     let $amount = $(this).closest('.add_quantity').find('.dollar_amount');

//     // Increment the product quantity
//     let currentQuantity = parseInt($quantity.text()) || 0;
//     $quantity.text(currentQuantity + 1);

//     // Get the product's price
//     let price = parseFloat($amount.text().replace('$', '')) || 0;

//     // Add to cart
//     updateCart($(this), currentQuantity + 1, price);
// });

// // Function to handle remove_icon click
// $('.remove_icon').click(function () {
//     let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
//     let $amount = $(this).closest('.add_quantity').find('.dollar_amount');

//     // Decrement the product quantity, ensuring it doesn't go below 0
//     let currentQuantity = parseInt($quantity.text()) || 0;
//     if (currentQuantity > 0) {
//         $quantity.text(currentQuantity - 1);

//         // Get the product's price
//         let price = parseFloat($amount.text().replace('$', '')) || 0;

//         // Update cart
//         updateCart($(this), currentQuantity - 1, price);
//     }
// });

// // Function to update the cart
// function updateCart($icon, quantity, price) {
//     // Use a unique identifier (e.g., data-id) to find corresponding cart items
//     let productId = $icon.closest('.add_product').data('id'); // Assuming products have data-id attributes
//     let $cartItem = $(`.cart_div .product_name_amount[data-id="${productId}"]`);

//     if (quantity > 0) {
//         if ($cartItem.length) {
//             // Update quantity and total amount for the product in the cart
//             $cartItem.find('.quantity').text(`${quantity}x`);
//             $cartItem.find('.amount_added').text(`$${(quantity * price).toFixed(2)}`);
//         } else {
//             // Add the product to the cart if it doesn't exist
//             let productName = $icon.closest('.add_product').find('.product_name').text().trim();
//             let cartItemHtml = `
//                 <div class="product_name_amount" data-id="${productId}">
//                     <div class="item_name">
//                         <p>${productName}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${quantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ $${price.toFixed(2)}</span>
//                                 <span class="amount_added">$${(quantity * price).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>
//             `;
//             $('.product_items').append(cartItemHtml);
//         }
//     } else {
//         // Remove the product from the cart if quantity is 0
//         $cartItem.remove();
//     }

//     // Update overall total
//     updateTotalAmount();
// }

// // Function to update the total amount in the cart
// function updateTotalAmount() {
//     let total = 0;

//     // Sum all the amounts in the cart
//     $('.cart_div .amount_added').each(function () {
//         total += parseFloat($(this).text().replace('$', '')) || 0;
//     });

//     // Update the total amount in the cart
//     $('.cart_div .total_amount').text(`$${total.toFixed(2)}`);
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
});