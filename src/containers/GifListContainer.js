import React from 'react'
import GifList from '../components/GifList'
import { API_KEY } from '../apiKey'

export default class GifListContainer extends React.Component {
  apiSearch = (searchTerm) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&offset=0&rating=G&lang=en`

  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(this.apiSearch(this.props.currentSearch))
      .then(response => response.json())
      .then(gifs => {
        this.setState({
          gifs: [...gifs.data]
        })
      })
  }

  render() {
    const searchGifs = this.state.gifs.map(gif => {
      return (
        <GifList
          key={gif.id}
          id={gif.id}
          gif={gif.images.original.url} />)
    })
    return (
      <div>
        <ul>
          {searchGifs}
        </ul>
      </div>
    )
  }
}
