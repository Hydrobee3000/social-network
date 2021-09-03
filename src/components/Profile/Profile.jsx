import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './Posts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer users={props.users} profile={props.profile} />
    </div>
  )
}
export default Profile
