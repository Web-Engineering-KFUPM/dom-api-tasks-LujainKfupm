
document.addEventListener("DOMContentLoaded", function () {
    //TODO1
    document.getElementById("t1-msg").textContent = "Hello, World!";

    //TODO2
    document.getElementById("t2-btn").addEventListener("click", function () {
        document.getElementById("t2-status").textContent = "You clicked the button!";
    });

});
