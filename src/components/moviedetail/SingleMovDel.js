import React from 'react';
import { BASE_URL, SINGLEMOV_DEL, API_KEY } from '../../constants/Constant';



class SingleMoveDel extends React.Component{


    constructor(props){
        super(props);
        this.state={
            movDetail:[]
        }
    }

    componentDidMount(){
        this.getMovDel()
    }
    
    getMovDel=()=>{
        fetch(BASE_URL+SINGLEMOV_DEL.replace('{movie_id}',id)+'?api_key'+API_KEY)
        .then((obj)=>obj.json())
        .then((data)=>{
            this.setState({movDetail:data})
        })
    }

    showMovDel=()=>{
        if(this.state.movDetail!==null){
            let detail=[];
            this.state.movDetail.map((item)=>{
                detail.push(

                )
            })
            return detail
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default SingleMoveDel