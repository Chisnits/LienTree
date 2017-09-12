import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Header extends Component {
    render() {
        return (
            <div style={Styles.navbar}>
                <img style={Styles.logo} src={require("../assets/html-icon.png")} alt="Logo" />
                <ul style={Styles.navLinksContainer}>
                  <Link to="/" style={Styles.linkDecoration}><li style={Styles.navLink} key="key1">Home</li></Link>
                  <Link to="/about" style={Styles.linkDecoration}><li style={Styles.navLink} key="key2">About</li></Link>
                  <Link to="/howitworks" style={Styles.linkDecoration}><li style={Styles.navLink} key="key3">How It Works</li></Link>
                  <Link to="/signin" style={Styles.linkDecoration}><li style={Styles.navLink} key="key4">Sign In</li></Link>
                </ul>
                
            </div>
        );
    }
}

var Styles = { 
    navbar : {
    width: '100%',
    height: '10vh',
    backgroundColor: 'black',
    opacity: .5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '100'
    },
    
    logo: {
        width: '150px',
        height: '10vh'
    },
    navLinksContainer: {
        width: '55vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        listStyleType: 'none'
    },
    navLink: {
        //edit font here
        color: 'white',
        cursor: 'pointer',
        fontDecoration: 'none',
        ':hover' : {
            color: 'blue',
        }
    },
    linkDecoration: {
        textDecoration: 'none'
    }

}

const MyStyledComponent = Radium(Header)


export default MyStyledComponent;