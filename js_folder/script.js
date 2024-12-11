$(document).ready(function () {
    let cartItems = {}; // Track items in the cart

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

    toggleCartMessage();

    $(".add_btn").click(function () {
        const parentRow = $(this).closest(".product_row");
        const title = parentRow.find("h4").text();
        const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
        const parentBtn = $(this).closest(".add_minus_btn");

        $(this).hide(); // Hide the add_btn
        parentBtn.find(".add_quantity").css({ display: "flex" }); // Show add_quantity
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
            const parentBtn = $(this).closest(".add_minus_btn");
            parentBtn.find(".add_quantity").hide();
            parentBtn.css({ "background-color": "#fff" });
            parentBtn.find(".add_btn").show();  // Show the add_btn again when quantity is 1 or 0
        }

        updateTotal();
        toggleCartMessage();
    });

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

    // $(".product_items").on("click", ".close_btn", function () {
    //     const title = $(this).closest(".product_name_amount").find(".item_name p").text();

    //     removeCartItem(title);

    //     // Reset the add_btn and hide add_quantity after removal
    //     const parentRow = $(`.product_row:has(h4:contains("${title}"))`);
    //     const parentBtn = parentRow.find(".add_minus_btn");
    //     parentBtn.find(".add_quantity").hide();
    //     parentBtn.find(".add_btn").show();

    //     updateTotal();
    //     toggleCartMessage();
    // });

    function updateCartItem(title, price, quantity) {
        const cartItem = $(`.product_name_amount[data-title="${title}"]`);
        cartItem.find(".quantity").text(`${quantity}x`);
        cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
    }

    function removeCartItem(title) {
        $(`.product_name_amount[data-title="${title}"]`).remove();
        delete cartItems[title];
        toggleCartMessage();
    }

    function updateTotal() {
        let total = 0;
        for (const title in cartItems) {
            total += cartItems[title].price * cartItems[title].quantity;
        }
        $(".total_amount").text(`$${total.toFixed(2)}`);
    }

    $(".comfirm_order_btn").click(function () {
        $(".success_modal").css({ display: "block" });

        $(".order_items").empty();

        for (const title in cartItems) {
            const item = cartItems[title];
            const imageSrc = $(`.hidden_image img[data-title="${title}"]`).attr("src");

            const ordered = `
                <div class="product_name_amount">
                    <div class="image_ordered">
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
        location.reload();
    });
});


// $(document).ready(function () {
//     let cartItems = {}; // Track items in the cart

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

//     toggleCartMessage();

//     $(".add_btn").click(function () {
//         const parentRow = $(this).closest(".product_row");
//         const title = parentRow.find("h4").text();
//         const price = parseFloat(parentRow.find(".dollar_amount").text().replace("$", ""));
//         const parentBtn = $(this).closest(".add_minus_btn");

//         $(this).hide(); // Hide the add_btn
//         parentBtn.find(".add_quantity").css({ display: "flex" }); // Show add_quantity
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
//             const parentBtn = $(this).closest(".add_minus_btn");
//             parentBtn.find(".add_quantity").hide();
//             parentBtn.find(".add_btn").show();  // Show the add_btn again when quantity is 1 or 0
//         }

//         updateTotal();
//         toggleCartMessage();
//     });

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

//     // $(".product_items").on("click", ".close_btn", function () {
//     //     const title = $(this).closest(".product_name_amount").find(".item_name p").text();

//     //     removeCartItem(title);

//     //     // Hide add_quantity and show add_btn after removing the item
//     //     const parentRow = $(`.product_row:has(h4:contains("${title}"))`);
//     //     const parentBtn = parentRow.find(".add_minus_btn");
//     //     parentBtn.find(".add_quantity").hide();
//     //     parentBtn.find(".add_btn").show();

//     //     updateTotal();
//     //     toggleCartMessage();
//     // });

//     function updateCartItem(title, price, quantity) {
//         const cartItem = $(`.product_name_amount[data-title="${title}"]`);
//         cartItem.find(".quantity").text(`${quantity}x`);
//         cartItem.find(".amount_added").text(`$${(price * quantity).toFixed(2)}`);
//     }

//     function removeCartItem(title) {
//         $(`.product_name_amount[data-title="${title}"]`).remove();
//         delete cartItems[title];
//         toggleCartMessage();
//     }

//     function updateTotal() {
//         let total = 0;
//         for (const title in cartItems) {
//             total += cartItems[title].price * cartItems[title].quantity;
//         }
//         $(".total_amount").text(`$${total.toFixed(2)}`);
//     }

//     $(".comfirm_order_btn").click(function () {
//         $(".success_modal").css({ display: "block" });

//         $(".order_items").empty();

//         for (const title in cartItems) {
//             const item = cartItems[title];
//             const imageSrc = $(`.hidden_image img[data-title="${title}"]`).attr("src");

//             const ordered = `
//                 <div class="product_name_amount">
//                     <div class="image_ordered">
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
//                 </div>`;
//             $(".order_items").append(ordered);
//         }

//         const total = $(".total_amount").text();
//         const receiptDiv = `
//             <div class="receipt_div">
//                 <div class="total_text">Order Total</div>
//                 <div class="total_amount">${total}</div>
//             </div>`;
//         $(".order_items").append(receiptDiv);
//     });

//     $(".comfirm_order_btn2").click(function () {
//         $(".success_modal").hide();
//     });
// });