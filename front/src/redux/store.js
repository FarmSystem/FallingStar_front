import { configureStore, createSlice } from '@reduxjs/toolkit'

let color = createSlice({
    name: 'color',
    initialState: [
        //main
        {
            page: '/',
            bgColor:'linear-gradient(180deg, #6D6B64 18.75%, rgba(82, 82, 82, 0.21) 100%)'
        },

        //introduce
        {
            page: '/introduce',
            bgColor:'#FAFAFA'
        },
        //write
        {
            page: '/WillWriting_notice',
            bgColor:'#E9EAEC'
        },
        //search
        {
            page: '/WillSearch',
            bgColor:'#E7E5E0'
        },
        //lawayer
        {
            page: '/Lawyer',
            bgColor:'#F8F8F8'
        },
        //Question
        {
            page: '/Question',
            bgColor:'#FFFFFF'
        },
        //login
        {
            page: 'login',
            bgColor:'#FFFFFF'
        }    
    ],
    reducers:{
        addText(state, action){
            state.push(action.payload)
        },
    }

})
export let { addText} = color.actions

let page = createSlice({
    name: 'page',
    initialState:
    {
        color1: 'pink',
        color2: 'black'
    }
})

export default configureStore({
    reducer:{
        color: color.reducer
    }
})