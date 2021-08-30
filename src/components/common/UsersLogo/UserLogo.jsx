import userPhoto from '../../../assets/images/user.png'
import s from './UserLogo.module.css'

const UserLogo = (props) => {
  return (
    <div>
      <img className={s.userLogo} src={userPhoto} alt='users logo' />
    </div>
  )
}

export default UserLogo