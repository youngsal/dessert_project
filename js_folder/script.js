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


// $(document).ready(function () {
//     let cartItemCount = 0;

//     // Show quantity input when the "Add" button is clicked
//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");
//         const title = $(this).closest(".product_row").find("h4").text();
//         const price = parseFloat($(this).closest(".product_row").find(".dollar_amount").text().replace("$", ""));
        
//         // Increment cart item count
//         cartItemCount++;

//         // Update UI to show quantity controls
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

//         // Add item to cart
//         updateCartItem(title, price, 1);

//         // Update cart item count display
//         $(".cart_item_added").text(cartItemCount);
//     });

//     // Decrement quantity and update cart when the "Remove" icon is clicked
//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             // Decrease quantity and update UI
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             // Update cart item
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             // Remove item from cart if quantity is 0
//             currentQuantity = 0;
//             quantityElement.text(currentQuantity);
//             removeCartItem(title);
//         }

//         // Update cart item count
//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);
//     });

//     // Increment quantity and update cart when the "Add" icon is clicked
//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase quantity and update UI
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Update cart item
//         updateCartItem(title, price, currentQuantity);

//         // Update cart item count
//         cartItemCount++;
//         $(".cart_item_added").text(cartItemCount);
//     });

//     // Handle remove button in cart
//     $(".product_items").on("click", ".close_btn", function () {
//         const title = $(this).closest(".product_name_amount").find(".item_name p").text();

//         // Remove item from cart
//         removeCartItem(title);

//         // Update cart item count
//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);
//     });

//     // Function to update a cart item or add a new one
//     function updateCartItem(title, price, quantity) {
//         const existingProduct = $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0) {
//             // Update existing product in cart
//             existingProduct.find(".quantity").text(`${quantity}x`);
//             const newAmount = (price * quantity).toFixed(2);
//             existingProduct.find(".amount_added").text(`$${newAmount}`);
//         } else if (quantity > 0) {
//             // Add a new product to the cart
//             const cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${quantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ $${price}</span>
//                                 <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>`;
//             $(".product_items").append(cartItem);
//         }
//     }

//     // Function to remove an item from the cart
//     function removeCartItem(title) {
//         $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         }).remove();
//     }
// });

// $(document).ready(function () {
//     let cartItemCount = 0;

//     // Show quantity input when the "Add" button is clicked
//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");
//         const title = $(this).closest(".product_row").find("h4").text();
//         const price = parseFloat($(this).closest(".product_row").find(".dollar_amount").text().replace("$", ""));
        
//         // Increment cart item count
//         cartItemCount++;

//         // Update UI to show quantity controls
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

//         // Add item to cart
//         updateCartItem(title, price, 1);

//         // Update cart item count display
//         $(".cart_item_added").text(cartItemCount);

//         // Update total amount
//         updateTotalAmount();
//     });

//     // Decrement quantity and update cart when the "Remove" icon is clicked
//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             // Decrease quantity and update UI
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             // Update cart item
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             // Remove item from cart if quantity is 0
//             currentQuantity = 0;
//             quantityElement.text(currentQuantity);
//             removeCartItem(title);
//         }

//         // Update cart item count
//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);

//         // Update total amount
//         updateTotalAmount();
//     });

//     // Increment quantity and update cart when the "Add" icon is clicked
//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase quantity and update UI
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Update cart item
//         updateCartItem(title, price, currentQuantity);

//         // Update cart item count
//         cartItemCount++;
//         $(".cart_item_added").text(cartItemCount);

//         // Update total amount
//         updateTotalAmount();
//     });

//     // Handle remove button in cart
//     $(".product_items").on("click", ".close_btn", function () {
//         const title = $(this).closest(".product_name_amount").find(".item_name p").text();

//         // Remove item from cart
//         removeCartItem(title);

//         // Update cart item count
//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);

//         // Update total amount
//         updateTotalAmount();
//     });

//     // Function to update a cart item or add a new one
//     function updateCartItem(title, price, quantity) {
//         const existingProduct = $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0) {
//             // Update existing product in cart
//             existingProduct.find(".quantity").text(`${quantity}x`);
//             const newAmount = (price * quantity).toFixed(2);
//             existingProduct.find(".amount_added").text(`$${newAmount}`);
//         } else if (quantity > 0) {
//             // Add a new product to the cart
//             const cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${quantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ $${price}</span>
//                                 <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>`;
//             $(".product_items").append(cartItem);
//         }

//         // Update total amount
//         updateTotalAmount();
//     }

