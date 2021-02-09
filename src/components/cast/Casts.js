import React from 'react'
import { BASE_URL, API_KEY, CREDIT_URL } from '../../constants/Constant';

class Cast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Cast: [],
            id: this.props.history.location.state
        }
    }

    componentDidMount() {
        this.getCast();

    }

    getCast = () => {
        // alert(BASE_URL + CREDIT_URL + this.state.id + '?api-key=' + API_KEY)
        fetch(BASE_URL + CREDIT_URL + this.state.id + '?api-key=' + API_KEY)
            .then((res) => res.json)
            .then((data) => {
                this.setState({ Cast: data.media})
            })
    }

    showCast = () => {
        if (this.state.Cast !== null) {
            let castGrid = []
            this.state.Cast.map((item) => {
              
                let row = <div>
                    {item.title}

                </div>

                castGrid.push(
                    <div>
                        {row}
                    </div>
                )
            })
            return castGrid
        }
    }

    onbuttonclick=(item)=>{
//alert(JSON.stringify(item))
    }
    render() {
      //  alert(this.state.id)
        console.log(JSON.stringify(this.state.Cast))
        return (
            <div>                
                <br/><br/><br/><h1>hy</h1>
                <input type="submit" value="submit" onClick={()=>this.onbuttonclick()}></input>
                {this.showCast()}
            </div>
        );
    }
}
export default Cast