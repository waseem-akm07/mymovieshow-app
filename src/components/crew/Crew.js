import React from 'react'


class Crew extends React.Component {



    render() {
        // alert(this.props.history)
        // console.log(JSON.stringify(this.props))
        return (
            <div>
                <div class="row">
                    <div class="column left" style={{ "background-color": "#aaa;" }}>
                        <img src={"https://image.tmdb.org/t/p/w185/" + this.props.history.location.state.profile_path}
                            alt="Loading..." style={{ "width": "100%", "min-height": "200px", "max-height": "300px" }} />
                    </div>

                    <div class="column right" style={{ "background-color": "#bbb" }}>
                        <h3> {this.props.history.location.state.name}</h3>                       
                        <b>Department:</b> {this.props.history.location.state.department}
                    </div>
                </div >

                <div className="w3-row-padding w3-center w3-padding-64 w3-theme-l1" id="work">
                    <h3>The Golden Age of Hollywood began</h3>
                    <p>The Golden Age of Hollywood began with the silent movie era (though some people say it started at the end of the silent movie age).
                     Dramatic films such as D.W. Griffith's The Birth of a Nation (1915) and comedies such as The Kid (1921) starring Charlie Chaplin were popular nationwide
                 </p>
                    <p>In the early 1900s, filmmakers began moving to the Los Angeles area to get away from the strict rules imposed by Thomas Edison's Motion Picture Patents Company in New Jersey. ...
                     Biograph made the first film in Hollywood, entitled In Old California</p>
                    <h3>Hollywood Style</h3>
                    <p>The Classical Hollywood Style or the Hollywood Style is the grand style of narrative storytelling wherein motion pictures are put together in a given set of procedures and rules. ...
                     It all started when business people and artists work together as storytellers and there comes films and movies – success of motion pictures.</p>
                </div>
            </div>
        );
    }
}
export default Crew