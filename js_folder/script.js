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









        // // Add product to cart when add_btn is clicked
        // $(".add_btn").on("click", function () {
        //   const productName = $(this).closest(".product_info").find("h4").text();
        //   const productPrice = $(this).closest(".product_info").find(".dollar_amount").text();
          
        //   // Check if the product already exists in the cart
        //   let existingProduct = $(".cart_div .product_name_amount").filter(function() {
        //     return $(this).find(".item_name p").text() === productName;
        //   });
      
        //   if (existingProduct.length > 0) {
        //     // Product already in cart, just update the quantity
        //     let quantityElement = existingProduct.find(".quantity");
        //     let amountAddedElement = existingProduct.find(".amount_added");
        //     let quantity = parseInt(quantityElement.text()) + 1;
        //     quantityElement.text(quantity + "x");
        //     amountAddedElement.text("$" + (parseFloat(productPrice.replace('$', '')) * quantity).toFixed(2));
        //   } else {
        //     // New product, add to the cart
        //     const cartItem = `
        //       <div class="product_name_amount">
        //         <div class="item_name">
        //           <p>${productName}</p>
        //           <div class="quantity_amount">
        //             <span class="quantity">1x</span>
        //             <div class="amount_plus">
        //               <span class="amount">@ ${productPrice}</span>
        //               <span class="amount_added">${productPrice}</span>
        //             </div>
        //           </div>
        //         </div>
        //         <div class="cancel_btn">
        //           <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
        //         </div>
        //         <div class="remove_btn">Remove</div> <!-- New remove button -->
        //       </div>
        //     `;
        //     $(".cart_div").append(cartItem);
        //   }
      
        //   updateTotalAmount();
        // });
      
        // // Remove product from cart when remove_btn is clicked
        // $(".cart_div").on("click", ".remove_btn", function () {
        //   let cartItem = $(this).closest(".product_name_amount");
        //   let quantityElement = cartItem.find(".quantity");
        //   let amountAddedElement = cartItem.find(".amount_added");
        //   let productPrice = parseFloat(cartItem.find(".amount").text().replace('@ $', ''));
        //   let quantity = parseInt(quantityElement.text());
      
        //   if (quantity > 1) {
        //     // If quantity is more than 1, decrement it
        //     quantity--;
        //     quantityElement.text(quantity + "x");
        //     amountAddedElement.text("$" + (productPrice * quantity).toFixed(2));
        //   } else {
        //     // If quantity is 1, remove the item from the cart
        //     cartItem.remove();
        //   }
      
        //   updateTotalAmount();
        // });
      
        // // Function to update the total amount
        // function updateTotalAmount() {
        //   let total = 0;
        //   $(".cart_div .product_name_amount").each(function() {
        //     let amountAdded = parseFloat($(this).find(".amount_added").text().replace('$', ''));
        //     total += amountAdded;
        //   });
        //   $(".total_amount").text("$" + total.toFixed(2));
        // }   

//     var cart_item_added = 0;
//     $(".add_btn").click(function (){
//         cart_item_added++;

//         let title = $(this).closest(".product_row").find("h4").text();
//         let quantityNumber = $(this).closest(".product_row").find(".number_quantity").text();
//         let price = $(this).closest(".product_row").find(".dollar_amount").text();
//     });


//     let cart_section = `
//         <div class="product_name_amount">
//             <div class="item_name">
//                 <p>
//                     ${title}
//                 </p>
//                 <div class="quantity_amount">
//                     // <span class="quantity">2x</span>
//                     <span class="quantity">${quantityNumber}</span>
//                     <div class="amount_plus">
//                         // <span class="amount">@ $13.00</span>
//                         <span class="amount">${price}</span>
//                         <span class="amount_added">$6.50</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="cancel_btn">
//                 <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
//             </div>
//         </div>
//     `

//     $(".product_items").append(cart_section);
//     $(".cart_item_added").text(cart_item_added);
//     $(".close_btn").click(function (){
//         $(this).closest(".product_name_amount").remove();

//         itemCount();
//     });

//     function itemCount() {
//         let res = $(".product_items").children.length;
//         $(".cart_item_added").text(res);
//     };
// });


var cart_item_added = 0;

$(".add_btn").click(function () {
    // Increment the cart item count
    cart_item_added++;

    // Get item details
    let title = $(this).closest(".product_row").find("h4").text();
    let quantityNumber = $(this).closest(".product_row").find(".number_quantity").text();
    let price = $(this).closest(".product_row").find(".dollar_amount").text();

    // Create the cart item template
    let cart_section = `
        <div class="product_name_amount">
            <div class="item_name">
                <p>${title}</p>
                <div class="quantity_amount">
                    <span class="quantity">${quantityNumber}x</span>
                    <div class="amount_plus">
                        <span class="amount">@ ${price}</span>
                        <span class="amount_added">${price}</span>
                    </div>
                </div>
            </div>
            <div class="cancel_btn">
                <ion-icon name="close-circle-outline" class="close_btn"></ion-icon>
            </div>
        </div>
    `;

    // Append the new cart item to the cart section
    $(".product_items").append(cart_section);

    // Update the cart item count display
    $(".cart_item_added").text(cart_item_added);
});

// Use event delegation for dynamically added close buttons
$(".product_items").on("click", ".close_btn", function () {
    // Remove the cart item
    $(this).closest(".product_name_amount").remove();

    // Update the cart item count
    itemCount();
});

// Function to update the cart item count
function itemCount() {
    let res = $(".product_items").children().length;
    $(".cart_item_added").text(res);
}

});