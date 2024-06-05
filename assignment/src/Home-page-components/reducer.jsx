export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add-to-cart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove-from-cart":
      const updatedBasket = state.basket.filter(
        (item) => item.title !== action.title
      );
      return {
        ...state,
        basket: updatedBasket,
      };
  }
};

export default reducer;
