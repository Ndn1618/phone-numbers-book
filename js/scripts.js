// Choosing elements
var elPhonebookForm = $('.js-phonebook-form');
var elNameInput = $('.js-name-input', elPhonebookForm);
var elSurnameInput = $('.js-surname-input', elPhonebookForm);
var elPhoneInput = $('.js-phone-input', elPhonebookForm);
var elRelateInput = $('.js-relate-input', elPhonebookForm);

var elPhoneNumberList = $('.phone-number-list');

var phoneNumbers = [];
var newPhoneNumber = {};

// Function for showing new phone number
var showNewPhoneNumber = function () {
    var elPhoneNumberItem = document.createElement('li');
    elPhoneNumberItem.classList.add('list-group-item');

    var elPhoneNumberParagraphName = document.createElement('p');
    elPhoneNumberParagraphName.textContent = 'Name : ' + newPhoneNumber.name;

    var elPhoneNumberParagraphSurname = document.createElement('p');
    elPhoneNumberParagraphSurname.textContent = 'Surname : ' + newPhoneNumber.surname;

    var elPhoneNumberParagraphPhone = document.createElement('p');
    elPhoneNumberParagraphPhone.textContent = 'Phone number : ' + newPhoneNumber.phone;

    var elPhoneNumberParagraphRelate = document.createElement('p');
    elPhoneNumberParagraphRelate.classList.add('mb-0');
    elPhoneNumberParagraphRelate.textContent = 'Relativeness : ' + newPhoneNumber.relativeness;

    elPhoneNumberList.appendChild(elPhoneNumberItem);
    elPhoneNumberItem.appendChild(elPhoneNumberParagraphName);
    elPhoneNumberItem.appendChild(elPhoneNumberParagraphSurname);
    elPhoneNumberItem.appendChild(elPhoneNumberParagraphPhone);
    elPhoneNumberItem.appendChild(elPhoneNumberParagraphRelate);
}

elPhonebookForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  // Taking value of name, surname, phone number and relativeness inputs
  var elNameInputValue = elNameInput.value.trim();
  var elSurnameInputValue = elSurnameInput.value.trim();
  var elPhoneInputValue = parseInt(elPhoneInput.value.trim(), 10);
  var elRelateInputValue = elRelateInput.value.trim();

  newPhoneNumber.name = elNameInputValue;
  newPhoneNumber.surname = elSurnameInputValue;
  newPhoneNumber.phone = elPhoneInputValue;
  newPhoneNumber.relativeness = elRelateInputValue;
  phoneNumbers.push(newPhoneNumber);

  showNewPhoneNumber();
});
