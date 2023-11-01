const modal = document.querySelector("#modal");
const modalOpenButton = document.querySelector(".open-button");
const modalCloseButton = document.querySelector(".close-button");

modalOpenButton.addEventListener("click", () => {
    modal.showModal();
});
modalCloseButton.addEventListener("click", () => {
    modal.close();
});
