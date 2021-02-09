import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieDetail from '../moviedetail/MovieDetail';
import Logo from '../../assets/MyMovieShow.jpg';
import Movie from '../movie/Movie';
import Cast from '../cast/Cast';
import Crew from '../crew/Crew';

class Routes extends React.Component {


    onClickHome = () => {
        this.props.history.push('/')
    }


    render() {
        return (
            <div>

                <BrowserRouter>

                <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>                        
                </button> */}
                <img src={Logo}  style={{ "height": "60px"}} />
                {/* <a class="navbar-brand" href="#">Portfolio</a> */}
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                  {/* <li class="active"><a href="#">Home</a></li> */}
                  <li><a href="#">About</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  {/* <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                  <li class=""><Link to='/' >Home</Link></li>
                </ul>
              </div>
            </div>
          </nav>


                {/* old */}
                    {/* <div className="header"> */}
                        {/* <header class="w3-container w3-top w3-white  w3-padding-1">
                            <span class="w3-left w3-padding">
                                <img src={Logo} style={{ "height": "60px" }} />
                            </span> */}
                            {/* <div className="header header-right">
                                <Link to='/' className="active">Home</Link> */}
                                {/* <a href="#contact">Contact</a>
                            <a href="#about">About</a> */}
                            {/* </div>
                        </header>
                    </div> */}


                    <Switch>
                        <Route exact path='/' component={Movie} />
                        <Route exact path='/moviedetail' component={MovieDetail} />
                        <Route exact path='/cast' component={Cast} />
                        <Route exact path='/crew' component={Crew} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default Routes