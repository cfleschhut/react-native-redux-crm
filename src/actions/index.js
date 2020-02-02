export const selectPerson = personId => {
  return {
    type: 'SELECTED_PERSON',
    selectedId: personId,
  };
};

export const noneSelected = () => {
  return {
    type: 'NONE_SELECTED',
  };
};

export const fetchContacts = () => {
  return dispatch => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_CONTACTS_SUCCESS', payload: data.data });
      })
      .catch(error => console.log(error));
  };
};
