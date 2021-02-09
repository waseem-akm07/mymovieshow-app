import React from 'react';
import { BASE_URL, CAST_CREW, API_KEY, SIMILAR_MOVIE, MOVIE_TRAILER, TRAILER_LANGUAGE } from '../../constants/Constant';


class Detail extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Cast: [],
            Crew: [],
            Similar: [],
            Trailer: []
        }
    }


    componentDidMount() {
        this.getCastCrew();
        this.getSimilarMov();
        this.getTrailer();
        // alert(JSON.stringify(this.props.history.location.state.id))       
    }


    getCastCrew = () => {
        fetch(BASE_URL + CAST_CREW.replace('{movie_id}', this.props.history.location.state.id) + '?api_key=' + API_KEY)
            .then((obj) => obj.json())
            .then((data) => {
                //  alert(JSON.stringify(data))
                this.setState({ Cast: data.cast })
                this.setState({ Crew: data.crew })
            })
    }


    showCast = () => {
        if (this.state.Cast !== null) {
            let cast = [];
            this.state.Cast.map((item) => {
                let castRow =
                    <div class="w3-quarter">
                        <img src={"http://image.tmdb.org/t/p/w185/" + item.profile_path}
                            alt="Loading..." style={{ "width": 50 }}
                            class="w3-circle w3-hover-opacity" onClick={() => this.onCastClick(item)}
                        /><br />
                        Character: <label>{item.character}</label>
                    </div>

                cast.push(
                    <div>
                        {castRow}
                    </div>
                )
            })
            return cast
        }
    }


    showCrew = () => {
        if (this.state.Crew !== null) {
            let crew = [];
            this.state.Crew.map((item) => {
                let crewRow =
                    <div class="w3-quarter">
                        <img src={"https://image.tmdb.org/t/p/w185/" + item.profile_path}
                            alt="Loading..." style={{ "width": 50 }}
                            class="w3-circle w3-hover-opacity"
                            onClick={() => this.onCrewClick(item)}
                        /><br />
                        Name: <label>{item.name}</label>
                    </div>

                crew.push(
                    <div>
                        {crewRow}
                    </div>
                )
            })
            return crew
        }
    }


    getTrailer = () => {
        // alert((BASE_URL+MOVIE_TRAILER.replace('{movie_id}',this.props.history.location.state.id)+'?ap_key='+API_KEY+TRAILER_LANGUAGE))
        fetch(BASE_URL + MOVIE_TRAILER.replace('{movie_id}', this.props.history.location.state.id) + '?api_key=' + API_KEY + TRAILER_LANGUAGE)
            .then((obj) => obj.json())
            .then((data) => {
                this.setState({ Trailer: data.results })
            })
    }


    showTrailer = () => {
        if (this.state.Trailer !== null) {
            let movTrailer = [];
            this.state.Trailer.map((item) => {
                let row =
                    <div>
                        <iframe width="170px" height="170px" src={"https://www.youtube.com/embed/" + item.key[0]} frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        {/* {item.key} */}
                    </div>
                movTrailer.push(
                    <div>
                        {row}
                    </div>
                )
            })
            return movTrailer
        }
    }



    getSimilarMov = () => {
        // alert(BASE_URL + SIMILAR_MOVIE.replace('{movie_id}', this.props.history.location.state.id) + '?api-key=' + API_KEY)
        fetch(BASE_URL + SIMILAR_MOVIE.replace('{movie_id}', this.props.history.location.state.id) + '?api_key=' + API_KEY)
            .then((obj) => obj.json())
            .then((data) => {
                this.setState({ Similar: data.results })
                //alert(JSON.stringify(data.results))
            })
    }



    showSimilar = () => {
        if (this.state.Similar !== null) {
            let mov = [];
            this.state.Similar.map((item) => {
                let row =
                    <div class="w3-third w3-margin-bottom">
                        <img src={"http://image.tmdb.org/t/p/w185/" + item.poster_path}
                            alt="Loading..." onClick={this.onImageClick}
                            class=" w3-hover-opacity"
                        /><br />
                        <label>{item.title}</label>
                    </div>
                mov.push(
                    <div>
                        {row}
                    </div>
                )
            })
            return mov
        }
    }



    onImageClick = () => {
        alert('Sorry!!! Page is Not Ready')
    }


    onCastClick = (item) => {
        alert(JSON.stringify(item))
        // console.log(JSON.stringify(item))
        this.props.history.push('/cast', item.credit_id)
    }


    onCrewClick = (item) => {
        //console.log(JSON.stringify(item))
        this.props.history.push('/crew', item)
    }


    render() {
        //  alert(JSON.stringify(this.state.Similar))      
        return (
            <div style={{"backgroundColor":"white"}}>


                <div class="container-fluid text-center">
                    <div class="row content" >
                        <div class="col-sm-2 sidenav" style={{"backgroundColor":"lightgray", "marginTop": "10px" }}>
                            <img src={"http://image.tmdb.org/t/p/w185/" + this.props.history.location.state.poster_path}
                                alt="Loading..." style={{ "width": "100%", "min-height": "200px", "max-height": "300px" }}
                            />
                           
                        </div>
                        <div class="col-sm-8 text-left" style={{ "backgroundColor": "", "marginTop": "10px" }} >

                            <div class="col-sm-14 text-left" style={{ "backgroundColor": "", "marginTop": "20px" }}>
                                <br />
                                <h2>{this.props.history.location.state.title}</h2>
                                ❤️ {this.props.history.location.state.vote_average}%<br />
                                <b>Vote:</b> {this.props.history.location.state.vote_count}<br />
                                <b>Popularity:</b> {this.props.history.location.state.popularity}<br />
                                <b>Language:</b> {this.props.history.location.state.original_language}<br />
                                <b>Release Date:</b> <b >{this.props.history.location.state.release_date}</b><br />
                            </div><br />
                           
                            <h2>OUR TEAM</h2>
                            <h3>Meet The Cast Team </h3>

                            <div  ><br />
                                {this.showCast()}

                                <div>
                                    <h2>Meet The Crew Team</h2>
                                    {this.showCrew()}
                                </div>

                            </div>
                            <div >
                                <h2><b>Similar Movies</b></h2>
                                {this.showSimilar()}
                            </div>                           
                        </div>
                        <div class="col-sm-2 sidenav" >
                            <div class="well" style={{"backgroundColor":"lightgray", "marginTop": "10px" }}>
                                <b>Trailer</b>
                                {this.showTrailer()}    
                        </div>
                    </div>
                    </div>
            </div>








                {/* Image Header  */}
                {/* <div class="row">
                    <div class="column" style={{ "background-color": "#aaa" }}>
                        <img src={"http://image.tmdb.org/t/p/w185/" + this.props.history.location.state.poster_path}
                            alt="Loading..." style={{ "width": "100%", "min-height": "200px", "max-height": "300px" }}
                        />
                    </div>

                    <div class="column" style={{ "background-color": "#bbb" }}>
                        <h2>{this.props.history.location.state.title}</h2>
                        ❤️ {this.props.history.location.state.vote_average}%<br />
                        <b>Vote:</b> {this.props.history.location.state.vote_count}<br />
                        <b>Popularity:</b> {this.props.history.location.state.popularity}<br />
                        <b>Language:</b> {this.props.history.location.state.original_language}<br />
                        <b>Release Date:</b> <b>{this.props.history.location.state.release_date}</b>
                    </div>

                    <div class="column" style={{ "background-color": "#ccc" }}>
                    {this.showTrailer()}
                    </div>
                </div> */}

                {/* <div class="row">
                    <div class="column left" style={{ "background-color": "#aaa;" }}>
                        <img src={"http://image.tmdb.org/t/p/w185/" + this.props.history.location.state.poster_path}
                            alt="Loading..." style={{ "width": "100%", "min-height": "200px", "max-height": "300px" }} />
                    </div>
                    <div class="column right" style={{ "background-color": "#bbb" }}>
                        <br /><br />
                        <h2>{this.props.history.location.state.title}</h2>
                        ❤️ {this.props.history.location.state.vote_average}%<br />
                        <b>Vote:</b> {this.props.history.location.state.vote_count}<br />
                        <b>Popularity:</b> {this.props.history.location.state.popularity}<br />
                        <b>Language:</b> {this.props.history.location.state.original_language}<br />
                        <b>Release Date:</b> <b>{this.props.history.location.state.release_date}</b>
                        {this.showTrailer()}                       
                    </div>
                </div> */}


                {/* Team Container */}
                {/* <div class="w3-container w3-padding-64 w3-center" id="team">
                    <h2>OUR TEAM</h2>
                    <h3>Meet The Cast Team </h3>

                    <div class="w3-row"><br />
                        {this.showCast()}

                        <div class="w3-row">
                            <h2>Meet The Crew Team</h2>
                            {this.showCrew()}
                        </div>

                    </div>
                </div> */}


                {/* Work Row  */}
                {/* <div className="w3-row-padding w3-center w3-padding-64 w3-theme-l1" id="work">
                    <h2>OverView</h2>
                    <p>
                        {this.props.history.location.state.overview}
                    </p>
                </div> */}


                {/* Similar Moveis */}
                {/* <div class="w3-row-padding w3-center w3-padding-64" id="pricing">
                    <h2><b>Similar Movies</b></h2>
                    {this.showSimilar()}
                </div> */}
            </div>
        );
    }
}
export default Detail