import React from 'react'
import Proptypes from 'prop-types'
import styles from './user.module.css'
const Profile = ({name,tag,location,avatar,stats}) => (
 <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={styles.profileInfo}>
    <li className={styles.data}>
      <span className="label">Followers: </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={styles.data}>
      <span className="label">Views: </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={styles.data}>
      <span className="label">Likes: </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
)
Profile.propTypes = {
  name: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  tag: Proptypes.string,
  avatar: Proptypes.string,
  stats: Proptypes.shape({
    followers: Proptypes.number,
    views: Proptypes.number,
    likes:Proptypes.number
  })
}

export default Profile