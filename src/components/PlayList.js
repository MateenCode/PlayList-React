import React, { Component } from 'react';
import '../styles/App.css'
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  render(){

    constructor(props){
       super(props)

       this.state = {
         songs: []
       }
       this.fetchData = this.fetchData.bind(this)
}

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }



    return (
      <div className="PlayList">




      </div>

    )
  }
}
