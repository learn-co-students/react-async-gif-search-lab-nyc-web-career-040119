import React from "react"

export default class GifSearch extends React.Component {
  handleChange = (event) => {
    this.props.updateSearch(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitSearch()
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            onChange={this.handleChange}
            type="text"
            placeholder="Search and press 'Enter' for gifs!"
            value={this.props.currentSearch} />
        </form>
      </div>
    )
  }
}
