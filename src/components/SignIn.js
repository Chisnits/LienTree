import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(event) {
        this.setState({email: event.target.value})
      }
    handlePassword(event) {
        this.setState({password: event.target.value})
      }
    handleSubmit(event) {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            <div style={Styles.signInWrapper}>
                <form style={Styles.formContainer} onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} required/>
                    </label>    
                    <label>
                        Password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handlePassword} required/>
                    </label>
                    <input id="email-submit" type="submit"/>
                </form>
            </div>
        );
    }
}

var Styles = {
    signInWrapper: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        border: '2px solid black',
        padding: '20px',
        borderRadius: '20px'
    }
}

export default SignIn;