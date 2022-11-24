let cart = [];

const cartReducer = (state = cart, action) => {
  //   console.log("state", state);
  switch (action.type) {
    case "ADDTOCART":
      return [...state, { cart: action.payload }];
    case "INCREMENT": {
      console.log(action.payload.id);
      return state.filter(
        (c) =>
          (c.cart.qty =
            c.cart.id === action.payload.id ? action.payload.qty : c.cart.qty)
      );
    }
    case "DECREMENT": {
      console.log(action.payload.id);
      if (action.payload.qty > 0) {
        return state.filter(
          (c) =>
            (c.cart.qty =
              c.cart.id === action.payload.id ? action.payload.qty : c.cart.qty)
        );
      }
    }
    case "DELETE": {
        let a = state.findIndex(a => a.cart.id === action.payload.id)
        let b = state.splice(a, 1)
        return [...state]
    }
    default:
      return state;
  }
};

export default cartReducer;
