import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }
    componentDidMount(){
        axios.get('/me')
          .then(res => {
              console.log(res.data); this.setState({user: res.data[0]})
        })
          .catch(err => {
            console.log(err)
          })
        }
    
    render() {
        const nickname = this.state.user.nickname;
        const firstName = this.state.user.user_first_name;
        const lastName = this.state.user.user_last_name;
        return (
            <div>
                <div style={Styles.profileContainer}>
                    <div style={Styles.userData}>
                        <img style={Styles.image} src={this.state.user.photo}/>
                        <div>Welcome: { (firstName === null)  ?  nickname  : firstName}</div>
                        <div>{ (lastName === null)  ? "" : lastName}</div>
                        <div>Email: {this.state.user.email}</div>
                    </div>
                </div>
                <form style={Styles.formContainer} onSubmit={this.handleSubmit}>
                    <input id="input" type="" placeholder="" required/>
                    <input id="input" type="" placeholder="" required/>
                    <input id="input" type="" placeholder="" required/>
                    <input id="input" type="" placeholder="" required/>
                    <input id="submit" type="submit"/>
              </form>
            </div>
        );
    }
}
var Styles = {
    profileContainer: {
        height: '70vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        height: '250px',
        width: '250px',
        borderRadius: '50%'
    }
}

export default Profile;