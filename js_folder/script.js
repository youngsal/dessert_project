// $(document).ready(function (){
//     $(".add_btn").click(function (){
//         // var cart_item_added = 0;
//         const parentBtn = $(this).closest(".add_minus_btn");
//         // set other button to default if another button was clicked
//         // $(".add_minus_btn").each(function (){
//         //     $(this).find(".add_btn").show()
//         //     $(this).find(".add_quantity").hide()
//         //     $(this).css({"background" : "#fff"});
//         // });

//         // remove add_btn and display add_quantity
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({"display" : "flex"});
//         parentBtn.css({"background-color" : "hsl(14, 86%, 42%)"});
//     });

//     // Decrement the number when the remove icon is clicked
//     $('.remove_icon').click(function () {
//         // Find the nearest .number_quantity element
//         let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
        
//         // Get the current quantity value
//         let currentValue = parseInt($quantity.text()) || 0; // Default to 0 if not a number
        
//         // Only decrement if the current value is greater than 0
//         if (currentValue > 0) {
//             $quantity.text(currentValue - 1);
//         }
//     });

//     // Increment the number when the add icon is clicked
//     $('.add_icon').click(function () {
//         // Find the nearest .number_quantity element
//         let $quantity = $(this).closest('.add_quantity').find('.number_quantity');
        
//         // Get the current quantity value
//         let currentValue = parseInt($quantity.text()) || 0; // Default to 0 if not a number
        
//         // Increment and update the text
//         $quantity.text(currentValue + 1);
//     });





//     var cart_item_added = 0;
//     $(".add_btn").click(function () {
//         // Increment the cart item count
//         cart_item_added++;

//         // Get item details
//         let title = $(this).closest(".product_row").find("h4").text();
//         let quantityNumber = $(this).closest(".product_row").find(".number_quantity").text();
//         let price = $(this).closest(".product_row").find(".dollar_amount").text();

//         let existingProduct = $(".product_name_amount").filter(function (){
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0){
//             // Product already exists in cart, update the product
//             let quantityElement = existingProduct.find(".quantity");
//             let amountAddedElement = existingProduct.find(".amount_added");
        
//             // Extract the current quantity and increment it
//             let currentQuantity = parseInt(quantityElement.text().replace(/\D/g, "")); // Remove all non-digit characters
//             let newQuantity = currentQuantity + 1;
//             quantityElement.text(newQuantity + "x");
        
//             // Calculate and update the total amount for this product
//             let newAmount = (parseFloat(price.replace('$', '')) * newQuantity).toFixed(2);
//             amountAddedElement.text("$" + newAmount);
//         } else {                
//             let cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${quantityNumber}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ ${price}</span>
//                                 <span class="amount_added">${price}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>
//             `;
//             $(".product_items").append(cartItem);
//         }
        
//         // Update the cart item count display
//         $(".cart_item_added").text(cart_item_added);
//     });

//     // Use event delegation for dynamically added close buttons
//     $(".product_items").on("click", ".close_btn", function () {
//             // Remove the cart item
//             $(this).closest(".product_name_amount").remove();
        
//             // Update the cart item count
//             itemCount();
//     });

//     // Function to update the cart item count
//     function itemCount() {
//         let res = $(".product_items").children().length;
//         $(".cart_item_added").text(res);
//     }
// });












// $(document).ready(function () {
// var cart_item_added = 0;
//     // Show quantity input when the add button is clicked
//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");
//         cart_item_added++;

//         // Hide the "Add" button and show quantity controls
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });
//     });

