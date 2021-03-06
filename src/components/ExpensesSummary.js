import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total.js';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => { 
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExepnsesTotal = numeral(expensesTotal/100).format('$0,00.00');
    return (
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling {formattedExepnsesTotal}  </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
