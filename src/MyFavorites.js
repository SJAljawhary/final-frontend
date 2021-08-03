import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavorites extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favorites : [],
      index : 0,
      colorName : '',
      colorImage : ''
    }
  }

  componentDidMount = () => {

    // http://localhost:3002/allColorData?email
    axios.get(`${process.env.REACT_APP_SERVER}/getcolor?email=${this.props.auth0.user.email}`)
    .then(favData => {
      this.setState({
        favorites : favData.data
      })
    }).catch((error) => {
      console.log(error);
  })
  }


  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

