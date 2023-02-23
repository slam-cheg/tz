import "core-js/stable";
import "regenerator-runtime/runtime";
import "./index.css";

const select = document.querySelector(".form__select");
const selectInput = select.querySelector(".form__input");
const selectItems = select.querySelectorAll(".form__select-item");
const selectLabel = select.querySelector(".form__label");
const rangeSlider = document.querySelector("#slider");
const rangeSliderPercents = document.querySelector(".form__input-percent");
const fileButton = document.querySelector(".form__file");
const fileButtonText = fileButton.querySelector(".button__text");
const fileInput = fileButton.querySelector(".form__input");

select.addEventListener("mouseover", () => {
	openSelectList();
});
select.addEventListener("mouseout", () => {
	closeSelectList();
});

selectItems.forEach((item) => {
	item.addEventListener("click", () => {
		chooseSelectItem(item);
	});
});

rangeSlider.addEventListener("input", changePercentBySlider);
fileButton.addEventListener("change", uploadFile);
fileButton.addEventListener("mouseover", activateHoverInfo);
fileButton.addEventListener("mouseout", uploadFile);

function openSelectList() {
	select.classList.add("form__select_open");
}

function closeSelectList() {
	select.classList.remove("form__select_open");
}

function chooseSelectItem(item) {
	debugger;
	selectInput.value = item.value;
	closeSelectList();
}

function changePercentBySlider() {
	rangeSliderPercents.textContent = `${rangeSlider.value}%`;
}

function uploadFile() {
	if (fileInput.files[0]) {
		fileButtonText.textContent = fileInput.files[0].name;
		fileButton.classList.add("form__file_uploaded");
	}
}

function activateHoverInfo() {
	if (fileInput.files[0]) {
		fileButtonText.textContent = "Выбрать другой файл";
	}
}
