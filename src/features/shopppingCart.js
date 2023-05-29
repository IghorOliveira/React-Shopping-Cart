import { productsArray, getProductData } from "../productsStore";
//allows to create reducer
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

//contains all the information about the reducer, the actions and the name of the state
const cartSlice = createSlice({
    //name of the slice/state
    name: 'cart',
    //the initial values for the state at the beginning of the app
        //since this is a login page the initial state is an empty user object
    initialState: {value: initialStateValue},
    //reducers functions
        //in redux toolkit I dont need to worry about action, when I use the useDispacth() I can just call these reducers directly
    reducers: {
        addOneToCart: (state, action) => {
            
            //state.value = action.payload;

            let id = action.payload;

            const quantity = getProductQuantity(state, action.payload);

            if(quantity===0){
                state.value = ([...state.value,{id: id, quantity: 1}])
            } else {    
                state.value =(state.value.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product))
            }
        },

        deleteFromCart: (state, action) => {
            console.log('action ',action)
            let id = action.payload;
            state.value = state.value.filter(product => product.id !== id);
        },

        removeOneFromCart: (state, action) => {
            console.log('action ',action)
            let id = action.payload;
            const quantity = getProductQuantity(state, id);

            if(quantity == 1){
                state.value = state.value.filter(product => product.id !== id);
            } else if(quantity > 1) {
                state.value = (state.value.map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product))
            }
        },

        
    }
});

    export function getTotalCost(state) {
        let totalCost = 0;
        let currState = state;
        console.log('stae', currState)
        currState.map((cartItem) => {
            console.log('CART ITEM ',cartItem)
            const productData = getProductData(cartItem.id);
            console.log('product data ',productData)
            totalCost+=(productData.price*cartItem.quantity);
            console.log('curr price ',productData.price*cartItem.quantity)
            console.log('cost ',totalCost)
        })
        return totalCost;
    }

    

    export function getProductQuantity(state,payload) {
        let id = payload;

        
        let currState = state.value;
        console.log(currState)
        const quantity = currState.find(product => product.id === id)?.quantity

        if(quantity === undefined){
            return 0;
        }

        return quantity;
    }


//here we are setting that the function/reducer login is an action that can be called
    //the actions object is created automaticly by redux, it takes the names of the reducers you created
export const {addOneToCart, deleteFromCart, removeOneFromCart} = cartSlice.actions;

//this line only exports the reducers of userSlice
    //slice != reducer
export default cartSlice.reducer;
