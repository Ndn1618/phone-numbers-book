// Choosing elements
var elPhonebookForm = $('.js-phonebook-form');
var elNameInput = $('.js-name-input', elPhonebookForm);
var elSurnameInput = $('.js-surname-input', elPhonebookForm);
var elPhoneInput = $('.js-phone-input', elPhonebookForm);
var elRelateInput = $('.js-relate-input', elPhonebookForm);

var elPhoneNumberList = $('.js-phone-number-list');

var phoneNumbers = [];
var newPhoneNumber = {};

// Check tel input
function checkTel(str) {
  var patt = new RegExp(/^[-+\/\s]*([0-9][-+\/\s]*){9,}$/);
  return patt.test(str);
}

// Phone number formatter
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/(\d{2})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    initialCode = '+998';
    return [`${initialCode} (`, match[1], ') ', match[2], '-', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
}



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
  if (elNameInputValue === '') {
    elNameInput.value = '';
    elNameInput.focus();
    return;
  }

  var elSurnameInputValue = elSurnameInput.value.trim();
  if (elSurnameInputValue === '') {
    elSurnameInput.value = '';
    elSurnameInput.focus();
    return;
  }

  var elPhoneInputValue = elPhoneInput.value.trim();
  if (elPhoneInputValue === '') {
    elPhoneInput.value = '';
    elPhoneInput.focus();
    return;
  } else if (!checkTel(elPhoneInputValue)) {
      elPhoneInput.value = '';
      elPhoneInput.focus();
      return;
    }

  // Format phone number
  var formattedPhoneNumber = formatPhoneNumber(elPhoneInputValue);

  var elRelateInputValue = elRelateInput.value.trim();
  if (elRelateInputValue === '') {
    elRelateInput.value = '';
    elRelateInput.focus();
    return;
  }

  newPhoneNumber.name = elNameInputValue;
  newPhoneNumber.surname = elSurnameInputValue;
  newPhoneNumber.phone = formattedPhoneNumber;
  newPhoneNumber.relativeness = elRelateInputValue;
  phoneNumbers.push(newPhoneNumber);

  showNewPhoneNumber();

  // Clear all inputs
  elNameInput.value = '';
  elNameInput.focus();
  elSurnameInput.value = '';
  elPhoneInput.value = '';
  elRelateInput.value = '';
});
