import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const item = action.payload
            let productItem = state.cartItems.find(product => product.id === item.id)
            if(productItem){
                productItem.quantity += 1
                toast.success('Product quantity increased')
            }else{
                item.quantity = 1
                state.cartItems = [item,...state.cartItems]
                toast.success('Product added to the cart')
            }
        },
        incrementQ(state, action){
            const item = action.payload
            let productItem = state.cartItems.find(product => product.id === item.id)
            productItem.quantity += 1
            toast.success('Product quantity increased')
        },
        decrementQ(state, action){
            const item = action.payload
            let productItem = state.cartItems.find(product => product.id === item.id)
            productItem.quantity -= 1
            if(productItem.quantity === 0){
                state.cartItems = state.cartItems.filter(product => product.id !== item.id)
            }
            toast.success('Product quantity decreased')
        },
        removeFromCart(state, action){
            const item = action.payload
            state.cartItems = state.cartItems.filter(product => product.id !== item.id)
            toast.success('Product removed from the cart')
        }
    }
})


export const { addToCart, incrementQ, decrementQ, removeFromCart } = cartSlice.actions

export default cartSlice.reducer

