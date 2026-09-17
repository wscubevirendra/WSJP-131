import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    original_total: 0,
    final_total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, { payload }) => {
            const product = state.items.find((item) => item.id == payload.id);
            if (product) {
                product.qty++
            } else {
                state.items.push(payload)
            }
            state.original_total += Number(payload.originalPrice);
            state.final_total += Number(payload.salePrice);

            localStorage.setItem("cart", JSON.stringify(state))

        },
        lstoCart: (state, { payload }) => {
            const lscart = JSON.parse(localStorage.getItem("cart"));
            if (lscart) {
                state.items = lscart.items;
                state.final_total = Number(lscart.final_total)
                state.original_total = Number(lscart.original_total)

            }
        },
        increateQty: (state, { payload }) => {
            const { id } = payload
            const product = state.items.find((item) => item.id === id);
            if (!product) return
            product.qty++;
            state.final_total += Number(product.salePrice);
            state.original_total += Number(product.originalPrice);
            localStorage.setItem("cart", JSON.stringify(state))

        },
        decreaseQty: (state, { payload }) => {
            const { id } = payload;
            const product = state.items.find((item) => item.id === id);
            if (!product) return
            if (product.qty > 1) {
                product.qty--;
            } else {
                state.items = state.items.filter((item) => item.id != id);
            }
            state.final_total -= Number(product.salePrice);
            state.original_total -= Number(product.originalPrice);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeItem: (state, { payload }) => {
            const { id } = payload;
            const product = state.items.find((item) => item.id === id);
            if (!product) return
            state.items = state.items.filter((item) => item.id != id);
            state.final_total -= Number((product.salePrice) * product.qty);
            state.original_total -= Number((product.originalPrice) * product.qty);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        emptyCart: (state) => {
            state.items = [];
            state.final_total = 0;
            state.original_total = 0;
            localStorage.removeItem("cart")
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, lstoCart, increateQty, decreaseQty, removeItem,emptyCart } = cartSlice.actions
export default cartSlice.reducer