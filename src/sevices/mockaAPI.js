const { default: axios } = require('axios');

axios.defaults.baseURL = 'https://633db14af2b0e623dc79a5bb.mockapi.io/';

export const addContactAPI = data => {
  return axios.post('contacts', data).then(res => {
    return { id: res.data.id, number: res.data.phone, ...data };
  });
};

export const fetchContacts = async () => {
  try {
    const response = await axios.get('contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactAPI = id => {
  return axios.delete(`contacts/${id}`).then(() => id);
 
};
