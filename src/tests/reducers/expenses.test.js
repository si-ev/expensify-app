import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
 
test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const  expense = {
        id: 4, 
        description: 'Test',
        note: '',
        amount: '10900',
        createdAt: 0
    };
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toContainEqual(expense);
});

test('should edit an expense', () => {
    const description = 'Ham';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state.find((expense) => expense.id == action.id).description).toBe(description);
});

test('should not edit expenses if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '100',
        updates: {
            description: 'Non existing expense'
        }
    }; 
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});
