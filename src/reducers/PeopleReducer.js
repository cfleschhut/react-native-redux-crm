const initialState = {
  people: [],
  detailView: false,
  personSelected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        people: [...state.people, ...action.payload],
      };

    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.selectedId,
      };

    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };

    default:
      return state;
  }
};
