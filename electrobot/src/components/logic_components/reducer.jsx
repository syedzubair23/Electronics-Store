export const initialState = {
    basket: [],
}

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
          return {
            ...state,
            basket: [...state.basket, action.item],
          };

        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: []
          }
    
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }

        default:
            return state;
    }
}

export default reducer