//     // Function to remove an item from the cart
//     function removeCartItem(title) {
//         $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         }).remove();

//         // Update total amount
//         updateTotalAmount();
//     }

//     // Function to calculate and update the total amount
//     function updateTotalAmount() {
//         let totalAmount = 0;

//         // Sum up all .amount_added values in the cart
//         $(".amount_added").each(function () {
//             const amount = parseFloat($(this).text().replace("$", "")) || 0;
//             totalAmount += amount;
//         });

//         // Update the total_amount div
//         $(".total_amount").text(`$${totalAmount.toFixed(2)}`);
//     }
// });

















// $(document).ready(function () {
//     let cartItemCount = 0;

//     $(".add_btn").click(function () {
//         const parentBtn = $(this).closest(".add_minus_btn");
//         const title = $(this).closest(".product_row").find("h4").text();
//         const price = parseFloat($(this).closest(".product_row").find(".dollar_amount").text().replace("$", ""));
        
//         cartItemCount++;
//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });
//         updateCartItem(title, price, 1);
//         $(".cart_item_added").text(cartItemCount);
//         updateTotalAmount();
//     });

//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             currentQuantity--;
//             quantityElement.text(currentQuantity);
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             currentQuantity = 0;
//             quantityElement.text(currentQuantity);
//             removeCartItem(title);
//         }

//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);
//         updateTotalAmount();
//     });

//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         currentQuantity++;
//         quantityElement.text(currentQuantity);
//         updateCartItem(title, price, currentQuantity);

//         cartItemCount++;
//         $(".cart_item_added").text(cartItemCount);
//         updateTotalAmount();
//     });

//     $(".product_items").on("click", ".close_btn", function () {
//         const title = $(this).closest(".product_name_amount").find(".item_name p").text();

//         removeCartItem(title);

//         cartItemCount--;
//         $(".cart_item_added").text(cartItemCount);
//         updateTotalAmount();
//     });

//     function updateCartItem(title, price, quantity) {
//         const existingProduct = $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         });

//         if (existingProduct.length > 0) {
//             existingProduct.find(".quantity").text(`${quantity}x`);
//             const newAmount = (price * quantity).toFixed(2);
//             existingProduct.find(".amount_added").text(`$${newAmount}`);
//         } else if (quantity > 0) {
//             const cartItem = `
//                 <div class="product_name_amount">
//                     <div class="item_name">
//                         <p>${title}</p>
//                         <div class="quantity_amount">
//                             <span class="quantity">${quantity}x</span>
//                             <div class="amount_plus">
//                                 <span class="amount">@ $${price}</span>
//                                 <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="cancel_btn">
//                         <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                     </div>
//                 </div>`;
//             $(".product_items").append(cartItem);
//         }
//     }

//     function removeCartItem(title) {
//         $(".product_name_amount").filter(function () {
//             return $(this).find(".item_name p").text() === title;
//         }).remove();
//     }

//     function updateTotalAmount() {
//         let totalAmount = 0;
//         const cartItems = $(".amount_added");
//         if (cartItems.length > 0) {
//             cartItems.each(function () {
//                 const amount = parseFloat($(this).text().replace("$", "")) || 0;
//                 totalAmount += amount;
//             });
//         }
//         $(".total_amount").text(`$${totalAmount.toFixed(2)}`);
//     }
// });



// $(document).ready(function () {
//     let cartItems = {}; // Track items in the cart

//     // Handle "Add to Cart" button click
//     $(".add_btn").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const parentBtn = $(this).closest(".add_minus_btn");

//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

//         // Add or update the item in the cart
//         if (!cartItems[title]) {
//             cartItems[title] = { price: price, quantity: 1 };
//             addCartItem(title, price, 1);
//         } else {
//             cartItems[title].quantity += 1;
//             updateCartItem(title, cartItems[title].price, cartItems[title].quantity);
//         }

//         updateTotal(); // Update the total amount
//     });

//     // Decrement quantity and update cart when the "Remove" icon is clicked
//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             // Decrease quantity and update UI
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             // Update cart item
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             // Remove item from cart if quantity is 0
//             removeCartItem(title);
//         }

//         updateTotal(); // Update total amount after quantity change
//     });

//     // Increment quantity and update cart when the "Add" icon is clicked
//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase quantity and update UI
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Update cart item
//         updateCartItem(title, price, currentQuantity);

//         updateTotal(); // Update total amount after quantity change
//     });

