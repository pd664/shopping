const category = ''

const categories = (state = category, action) => {
    switch (action.type) {
        case 'CATEGORY' : {
            state = action.payload.category;
            return state;
        }
        default: return state;
    }
}

export default categories