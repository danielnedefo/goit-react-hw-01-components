import React from 'react'
import Proptypes from 'prop-types'
import styles from './transaction.module.css'
const Transactions = ({ transactions }) => {
  const bills = transactions.map(({ id, type, amount, currency }) =>
  <tr key={id}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  )
  return bills
}
Transactions.propTypes = {
  type: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  currency: Proptypes.number.isRequired,
  amount:Proptypes.number.isRequired
}

export default Transactions;