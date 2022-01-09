import {createSlice} from '@reduxjs/toolkit'
import {items} from '../items/Items';

const initialState = {
    itemsList: items,
    selectedItem: items[0]
}

export const itemsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    deleteItem:(state,action) => {
        state.itemsList = state.itemsList.filter(item => item.id !== action.payload);
        state.selectedItem = state.itemsList[0];
    },
    addItem: (state,action) => {
        state.itemsList.push(action.payload)
    },
    setSelectedItem: (state,action) => {
        state.selectedItem = action.payload;
    }
    },
})
export const {deleteItem,setSelectedItem,addItem} = itemsSlice.actions
export default itemsSlice.reducer