//     // Function to add a new item to the cart
//     function addCartItem(title, price, quantity) {
//         const cartItem = `
//             <div class="product_name_amount" data-title="${title}">
//                 <div class="item_name">
//                     <p>${title}</p>
//                     <div class="quantity_amount">
//                         <span class="quantity">${quantity}x</span>
//                         <div class="amount_plus">
//                             <span class="amount">@ $${price.toFixed(2)}</span>
//                             <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="cancel_btn">
//                     <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                 </div>
//             </div>`;
//         $(".product_items").append(cartItem);
//     }

//     // Function to update an existing cart item
//     function updateCartItem(title, price, quantity) {
//         const cartItem = $(`.product_name_amount[data-title="${title}"]`);
//         cartItem.find(".quantity").text(`${quantity}x`);
//         cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
//     }

//     // Function to calculate and update the total
//     function updateTotal() {
//         let total = 0;

//         // Calculate the sum of all items in the cart
//         for (const title in cartItems) {
//             const item = cartItems[title];
//             total += item.price * item.quantity;
//         }

//         // Update the total_amount div
//         $(".total_amount").text(`$${total.toFixed(2)}`);
//     }

//     // Handle removing an item from the cart
//     $(".product_items").on("click", ".close_btn", function () {
//         const cartItem = $(this).closest(".product_name_amount");
//         const title = cartItem.data("title");

//         // Remove from the cartItems object
//         delete cartItems[title];

//         // Remove from the DOM
//         cartItem.remove();

//         updateTotal(); // Update the total
//     });
// });

















// // using this
// $(document).ready(function () {
//     let cartItems = {}; // Track items in the cart

//     // Handle "Add to Cart" button click
//     $(".add_btn").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const parentBtn = $(this).closest(".add_minus_btn");

//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

//         // Add or update the item in the cart
//         if (!cartItems[title]) {
//             cartItems[title] = { price: price, quantity: 1 };
//             addCartItem(title, price, 1);
//         } else {
//             cartItems[title].quantity += 1;
//             updateCartItem(title, cartItems[title].price, cartItems[title].quantity);
//         }

//         updateTotal(); // Update the total amount
//     });

//     // Decrement quantity and update cart when the "Remove" icon is clicked
//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             // Decrease quantity and update UI
//             currentQuantity--;
//             quantityElement.text(currentQuantity);

//             // Update cart item and cartItems object
//             cartItems[title].quantity = currentQuantity;
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             // Remove item from cart if quantity is 0
//             removeCartItem(title);
//         }

//         updateTotal(); // Update total amount after quantity change
//     });

//     // Increment quantity and update cart when the "Add" icon is clicked
//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         // Increase quantity and update UI
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         // Update cart item and cartItems object
//         if (cartItems[title]) {
//             cartItems[title].quantity = currentQuantity;
//         } else {
//             cartItems[title] = { price: price, quantity: currentQuantity };
//         }

//         updateCartItem(title, price, currentQuantity);
//         updateTotal(); // Update total amount after quantity change
//     });

//     // Function to add a new item to the cart
//     function addCartItem(title, price, quantity) {
//         const cartItem = `
//             <div class="product_name_amount" data-title="${title}">
//                 <div class="item_name">
//                     <p>${title}</p>
//                     <div class="quantity_amount">
//                         <span class="quantity">${quantity}x</span>
//                         <div class="amount_plus">
//                             <span class="amount">@ $${price.toFixed(2)}</span>
//                             <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="cancel_btn">
//                     <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                 </div>
//             </div>`;
//         $(".product_items").append(cartItem);
//     }

//     // Function to update an existing cart item
//     function updateCartItem(title, price, quantity) {
//         const cartItem = $(`.product_name_amount[data-title="${title}"]`);
//         cartItem.find(".quantity").text(`${quantity}x`);
//         cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
//     }

//     // Function to calculate and update the total
//     function updateTotal() {
//         let total = 0;

//         // Calculate the sum of all items in the cart
//         for (const title in cartItems) {
//             const item = cartItems[title];
//             total += item.price * item.quantity;
//         }

//         // Update the total_amount div
//         $(".total_amount").text(`$${total.toFixed(2)}`);
//     }

//     // Handle removing an item from the cart
//     $(".product_items").on("click", ".close_btn", function () {
//         const cartItem = $(this).closest(".product_name_amount");
//         const title = cartItem.data("title");

//         // Remove from the cartItems object
//         delete cartItems[title];

//         // Remove from the DOM
//         cartItem.remove();

//         updateTotal(); // Update the total
//     });

//     $(".comfirm_order_btn").click(function (){
//         $(".success_modal").css({"display" : "block"});
//     });

