var React = require('react')
import SearchBar from '../SearchComponents/SearchBar'
import '../../../css/Header.css'

var Header = React.createClass({
  render: function() {
    return(
    <div className="HeaderBar">
      <div>
        <img src='/smarter-bear-logo.png' alt="bear-logo" className="logo"/>
        <div className="logo-title">Smarter Bear</div>
      </div>

      <SearchBar />
      <div className="useractions">
        <ul>
          <li>Name</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>

    )
  }
})

export default Header
