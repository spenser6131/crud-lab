import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mstp = state => {
  return {
    restaurants: state.restaurants
  }
}

const mdtp = dispatch => {
  return {
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}

export default connect(mstp, mdtp)(RestaurantsContainer);
