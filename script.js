// Add a class to the overlay that hides it initially
$('.overlay').addClass('hidden');

// Function to show the pop-up
function showPopup() {
    $('.overlay').removeClass('hidden');
}

// Function to hide the pop-up
function hidePopup() {
    $('.overlay').addClass('hidden');
}

// Click event for the "See More" button
$('.portfolio-button').click(function(){
    showPopup();
    // Disable scrolling when the pop-up is displayed
    $('body').css('overflow', 'hidden');
    return false;
});

// Click event for the close button
$('.close').click(function(){
    hidePopup();
    // Enable scrolling when the pop-up is closed
    $('body').css('overflow', 'auto');
    return false;
});
