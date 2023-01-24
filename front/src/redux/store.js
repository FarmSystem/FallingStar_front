import { configureStore, createSlice } from '@reduxjs/toolkit'

//redux-persist
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

let login_user = createSlice({
    name: 'login_user',
    initialState:{
        login: false,
        email: 'fallingstar@gmail.com',
        name: '김철구',
        password: 'dudnjs725@',
        phone:'01052394217',
        birth: '010725'
    },
    reducers:{
        LoginState(state, action){
            state.login = false;
        },
        addUserInfo(state, action){
            return action.payload //한번에 데이터 수정
        }
    }
})
export let {LoginState, addUserInfo} = login_user.actions;

let will = createSlice({
    name: 'will',
    initialState: {
        name: '김철구',
        birth: '010725-1234567',
        question1: '일반 3일장 장례식',
        question2: [
            {
                name: '이여원',
                relationship: '녀',
                phone: '010-1234-1234'
            },
        ],
        question3: '봉안묘',
        question4: false,
        question5: true,
        family: {
            child:'이여원, 이여원',
            parents:'이여원, 이여원',
            sibile:'이여원, 이여원',
            uncle:'이여원, 이여원',
            spouse:'이여원, 이여원'
        },
        property:{
            house: 1,
            bond:2,
            patent: 0,
            car: 0
        },
        text: '안녕',
        open: {
            opener:'이여원',
            contact: '010-1234-1234',
            relation: '아들'
        }
    }
    ,
    reducers:{
        Question1(state, action){
            state.question1= action.payload;
        },
        Question2(state, action){
            state.question2= action.payload;
        },
        Question3(state, action){
            state.question3= action.payload;
        },
        Question4(state, action){
            state.question4= action.payload;
        },
        Question5(state, action){
            state.question5= action.payload;
        },
        Family(state, action){
            state.family = action.payload;
        },
        Property(state, action){
            state.property = action.payload;
        },
        Text(state, action){
            state.text = action.payload;
        },
        Open(state, action){
            state.open = action.payload;
        },
        setUserName(state, action){
            state.name = action.payload;
        },
        setUserBirth(state, action){
            state.birth = action.payload;
        }
    }

})
export let { setUserName, setUserBirth, Question1, Question2, Question3, Question4, Question5, Family, Property, Text, Open} = will.actions

//시연을 위해 만든 유저리스트와 유언장 리스트
let users = createSlice({
    name: 'users',
    initialState:[
        {
            email: 'fallingstar@gmail.com',
            name: '김철구',
            password: 'dudnjs725@',
            phone:'01052394217',
            birth: '010725'
        },
    ],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        }
    }
})
export let {addUser} = users.actions


let will_list = createSlice({
    name: 'will_list',
    initialState:[
        {
            name: '김철구',
            birth: '010725-1234567',
            question1: '일반 3일장 장례식',
            question2: [
                {
                    name: ' ',
                    relationship: ' ',
                    phone: ' '
                },
            ],
            question3: '봉안묘',
            question4: false,
            question5: true,
            family: {
                child:'이여원, 이여원',
                parents:'이여원, 이여원',
                sibile:'이여원, 이여원',
                uncle:'이여원, 이여원',
                spouse:'이여원, 이여원'
            },
            property:{
                house: 1,
                bond:2,
                patent: 0,
                car: 0
            },
            text: '안녕',
            open: {
                opener:'이여원',
                contact: '010-1234-1234',
                relation: '아들'
            }
        },

    ],
    reducers:{
        addWill(state, action){
            state.push(action.payload);
        }
    }
})
export let {addWill} = will_list.actions

let record = createSlice({
    name: 'record',
    initialState: [
        {
            user_id: ' ',
            record_url: 'http://'
        },
    ],
    reducers:{
        addRecord(state, action){
            state.push(action.payload);
        }
    }
})
export let {addRecord} = record.actions

//리듀설 모아주기
const reducers = combineReducers({
    will : will.reducer,
    users: users.reducer,
    will_list: will_list.reducer,
    login_user: login_user.reducer,
    record: record.reducer,
});

//redux-persist
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer, 
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});
export default store;