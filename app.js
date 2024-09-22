const cursor = document.querySelector(".cursor");
const a = document.querySelectorAll("a");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY - 10 + "px";
    cursor.style.left = e.clientX - 10 + "px";
});

a.forEach((a) => {
    a.addEventListener("mouseover", () => {
        cursor.style.transform = `scale(1.5)`;
        cursor.style.opacity = 0.5;
    });
    a.addEventListener("mouseout", () => {
        cursor.style.transform = `scale(1)`;
        cursor.style.opacity = 1;
    });
});
