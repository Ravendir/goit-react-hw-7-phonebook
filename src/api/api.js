import axios from "axios";

axios.defaults.baseURL = "https://61c4d1aff1af4a0017d997fd.mockapi.io";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function createContacts({ name, number }) {
  const { data } = await axios.post(`/contacts`, { name, number });
  return data;
}
