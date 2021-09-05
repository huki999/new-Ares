let asideLeft = document.getElementById("aside-left");

asideLeft.addEventListener("click", () => {
    asideLeft.style.animationName = "asideLeft";
    asideLeft.style.animationDuration = "4s";

    setTimeout(() => {
        asideLeft.style.animationName = "none";
    }, 4000);
});

let asieRigth = document.getElementById("aside-rigth");

asieRigth.addEventListener("click", () => {
    asieRigth.style.animationName = "asideRigth";
    asieRigth.style.animationDuration = "4s";

    setTimeout(() => {
        asieRigth.style.animationName = "none";
    }, 4000);
});
