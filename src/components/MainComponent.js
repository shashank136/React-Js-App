import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import DishDetailComponent from './SelectedDishComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes.js'

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({ selectedDish: dishId});
  }

  render(){
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetailComponent dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
