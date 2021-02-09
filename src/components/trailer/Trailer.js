import React from 'react'
import { BASE_URL, MOVIE_TRAILER, API_KEY } from '../../constants/Constant'
import Movie from '../movie/Movie'


class Trailer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Trailer: []
        }
    }

    componentDidMount() {
        this.gettrailer()
    }

    gettrailer = () => {
        alert(BASE_URL + MOVIE_TRAILER.replace('{movie_id}', this.props.history.location.state.id) + '?api_key=' + API_KEY)
        fetch(BASE_URL + MOVIE_TRAILER.replace('{movie_id}', this.props.history.location.state.id) + '?api_key=' + API_KEY)
            .then((obj) => obj.json())
            .then((data) => {
                this.setState({ Teaser: data.results })
alert(data.results)
            })
    }

    showtrailer = () => {
        if (this.state.Teaser !== null) {
            let trailerGrid = [];
            this.state.Trailer.map((item) => {
                let row =
                    <div>
                        {item.id}
                    </div>
                trailerGrid.push(
                    { row }
                )
            })
            return trailerGrid
        }
    }

    render() {
        return (
            <div>
                {/* {this.showtrailer()} */}
            </div>
        )
    }
}
export default Trailer