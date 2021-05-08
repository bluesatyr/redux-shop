import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
// import { createStore } from 'redux';
// import rootReducer from './reducers';

const StoreContext = createContext();  // const store = createStore(rootReducer);
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext }; // export default store;

// const initialState = { 
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: '',
// }

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic

// const store = Redux.createStore(useProductReducer)

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data

// function render() {
//   const state = store.getState()
//   valueEl.innerHTML = state.value.toString()
// }

// Update the UI with the initial data

// render()

// And subscribe to redraw whenever the data changes in the future

// store.subscribe(render)

/*
import { configureStore } from '@reduxjs/toolkit'   <==== import this statement

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

*/