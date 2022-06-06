import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {details} = props
  console.log(details)
  return (
    <div>
      <Popup
        modal
        className="popup-content"
        trigger={
          <img
            src={details.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail"
          />
        }
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-container">
              <ReactPlayer url={details.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
