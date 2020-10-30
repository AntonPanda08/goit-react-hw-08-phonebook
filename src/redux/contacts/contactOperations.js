import contactAction from "./contactAction";
import axios from "axios";
// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const createContact = (name, number) => (dispatch) => {
  dispatch(contactAction.addContactRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactAction.addContactSuccess(data));
    })
    .catch((error) => dispatch(contactAction.addContactError(error)));
};
const fetchContacts = () => (dispatch) => {
  dispatch(contactAction.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactAction.fetchContactSuccess(data)))
    .catch((error) => dispatch(contactAction.fetchContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactAction.removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactSuccess(id)))
    .catch((error) => dispatch(contactAction.removeContactError(error)));
};

export default {
  createContact,
  fetchContacts,
  removeContact,
};
