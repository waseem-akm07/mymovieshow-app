import React from 'react';
import { BASE_URL, API_KEY, NOW_PLAYING } from '../../constants/Constant'

class Movie extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Movies: [],
      Page: 1,
      detail: []
    }
  }


  componentDidMount() {
    this.getMovies();
  }



  getMovies = () => {
    fetch(BASE_URL + NOW_PLAYING + '?api_key=' + API_KEY + "&page=" + this.state.Page)
      .then((obj) => obj.json())
      .then((data) => {
        let currentMovies = this.state.Movies;
        currentMovies = [...currentMovies, ...data.results]
        this.setState({ Movies: currentMovies })


      })
  }


  onImageClick = (item) => {
    // alert(JSON.stringify(item))
    // console.log(JSON.stringify(item))   
    this.props.history.push('/moviedetail', item)
  }



  showMovies = () => {
    if (this.state.Movies !== null) {
      let MovieGrid = [];
      this.state.Movies.map((item) => {
        let rows =
          <div class="col-sm-3">
            <img
              src={"http://image.tmdb.org/t/p/w185/" + item.poster_path} class="img-responsive" style={{ "width": "100%" }}
              onClick={() => this.onImageClick(item)} alt="Loading..."
            />
            <b>{item.title}</b><br />
            <b>Vote: </b>{item.vote_count} And ❤️ {item.vote_average}%<br />
            Language: {item.original_language}
          </div>
        MovieGrid.push(
          <div>
            {rows}
          </div>
        )
      })
      return MovieGrid
    }
  }

  onButtonClick = () => {
    this.setState({ ...this.state, Page: this.state.Page + 1 }, () => { this.getMovies() })
  }

  render() {
    // alert(JSON.stringify(this.state.Movies))
    return (
      <div>
        <div>

          <div class=" text-center" style={{"backgroundColor":"white"}}>
            <div class="row">
              {this.showMovies()}
            </div>
          </div><br />

          <footer class="container-fluid text-center">
            <input
              type='button' className="w3-bar-item w3-button w3-hover-black"
              onClick={() => { this.onButtonClick() }} value='Find More'
            />
          </footer>

        </div>
      </div>
    );
  }
}
export default Movie;

