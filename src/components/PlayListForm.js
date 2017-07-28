import React, {Component} from 'react';
import PlayList from './PlayList';

export default class PlayListForm extends Component {
  constructor(props){
    super(props)
     this.state = {
       songs: [],
       userName: '',
       songArtist: '',
       songTitle:'',
       songNotes: ''
     }

this.handleUserName = this.handleUserName.bind(this)
this.handleArtistChange = this.handleArtistChange.bind(this)
this.handleTitleChange = this.handleTitleChange.bind(this)
this.handleNotesChange = this.handleNotesChange.bind(this)
this.addToList = this.addToList.bind(this)

}



handleUserName(event){
  this.setState({
    userName : event.target.value,
  })
}


handleArtistChange(event){
  this.setState({
    songArtist : event.target.value,
  })
}

handleTitleChange(event){
  songTitle: event.target.value
}

handleNotesChange(event){
  songNotes: event.target.value
}



  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

  render() {


    return (

        <div className="form">
          <form>
            <input type='text' name='userName' placeholder ='User Name'/>
            <input type='text' name='songArtist' placeholder ='Song Artist'/>
            <input type='text' name='songTitle' placeholder ='Song Title'/>
            <input type='text' name='songNotes' placeholder ='Song Notes'/>
          </form>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <PlayList handleUpdate={this.fetchData} songs={this.state.songs} />
          </div>


      )
    }
  }
