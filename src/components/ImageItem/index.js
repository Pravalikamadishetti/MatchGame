import './index.css'

const ImageItem = props => {
  const {imageDetails, clickImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    clickImage(imageUrl)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-btn" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default ImageItem
