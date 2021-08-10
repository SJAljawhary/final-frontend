import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import UpdateModal from './components/UpdateModal';
import FavoriteColors from './components/FavoriteColors'

class MyFavorites extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favorites : [],
      index : 0,
      showModal: false,
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

  ShowUpdateColor = (index) => {

    this.setState({
      index: index,
      showModal: true,
      

        ColorName: this.state.favorites[index].title,
        ColorImage: this.state.favorites[index].imageUrl,
        


    })

  }

  updateColor = (event) => {

    event.preventDefault();

    const updatedData = {
      email: this.props.auth0.user.email,
      title: event.target.ColorName.value,
      imageUrl: event.target.ColorImage.value,
   
  }
    axios.put(`${process.env.REACT_APP_SERVER}/putcolor/${this.state.index}`, updatedData)
    .then(favData => {
      this.setState({
        favorites: favData.data
      })
    }).catch((error) => {
      console.log(error);
    })

  }

  closeModal = ()=>{
    this.setState({
      showModal : false
    })
  }

  deleteColor = (idx) => {

    axios.delete(`${process.env.REACT_APP_SERVER}/deletecolor/${idx}?email=${this.props.auth0.user.email}`)
    .then(favData => {
      this.setState({
        favorites: favData.data
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
        <div>
                   <FavoriteColors fav={this.state.favorites} update={this.ShowUpdateColor} delete={this.deleteColor} />

                   <UpdateModal closeModal={this.closeModal}  showModal={this.state.showModal} update={this.updateColor} title={this.state.ColorName} imageUrl={this.state.ColorImage} />
            </div>

      </>
    )
  }
}

export default withAuth0(MyFavorites);

