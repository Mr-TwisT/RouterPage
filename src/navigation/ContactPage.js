import React, { Component } from 'react';
import './ContactPage.css';

class ContactPage extends Component{
  state = {
    text: ""
  }

  handleChangeText = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      text: ""
    });
  }

  render(){
    return(
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h2>Napisz do nas!</h2>
          <textarea value={this.state.text} placeholder="Wpisz wiadomość..." onChange={this.handleChangeText}></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    )
  }
}

export default ContactPage;