//     $(".comfirm_order_btn2").click(function (){
//         $(".success_modal").hide();
//     });
// });



// $(document).ready(function () {
//     let cartItems = {}; // Track items in the cart

//     // Function to toggle the visibility of the cart message or items
//     function toggleCartMessage() {
//         if (Object.keys(cartItems).length === 0) {
//             $(".image_appear").show();
//             $(".product_item_div").hide();
//             $(".comfirm_order_btn").prop("disabled", true);
//         } else {
//             $(".image_appear").hide();
//             $(".product_item_div").show();
//             $(".comfirm_order_btn").prop("disabled", false);
//         }
//     }

//     // Initial setup: Hide cart items and disable button if cart is empty
//     toggleCartMessage();

//     // Handle "Add to Cart" button click
//     $(".add_btn").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const parentBtn = $(this).closest(".add_minus_btn");

//         $(this).hide();
//         parentBtn.find(".add_quantity").css({ display: "flex" });
//         parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

//         if (!cartItems[title]) {
//             cartItems[title] = { price: price, quantity: 1 };
//             addCartItem(title, price, 1);
//         } else {
//             cartItems[title].quantity += 1;
//             updateCartItem(title, cartItems[title].price, cartItems[title].quantity);
//         }

//         updateTotal();
//         toggleCartMessage();
//     });

//     // Increment quantity
//     $(".add_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;
//         currentQuantity++;
//         quantityElement.text(currentQuantity);

//         if (cartItems[title]) {
//             cartItems[title].quantity = currentQuantity;
//         } else {
//             cartItems[title] = { price: price, quantity: currentQuantity };
//         }

//         updateCartItem(title, price, currentQuantity);
//         updateTotal();
//     });

//     // Decrement quantity
//     $(".remove_icon").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const quantityElement = parentRow.find(".number_quantity");

//         let currentQuantity = parseInt(quantityElement.text()) || 0;

//         if (currentQuantity > 1) {
//             currentQuantity--;
//             quantityElement.text(currentQuantity);
//             cartItems[title].quantity = currentQuantity;
//             updateCartItem(title, price, currentQuantity);
//         } else {
//             removeCartItem(title);
//         }

//         updateTotal();
//         toggleCartMessage();
//     });

//     // Add cart item
//     function addCartItem(title, price, quantity) {
//         const cartItem = `
//             <div class="product_name_amount" data-title="${title}">
//                 <div class="item_name">
//                     <p>${title}</p>
//                     <div class="quantity_amount">
//                         <span class="quantity">${quantity}x</span>
//                         <div class="amount_plus">
//                             <span class="amount">@ $${price.toFixed(2)}</span>
//                             <span class="amount_added">$${(price * quantity).toFixed(2)}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="cancel_btn">
//                     <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//                 </div>
//             </div>`;
//         $(".product_items").append(cartItem);
//     }

//     // Update cart item
//     function updateCartItem(title, price, quantity) {
//         const cartItem = $(`.product_name_amount[data-title="${title}"]`);
//         cartItem.find(".quantity").text(`${quantity}x`);
//         cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
//     }

//     // Remove cart item
//     function removeCartItem(title) {
//         $(`.product_name_amount[data-title="${title}"]`).remove();
//         delete cartItems[title];
//         toggleCartMessage();
//     }

//     // Calculate total
//     function updateTotal() {
//         let total = 0;
//         for (const title in cartItems) {
//             total += cartItems[title].price * cartItems[title].quantity;
//         }
//         $(".total_amount").text(`$${total.toFixed(2)}`);
//     }

//     // Confirm order
//     $(".comfirm_order_btn").click(function () {
//         $(".success_modal").css({ display: "block" });

//         $(".order_items").empty(); // Clear previous items

//         for (const title in cartItems) {
//             const item = cartItems[title];
//             const ordered = `
//                 <div class="product_name_amount">
//                     <div class="image_ordered">
//                         <div class="item_image">
//                             <img src="/images/image-tiramisu-thumbnail.jpg" alt="${title}_image">
//                         </div>
//                         <div class="item_name">
//                             <p>${title}</p>
//                             <div class="quantity_amount">
//                                 <span class="quantity">${item.quantity}x</span>
//                                 <span class="amount">@ $${item.price.toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <span class="amount_added">$${(item.price * item.quantity).toFixed(2)}</span>
//                     </div>
//                 </div>
//                 <div class="receipt_div">
//                     <div class="total_text">
//                         Order Total
//                     </div>
//                     <div class="total_amount">
                        
