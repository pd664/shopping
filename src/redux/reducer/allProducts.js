const products = []

const allProducts = (state = products, action) => {
    switch(action.type) {
        case 'ALLPRODUCTS' : {
            state = action.payload.products
            return state
        }
        default : return state
    }
}

export default allProducts