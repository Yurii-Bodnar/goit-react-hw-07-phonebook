const { default: axios } = require('axios');

axios.defaults.baseURL = 'https://633db14af2b0e623dc79a5bb.mockapi.io/';

export const addContactAPI  = data => {
  return axios.post('contacts', data).then(res => {
    console.log(data);
    return { id: res.data.id, number: res.data.phone, ...data };
  });
};

export const fetchContacts  = async () => {
  try {
    const response = await axios.get('contacts');
    // const { items } = response.data;
    // console.log(response.data);
    // const itemsArr = Object.entries(items).map(([id, phone, data]) => {
    //   return { id, phone, ...data };
    // });
    // return { items: itemsArr };
    return response.data
  } catch (error) {
    console.log(error);
  }
};
