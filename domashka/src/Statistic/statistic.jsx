import React from 'react'
import Proptypes from 'prop-types'
import styles from './statistic.module.css'
const Statistic = ({arrayInfo}) => {
  const info = arrayInfo.map(({ label, percentage, id }) => 
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}  </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>)
 return info
}
Statistic.propTypes = {
  percentage: Proptypes.number,
  id: Proptypes.string.isRequired,
  label:Proptypes.string
}
export default Statistic;