//     // Decrement the quantity and update the total when the remove icon is clicked
//     $(".remove_icon").click(function () {
//         let parentRow = $(this).closest(".product_row");
//         let quantityElement = parentRow.find(".number_quantity");
//         let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         let title = parentRow.find("h4").text();
//         cart_item_added--;

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 0) {
//             // Decrease the quantity
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             // Find the product in the cart and update its quantity and amount
//             let existingProduct = $(".product_name_amount").filter(function () {
//                 return $(this).find(".item_name p").text() === title;
//             });

//             if (existingProduct.length > 0) {
//                 let quantityInCart = existingProduct.find(".quantity");
//                 let amountInCart = existingProduct.find(".amount_added");

//                 quantityInCart.text(currentQuantity + "x");
//                 let newAmount = (price * currentQuantity).toFixed(2);
//                 amountInCart.text("$" + newAmount);
//             }
//         } else {
//             // If quantity reaches 0, remove the item from the cart
//             quantityElement.text("0");
//             $(".product_name_amount").filter(function () {
//                 return $(this).find(".item_name p").text() === title;
//             }).remove();
//         }
//     });

//     // Increment the quantity and update the total when the add icon is clicked
//     $(".add_icon").click(function () {
//         cart_item_added++;
//         let parentRow = $(this).closest(".product_row");
//         let quantityElement = parentRow.find(".number_quantity");
//         let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         let title = parentRow.find("h4").text();

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase the quantity
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Check if the product exists in the cart
//         let existingProduct = $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0) {
//             // Update the quantity and amount in the cart
//             let quantityInCart = existingProduct.find(".quantity");
//             let amountInCart = existingProduct.find(".amount_added");

//             quantityInCart.text(currentQuantity + "x");
//             let newAmount = (price * currentQuantity).toFixed(2);
//             amountInCart.text("$" + newAmount);
//         } else {
//             // Add a new product to the cart if not already there
//             let cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${currentQuantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ ${price}</span>
//                                 <span class="amount_added">$${(price * currentQuantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>
//             `;
//             $(".product_items").append(cartItem);
//         }
//     // Update the cart item count display
//         $(".cart_item_added").text(cart_item_added);
//     });

//     // Use event delegation for dynamically added close buttons
//     $(".product_items").on("click", ".close_btn", function () {
//             // Remove the cart item
//             $(this).closest(".product_name_amount").remove();
        
//             // Update the cart item count
//             itemCount();
//     });

//     // Function to update the cart item count
//     function itemCount() {
//         let res = $(".product_items").children().length;
//         $(".cart_item_added").text(res);
//     }
// });


// $(document).ready(function () {
//     var cart_item_added = 0;

//     // Show quantity input when the add button is clicked
//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");
//         cart_item_added++;

//         // Hide the "Add" button and show quantity controls
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });
//     });

