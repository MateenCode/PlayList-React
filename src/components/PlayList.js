import React, { Component } from 'react';
import '../styles/App.css'
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {

    constructor(props){
      super(props)

    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
      handleFormUpdate(e){
        e.preventDefault();
        this.props.handleFormUpdate();
      }

  render(){
    return (
      <div>



      </div>

    )
  }
}
