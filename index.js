document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            tabLinks.forEach(link => link.classList.remove("active-tab"));
            tabContents.forEach(content => content.classList.remove("active-tab"));

            this.classList.add("active-tab");
            document.getElementById(tabId).classList.add("active-tab");
        });
    });
<<<<<<< HEAD
});
=======
});




>>>>>>> origin/main