//                     </div>
//                 </div>`;
//             $(".order_items").append(ordered);
//         }
//     });
//     $(".comfirm_order_btn2").click(function () {
//         $(".success_modal").hide();
//     });
// });


$(document).ready(function () {
    let cartItems = {}; // Track items in the cart

    // Function to toggle the visibility of the cart message or items
    function toggleCartMessage() {
        if (Object.keys(cartItems).length === 0) {
            $(".image_appear").show();
            $(".product_item_div").hide();
            $(".comfirm_order_btn").prop("disabled", true);
        } else {
            $(".image_appear").hide();
            $(".product_item_div").show();
            $(".comfirm_order_btn").prop("disabled", false);
        }
    }

    // Initial setup: Hide cart items and disable button if cart is empty
    toggleCartMessage();

    // Handle "Add to Cart" button click
    $(".add_btn").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const parentBtn = $(this).closest(".add_minus_btn");

        $(this).hide();
        parentBtn.find(".add_quantity").css({ display: "flex" });
        parentBtn.css({ "background-color": "hsl(14, 86%, 42%)" });

        if (!cartItems[title]) {
            cartItems[title] = { price: price, quantity: 1 };
            addCartItem(title, price, 1);
        } else {
            cartItems[title].quantity += 1;
            updateCartItem(title, cartItems[title].price, cartItems[title].quantity);
        }

        updateTotal();
        toggleCartMessage();
    });

    // Increment quantity
    $(".add_icon").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const quantityElement = parentRow.find(".number_quantity");

        let currentQuantity = parseInt(quantityElement.text()) || 0;
        currentQuantity++;
        quantityElement.text(currentQuantity);

        if (cartItems[title]) {
            cartItems[title].quantity = currentQuantity;
        } else {
            cartItems[title] = { price: price, quantity: currentQuantity };
        }

        updateCartItem(title, price, currentQuantity);
        updateTotal();
    });

    // Decrement quantity
    $(".remove_icon").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const quantityElement = parentRow.find(".number_quantity");

        let currentQuantity = parseInt(quantityElement.text()) || 0;

        if (currentQuantity > 1) {
            currentQuantity--;
            quantityElement.text(currentQuantity);
            cartItems[title].quantity = currentQuantity;
            updateCartItem(title, price, currentQuantity);
        } else {
            removeCartItem(title);
        }

        updateTotal();
        toggleCartMessage();
    });

    // Add cart item
    function addCartItem(title, price, quantity) {
        const cartItem = `
            <div class="product_name_amount" data-title="${title}">
                <div class="item_name">
                    <p>${title}</p>
                    <div class="quantity_amount">
                        <span class="quantity">${quantity}x</span>
                        <div class="amount_plus">
                            <span class="amount">@ $${price.toFixed(2)}</span>
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

    // Update cart item
    function updateCartItem(title, price, quantity) {
        const cartItem = $(`.product_name_amount[data-title="${title}"]`);
        cartItem.find(".quantity").text(`${quantity}x`);
        cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
    }

    // Remove cart item
    function removeCartItem(title) {
        $(`.product_name_amount[data-title="${title}"]`).remove();
        delete cartItems[title];
        toggleCartMessage();
    }

    // Calculate total
    function updateTotal() {
        let total = 0;
        for (const title in cartItems) {
            total += cartItems[title].price * cartItems[title].quantity;
        }
        $(".total_amount").text(`$${total.toFixed(2)}`);
    }

    // Confirm order
    $(".comfirm_order_btn").click(function () {
        $(".success_modal").css({ display: "block" });

        $(".order_items").empty(); // Clear previous items

        for (const title in cartItems) {
            const item = cartItems[title];
            const ordered = `
                <div class="product_name_amount">
                    <div class="image_ordered">
                        <div class="item_image">
                            <img src="/images/image-tiramisu-thumbnail.jpg" alt="${title}_image">
                        </div>
                        <div class="item_name">
                            <p>${title}</p>
                            <div class="quantity_amount">
                                <span class="quantity">${item.quantity}x</span>
                                <span class="amount">@ $${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="amount_added">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>`;
            $(".order_items").append(ordered);
        }

        const total = $(".total_amount").text();
        const receiptDiv = `
            <div class="receipt_div">
                <div class="total_text">Order Total</div>
                <div class="total_amount">${total}</div>
            </div>`;
        $(".order_items").append(receiptDiv);
    });

    $(".comfirm_order_btn2").click(function () {
        $(".success_modal").hide();
    });
});
