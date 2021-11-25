const modal = document.getElementsByClassName("modal")[0];

function show() {
    modal.style.display = "flex";
    modal.style.cursor = "pointer";
}

function hide(element) {
    element.style.display = "none";
}