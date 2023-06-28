import css from './TransactionHistory.module.css'
import PropTypes  from 'prop-types'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
        {items.map((transaction) => (
            <tr key={transaction.id}>
            <td className={css.type}>{transaction.type}</td>
            <td className={css.amount}>{transaction.amount}</td>
            <td className={css.currency}>{transaction.currency}</td>
            </tr>
        ))}
        </tbody>
        </table>
    )
}

TransactionHistory.propType = {
    items:PropTypes.array.isRequired
}
