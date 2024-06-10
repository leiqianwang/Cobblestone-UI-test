// the added event listener function will handle the button click event and toggle the visibility of the `toggleButton id`. To this 
//handler implementation, the hidden text becomes visible after the user clicked in the button `Read More`, then back to hidden invisibility of the partial
//text contents toggling in `Read Less`


document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var moreText = document.getElementById('moreText');
    var modeToggleButton = document.getElementById('modeToggleButton');
    var contactLink = document.getElementById('contactLink');
    var body = document.body;
    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var form = document.querySelector('form');
    var rowFluid = document.querySelector('.row-fluid');

    //To ensure the selected elements declared as variable to target on the toggle event handler, below are the three event listeners that 
    //correspond to each toggle function by selecting element ID, container or querySelector to the tag elements, respectively. 


    //This is a toggle button for `Read More` and `Read Less` between the visibility and invisibility of the hidden contents,
    // of text to be populated via the toggling change
    toggleButton.addEventListener('click', function () {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'block';
            toggleButton.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            toggleButton.textContent = 'Read More';
        }
    });

    //Mode toggle button event handler function for mode changes
    modeToggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        section.classList.toggle('dark-mode');
        form.classList.toggle('dark-mode');
        rowFluid.classList.toggle('dark-mode');

    });

    //This event listener is for the "contactLink" enables the page scrolling down to the <form> section, 
    //achieved via JavaScript built-in method scrollIntoView()
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        form.scrollIntoView({ behavior: 'smooth' });
    });


    //This handler listens to the 'submit' event, to redirect the user to the new page displaying the thank-you message after user submit their 
    //username and email.
    //The thank-you page rendering is all in the thankyou.html file
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'thankyou.html';
    })
});
