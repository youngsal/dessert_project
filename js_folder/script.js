// $(document).ready(function (){
//     $(".add_minus_btn").on("click", () => {
//         $(".add_btn").css({"display" : "none"});
//         $(".add_quantity").css({"display" : "flex"});
//         if ($(".add_quantity"))
//     })
// });




$(document).ready(function () {
    // 1. Handle 'Add' button click
    $(".add_btn").on("click", function () {
        const parentDiv = $(this).closest(".add_product");

        // Replace 'add_btn' with 'add_quantity'
        parentDiv.find(".add_btn").hide(); // Hide the 'Add' button
        parentDiv.find(".add_quantity").show(); // Show the 'Add Quantity' section

        // Add product to the cart
        const productName = parentDiv.find(".product_name").text(); // Get product name
        const productPrice = parseFloat(parentDiv.find(".dollar_amount").text().replace("$", "")); // Get product price
        const existingCartItem = $(`.cart_div .product_name:contains(${productName})`);

        if (existingCartItem.length) {
            // If product is already in the cart, increment its quantity
            const quantityField = existingCartItem.closest(".product_name_amount").find(".quantity");
            const currentQuantity = parseInt(quantityField.text());
            quantityField.text(currentQuantity + 1);

            // Update amount
            const itemAmount = existingCartItem.closest(".product_name_amount").find(".amount_added");
            const updatedAmount = (currentQuantity + 1) * productPrice;
            itemAmount.text(`$${updatedAmount.toFixed(2)}`);
        } else {
            // Add new product to the cart
            $(".cart_div").append(`
                <div class="product_name_amount">
                    <div class="item_name">
                        <p class="product_name">${productName}</p>
                    </div>
                    <div class="quantity_amount">
                        <span class="quantity">1</span>
                        <span class="amount_added">$${productPrice.toFixed(2)}</span>
                    </div>
                </div>
            `);
        }

        // Update total amount
        updateTotalAmount();
    });

    // 2. Handle 'Add Icon' click
    $(".add_remove_icon.add").on("click", function () {
        const quantityField = $(this).siblings(".number_quantity");
        let currentQuantity = parseInt(quantityField.text());
        quantityField.text(++currentQuantity);

        updateCart($(this).closest(".add_product"));
    });

    // 3. Handle 'Remove Icon' click
    $(".add_remove_icon.remove").on("click", function () {
        const quantityField = $(this).siblings(".number_quantity");
        let currentQuantity = parseInt(quantityField.text());

        if (currentQuantity > 1) {
            quantityField.text(--currentQuantity);
            updateCart($(this).closest(".add_product"));
        } else {
            // Reset to initial state if quantity is zero
            const parentDiv = $(this).closest(".add_product");
            parentDiv.find(".add_quantity").hide(); // Hide 'Add Quantity'
            parentDiv.find(".add_btn").show(); // Show 'Add' button
        }
    });

    // 4. Confirm Order Button Click
    $(".comfirm_order_btn").on("click", function () {
        $(".success_modal").fadeIn(); // Display the success modal
    });

    // 5. Utility Function to Update Cart
    function updateCart(productDiv) {
        const productName = productDiv.find(".product_name").text();
        const productPrice = parseFloat(productDiv.find(".dollar_amount").text().replace("$", ""));
        const cartItem = $(`.cart_div .product_name:contains(${productName})`);

        if (cartItem.length) {
            const quantity = parseInt(productDiv.find(".number_quantity").text());
            const updatedAmount = quantity * productPrice;

            // Update cart quantity and amount
            cartItem.closest(".product_name_amount").find(".quantity").text(quantity);
            cartItem.closest(".product_name_amount").find(".amount_added").text(`$${updatedAmount.toFixed(2)}`);

            // Update total amount
            updateTotalAmount();
        }
    }

    // 6. Utility Function to Update Total Amount
    function updateTotalAmount() {
        let total = 0;
        $(".cart_div .amount_added").each(function () {
            total += parseFloat($(this).text().replace("$", ""));
        });
        $(".total_amount").text(`$${total.toFixed(2)}`);
    }
});
