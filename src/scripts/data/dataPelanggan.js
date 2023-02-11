/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api_endpoint';

const getForm = async () => {
  try {
    const response = await fetch(API_ENDPOINT.form);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    alert(error);
  }
};

export default getForm;
