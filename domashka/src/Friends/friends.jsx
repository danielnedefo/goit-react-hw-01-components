import React from 'react'
import Proptypes from 'prop-types'
import styles from './friendsStyle.module.css'

const Friends = ({friends}) => {
  const friend = friends.map(({ avatar, name, isOnline, id }) => 
    <li key={id} className={styles.item}>
      
  <img className="avatar" src={avatar} alt={name} width="100px" />
      <p className={styles.name}>{name}
        <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
      </p>
</li>
  )
  return friend
}
Friends.propTypes = {
  avatar: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  name: Proptypes.string,
  isOnline:Proptypes.bool
}

export default Friends