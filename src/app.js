import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

// store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 0 }));
// store.dispatch(addExpense({ description: 'Coffee', amount: 1050, createdAt: 10000 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 1100, createdAt: 8000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));