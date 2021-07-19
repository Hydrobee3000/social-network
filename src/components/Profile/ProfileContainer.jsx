import Profile from './Profile'
import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    fetch(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => response.json())
      .then((json) => {
        this.props.setUserProfile(json)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
)