export const allProducts = (products) => {
    return {
        type: 'ALLPRODUCTS',
        payload: {
            products: products
        }
    }
}

export const category = (category) => {
    
    return {
        type: 'CATEGORY',
        payload: {
            category:  category
        }
    }
} 
export function addItem(item) {     
    return {
        type : 'ADDTOCART',
        payload: {
            id: item.id,
            img: item.thumbnail,
            price: item.price,
            brand: item.brand,
            description: item.description,
            title: item.title,
            stock: item.stock,
            qty: 1,
        }
    }
}
// export const addItem = (item) => {
//     return {
//         type : 'ADDTOCART',
//         payload: {
//             itemDetail : item
//         }
//     }
// }