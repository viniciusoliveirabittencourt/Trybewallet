const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'ADD_DESPESAS':
    return { ...state, expenses: [...state.expenses, ...action.obj] };
  default:
    return state;
  }
};

export default wallet;
