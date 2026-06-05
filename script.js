// have cursor gif follow mouse
const cursor = document.getElementById("cursor")

document.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.clientX - cursor.width / 2) + 'px';
    cursor.style.top = (e.clientY - cursor.height / 2) + 'px';
})

// switch to pointer for hovering
document.querySelectorAll(".hover").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.src = "images/pointer.gif";
    });

    el.addEventListener("mouseleave", () => {
        cursor.src = "images/cursor.gif";
    });
});
