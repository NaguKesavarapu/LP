import ReactPlayer from 'react-player'
import './index.css'

const Contact = () => (
  <div className="video-player-container">
    <h1 className="video-title">Pravallika's Anthem</h1>
    <ReactPlayer
      url="https://vimeo.com/1043076540?share=copy" // Replace with your video URL
      controls
      width="70%"
      height="400px"
      margin="0"
      className="video-player"
    />
    <p className="description">
      Her smile lights up the world, effortlessly radiating warmth and kindness.
      She is a blend of elegance and strength, gracefully navigating life's
      journey with determination and love.
    </p>
  </div>
)

export default Contact
