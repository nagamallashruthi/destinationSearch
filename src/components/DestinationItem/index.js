// Write your code here
import './index.css'

const DestinationItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {destinationDetails} = props

  const {imageUrl, name} = destinationDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="img" />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
