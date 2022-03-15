import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ProfileHeader = () => {
  return (
    <>
      <img src={require('../assets/profile-photo.jpeg')} alt="Profile" />
      <h1>Luke Breezee</h1>
      <div className="links">
        <a
          href="https://github.com/lukebreezee"
          className="logo-wrap"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/luke-breezee-274632228"
          target="_blank"
          className="logo-wrap"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="logo" />
        </a>
      </div>
    </>
  )
}

export default ProfileHeader
