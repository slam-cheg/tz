import "core-js/stable";
import "regenerator-runtime/runtime";
import "./index.css";

const form = document.querySelector(".form");
const emailInput = form.querySelector("#email");
const nameInput = form.querySelector("#name");
const select = form.querySelector(".form__select");
const selectInput = select.querySelector(".form__input");
const selectItems = select.querySelectorAll(".form__select-item");
const rangeSlider = form.querySelector("#slider");
const rangeSliderPercents = form.querySelector(".form__input-percent");
const fileButton = form.querySelector(".form__file");
const fileButtonText = fileButton.querySelector(".button__text");
const fileInput = fileButton.querySelector(".form__input");
const submitButton = form.querySelector("#submit-button");

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
form.addEventListener("submit", fakeSubmitForm);

function openSelectList() {
	select.classList.add("form__select_open");
}

function closeSelectList() {
	select.classList.remove("form__select_open");
}

function chooseSelectItem(item) {
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

function fakeSubmitForm(evt) {
	evt.preventDefault();
	const submitData = {
		System: selectInput.value,
		Email: emailInput.value,
		Name: nameInput.value,
		Slider: `${rangeSlider.value}%`,
		File: fileInput.files[0],
	};

	console.log(submitData);
}
