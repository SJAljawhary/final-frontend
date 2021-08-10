import React, { Component } from 'react';
import axios from 'axios';
import { CardColors } from './components/CardColors';
import { withAuth0 } from '@auth0/auth0-react';


class AllDataAPI extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors : [],
           
        }
    }


    componentDidMount = () => {

        // http://localhost:3002/allColorData

        axios.get(`${process.env.REACT_APP_SERVER}/allColorData`)
        .then(colorData => {
            this.setState({
                colors : colorData.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    addToFavourites = (idx) => {

        const colorInfo = {

            email : this.props.auth0.user.email,
            title : this.state.colors[idx].title,
            imageUrl : this.state.colors[idx].imageUrl,
        }

        axios.post(`${process.env.REACT_APP_SERVER}/postcolor` ,colorInfo ).catch((error) => {
            console.log(error);
        })

    }



    render() {
        return (
            <>
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
            </div>
            <div>
                   <CardColors colors={this.state.colors} addToFav={this.addToFavourites}/>
             
            </div>
            </>
        )
    }
}

export default withAuth0(AllDataAPI);