//     // Decrement the quantity and update the total when the remove icon is clicked
//     $(".remove_icon").click(function () {
//         let parentRow = $(this).closest(".product_row");
//         let quantityElement = parentRow.find(".number_quantity");
//         let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         let title = parentRow.find("h4").text();

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 0) {
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             let existingProduct = $(".product_name_amount").filter(function () {
//                 return $(this).find(".item_name p").text() === title;
//             });

//             if (existingProduct.length > 0) {
//                 let quantityInCart = existingProduct.find(".quantity");
//                 let amountInCart = existingProduct.find(".amount_added");

//                 quantityInCart.text(currentQuantity + "x");
//                 let newAmount = (price * currentQuantity).toFixed(2);
//                 amountInCart.text("$" + newAmount);
//             }
//         } else {
//             quantityElement.text("0");
//             $(".product_name_amount").filter(function () {
//                 return $(this).find(".item_name p").text() === title;
//             }).remove();
//         }

//         // Update the cart item count display
//         cart_item_added--;
//         $(".cart_item_added").text(cart_item_added);
//     });

//     // Increment the quantity and update the total when the add icon is clicked
//     $(".add_icon").click(function () {
//         let parentRow = $(this).closest(".product_row");
//         let quantityElement = parentRow.find(".number_quantity");
//         let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         let title = parentRow.find("h4").text();

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase the quantity
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Check if the product exists in the cart
//         let existingProduct = $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0) {
//             // Update the quantity and amount in the cart
//             let quantityInCart = existingProduct.find(".quantity");
//             let amountInCart = existingProduct.find(".amount_added");

//             quantityInCart.text(currentQuantity + "x");
//             let newAmount = (price * currentQuantity).toFixed(2);
//             amountInCart.text("$" + newAmount);
//         } else {
//             // Add a new product to the cart if not already there
//             let cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${currentQuantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ ${price}</span>
//                                 <span class="amount_added">$${(price * currentQuantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>
//             `;
//             $(".product_items").append(cartItem);
//         }

//         // Update the cart item count display
//         $(".cart_item_added").text(cart_item_added);
//     });

//     // Use event delegation for dynamically added close buttons
//     $(".product_items").on("click", ".close_btn", function () {
//         // Remove the cart item
//         $(this).closest(".product_name_amount").remove();

//         // Update the cart item count
//         itemCount();
//     });

//     // Function to update the cart item count
//     function itemCount() {
//         let res = $(".product_items").children().length;
//         $(".cart_item_added").text(res);
//     }
// });


$(document).ready(function () {
    let cartItemCount = 0;

    // Show quantity input when the "Add" button is clicked
    $(".add_btn").click(function () {
        const parentBtn = $(this).closest(".add_minus_btn");
        const title = $(this).closest(".product_row").find("h4").text();
        const price = parseFloat($(this).closest(".product_row").find(".dollar_amount").text().replace("$", ""));
        
        // Increment cart item count
        cartItemCount++;

        // Update UI to show quantity controls
        $(this).hide();
        parentBtn.find(".add_quantity").css({ display: "flex" });
        parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

        // Add item to cart
        updateCartItem(title, price, 1);

        // Update cart item count display
        $(".cart_item_added").text(cartItemCount);
    });

    // Decrement quantity and update cart when the "Remove" icon is clicked
    $(".remove_icon").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const quantityElement = parentRow.find(".number_quantity");

        let currentQuantity = parseInt(quantityElement.text()) || 0;

        if (currentQuantity > 1) {
            // Decrease quantity and update UI
            currentQuantity--;
            quantityElement.text(currentQuantity);

            // Update cart item
            updateCartItem(title, price, currentQuantity);
        } else {
            // Remove item from cart if quantity is 0
            currentQuantity = 0;
            quantityElement.text(currentQuantity);
            removeCartItem(title);
        }

        // Update cart item count
        cartItemCount--;
        $(".cart_item_added").text(cartItemCount);
    });

    // Increment quantity and update cart when the "Add" icon is clicked
    $(".add_icon").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const quantityElement = parentRow.find(".number_quantity");

        let currentQuantity = parseInt(quantityElement.text()) || 0;

        // Increase quantity and update UI
        currentQuantity++;
        quantityElement.text(currentQuantity);

        // Update cart item
        updateCartItem(title, price, currentQuantity);

        // Update cart item count
        cartItemCount++;
        $(".cart_item_added").text(cartItemCount);
    });

    // Handle remove button in cart
    $(".product_items").on("click", ".close_btn", function () {
        const title = $(this).closest(".product_name_amount").find(".item_name p").text();

        // Remove item from cart
        removeCartItem(title);

        // Update cart item count
        cartItemCount--;
        $(".cart_item_added").text(cartItemCount);
    });

    // Function to update a cart item or add a new one
    function updateCartItem(title, price, quantity) {
        const existingProduct = $(".product_name_amount").filter(function () {
            return $(this).find(".item_name p").text() === title;
        });

        if (existingProduct.length > 0) {
            // Update existing product in cart
            existingProduct.find(".quantity").text(`${quantity}x`);
            const newAmount = (price * quantity).toFixed(2);
            existingProduct.find(".amount_added").text(`$${newAmount}`);
        } else if (quantity > 0) {
            // Add a new product to the cart
            const cartItem = `
                <div class="product_name_amount">
                    <div class="item_name">
                        <p>${title}</p>
                        <div class="quantity_amount">
                            <span class="quantity">${quantity}x</span>
                            <div class="amount_plus">
                                <span class="amount">@ $${price}</span>
                                <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="cancel_btn">
                        <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
                    </div>
                </div>`;
            $(".product_items").append(cartItem);
        }
    }

    // Function to remove an item from the cart
    function removeCartItem(title) {
        $(".product_name_amount").filter(function () {
            return $(this).find(".item_name p").text() === title;
        }).remove();
    }
});