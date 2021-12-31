import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, expense; 

beforeEach(() => {
    expense = expenses[0];
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
       expense={expense}
       editExpense={editExpense} 
       removeExpense={removeExpense}
       history={history} 
    />);
});

test('should render EditExpensePage correctly ', () => {
     expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense spies', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle removeExpense sipes', () => {
    wrapper.find('button').prop('onClick')();
    expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id});
});
