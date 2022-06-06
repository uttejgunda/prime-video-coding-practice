import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionsMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  const renderActionMovies = () => (
    <div className="movies-section">
      <h1 className="sub-heading">Action Movies</h1>
      <MoviesSlider moviesList={actionsMovies} />
    </div>
  )

  const renderComedyMovies = () => (
    <div className="movies-section">
      <h1 className="sub-heading">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMovies} />
    </div>
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="content-container">
        {renderActionMovies()}
        {renderComedyMovies()}
      </div>
    </div>
  )
}

export default PrimeVideo
