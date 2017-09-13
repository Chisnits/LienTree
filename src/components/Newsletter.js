import React, {Component} from 'react';
import axios from 'axios';
import Radium from 'radium';

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    axios.post('/contactus', {email: this.state.email}).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });

  }
  render() {
    return (
      <div style={Styles.newsletterContainer}>
        <h2 style={Styles.title} >Newsletter</h2>
        <h3>Subscribe to our newsletter to stay up to date!</h3>
        <form style={Styles.formContainer} onSubmit={this.handleSubmit}>
          <input style={Styles.input} id="email-input" type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} required/>
          <input style={Styles.submit} id="email-submit" type="submit"/>
        </form>
      </div>
    );
  }
}
var Styles = {
  newsletterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: '0',
    padding: '0'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    height: '37px',
    width: '100%',
    fontSize: '15px',
    textAlign: 'left',
    paddingLeft: '1.25em',
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  submit: {
    width: '200px',
    height: '3vh',
    borderRadius: '10px',
    border: '1px solid black',
    marginTop: '10px',
    backgroundColor: 'white',
    ':hover': {
      backgroundColor: '#99ddff',
      opacity: '.7'
    }
  }
}
const StyledNewsletter = Radium(Newsletter)

export default StyledNewsletter;