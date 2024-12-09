// $(document).ready(function (){
//     $(".add_btn").click(function (){
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

//     // // Use event delegation for dynamically added close buttons
//     // $(".product_items").on("click", ".close_btn", function () {
//     //         // Remove the cart item
//     //         $(this).closest(".product_name_amount").remove();
        
//     //         // Update the cart item count
//     //         itemCount();
//     // });

//     // // Function to update the cart item count
//     // function itemCount() {
//     //     let res = $(".product_items").children().length;
//     //     $(".cart_item_added").text(res);
//     // }
// });













// $(document).ready(function () {
//     // Show quantity input when the add button is clicked
//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");

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

//         if (currentQuantity > 1) {
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
//     });
// });









$(document).ready(function () {
    // Show quantity input when the add button is clicked
    $(".add_btn").click(function () {
        const parentBtn = $(this).closest(".add_minus_btn");
        const parentRow = $(this).closest(".product_row");

        // Hide the "Add" button and show quantity controls
        $(this).hide();
        parentBtn.find(".add_quantity").css({ display: "flex" });
        parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

        // Get item details
        let title = parentRow.find("h4").text();
        let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        let quantityNumber = parseInt(parentRow.find(".number_quantity").text()) || 1;

        // Check if the product already exists in the cart
        let existingProduct = $(".product_name_amount").filter(function () {
            return $(this).find(".item_name p").text() === title;
        });

        if (existingProduct.length > 0) {
            // Update existing product
            let quantityElement = existingProduct.find(".quantity");
            let amountAddedElement = existingProduct.find(".amount_added");

            let currentQuantity = parseInt(quantityElement.text().replace(/\D/g, ""));
            let newQuantity = currentQuantity + quantityNumber;

            // Update quantity and amount
            quantityElement.text(newQuantity + "x");
            let newAmount = (price * newQuantity).toFixed(2);
            amountAddedElement.text("$" + newAmount);
        } else {
            // Add new product to the cart
            let cartItem = `
                <div class="product_name_amount">
                    <div class="item_name">
                        <p>${title}</p>
                        <div class="quantity_amount">
                            <span class="quantity">${quantityNumber}x</span>
                            <div class="amount_plus">
                                <span class="amount">@ $${price.toFixed(2)}</span>
                                <span class="amount_added">$${(price * quantityNumber).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="cancel_btn">
                        <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
                    </div>
                </div>
            `;
            $(".product_items").append(cartItem);
        }
    });

    // Increment the quantity and update the total when the add icon is clicked
    $(".add_icon").click(function () {
        let parentRow = $(this).closest(".product_row");
        let quantityElement = parentRow.find(".number_quantity");
        let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        let title = parentRow.find("h4").text();

        let currentQuantity = parseInt(quantityElement.text()) || 0;
        currentQuantity++;
        quantityElement.text(currentQuantity);

        let existingProduct = $(".product_name_amount").filter(function () {
            return $(this).find(".item_name p").text() === title;
        });

        if (existingProduct.length > 0) {
            let quantityInCart = existingProduct.find(".quantity");
            let amountInCart = existingProduct.find(".amount_added");

            quantityInCart.text(currentQuantity + "x");
            let newAmount = (price * currentQuantity).toFixed(2);
            amountInCart.text("$" + newAmount);
        }
    });

    // Decrement the quantity and update the total when the remove icon is clicked
    $(".remove_icon").click(function () {
        let parentRow = $(this).closest(".product_row");
        let quantityElement = parentRow.find(".number_quantity");
        let price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        let title = parentRow.find("h4").text();

        let currentQuantity = parseInt(quantityElement.text()) || 0;

        if (currentQuantity > 1) {
            currentQuantity--;
            quantityElement.text(currentQuantity);

            let existingProduct = $(".product_name_amount").filter(function () {
                return $(this).find(".item_name p").text() === title;
            });

            if (existingProduct.length > 0) {
                let quantityInCart = existingProduct.find(".quantity");
                let amountInCart = existingProduct.find(".amount_added");

                quantityInCart.text(currentQuantity + "x");
                let newAmount = (price * currentQuantity).toFixed(2);
                amountInCart.text("$" + newAmount);
            }
        } else {
            // Remove item from the cart if quantity is 0
            quantityElement.text("0");
            $(".product_name_amount").filter(function () {
                return $(this).find(".item_name p").text() === title;
            }).remove();
        }
    });
});
