import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props

    const searchResults = destinationList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="head">Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            onChange={this.onChangeUserInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <div>
          <ul className="items-container">
            {searchResults.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
