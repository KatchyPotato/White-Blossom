// have cursor gif follow  mouse
const cursor = document.getElementById("cursor")

document.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.clientX - cursor.width / 2) + 'px';
    cursor.style.top = (e.clientY - cursor.height / 2) + 'px';
})