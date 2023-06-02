/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
import '../../../component/hubungiKami/FormContact';
import '../../../component/home/heroImage';
import '../../../component/home/ourSpesial';
import API_ENDPOINT from '../../../globals/api_endpoint';

const ContactForm = {
  async render() {
    return `
    <hero-image></hero-image>
    
    <form-contact></form-contact>
    <our-spesial></our-spesial>
    `;
  },

  afterRender() {
    const inputFormNameId = document.querySelector('#nameInputId');
    const inputFormTelpId = document.querySelector('#noTlpInputId');
    const inputEmailId = document.querySelector('#emailInputId');
    const inputLabelId = document.querySelector('#lableInputId');
    const inputTexareaId = document.querySelector('#FormControlTextarea1');
    const SubmitFrom = document.querySelector('#submitForm');

    SubmitFrom.addEventListener('click', function (e) {
      e.preventDefault();
      const customer = {
        nama: inputFormNameId.value,
        noHp: inputFormTelpId.value,
        email: inputEmailId.value,
        subjek: inputLabelId.value,
        pesan: inputTexareaId.value,
      };
      insertCustomer(customer);
    });
  },
};

const insertCustomer = async (customer) => {
  console.log(customer);
  try {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Auth-Token': '12345',
      },
      body: JSON.stringify(customer),
    };

    const response = await fetch(`${API_ENDPOINT.form}`, options);
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    showResponseMessage(responseJson.message);
  } catch (error) {
    showResponseMessage(error);
    console.log(error);
  }
};

const showResponseMessage = (message = 'Check your internet connection') => {
  alert(message);
};

export default ContactForm;
