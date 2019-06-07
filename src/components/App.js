import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component

class App extends React.Component {
  state = {
    currentSearch: '',
    search: false
  }

  updateSearch = (searchTerm) => {
    this.setState({
      currentSearch: searchTerm
    })
  }
  submitSearch = () => {
    this.setState({
      search: true
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <header>
          < NavBar color='black' title="Giphy Search" />
      </header>
      <main className="container">
        <div className="row">
          <div className="col-8 mt-4">
            {
              this.state.search ?
              <GifListContainer
                currentSearch={this.state.currentSearch} />
              :
              null
            }
          </div>

          <div className="col-4 mt-4">
            <GifSearch
              submitSearch={this.submitSearch}
              currentSearch={this.state.currentSearch}
              updateSearch={this.updateSearch} />
          </div>
        </div>
      </main>
    </div>
  )
  }
}

export default App
