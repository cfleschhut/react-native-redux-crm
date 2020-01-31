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
