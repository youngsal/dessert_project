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
});