import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Header extends Component {
    render() {
        return (
            <div style={Styles.navbar}>
                <Link to="/"><img style={Styles.logo} src={require("../assets/LienTreeBackground.jpg")} alt="Logo" /></Link>
                <ul style={Styles.navLinksContainer}>
                    <Link to="/" style={Styles.linkDecoration}><li style={Styles.navLink} key="key1">Home</li></Link>
                    <Link to="/about" style={Styles.linkDecoration}><li style={Styles.navLink} key="key2">About</li></Link>
                    <Link to="/howitworks" style={Styles.linkDecoration}><li style={Styles.navLink} key="key3">How It Works</li></Link>
                    <Link to="/signin" style={Styles.linkDecoration}><li style={Styles.navLink} key="key4">Sign In</li></Link>
                    <a href="/auth"><li style={Styles.navLink}>Login/Register</li></a>
                    <Link to="/profile" style={Styles.linkDecoration}><li style={Styles.navLink} key="key5">Profile</li></Link>
                </ul>
                
            </div>
        );
    }
}

var Styles = { 
    navbar : {
    width: '100%',
    height: '10vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '100'
    },
    
    logo: {
        width: '20vw',
        height: '10vh',
        margin: '5px 0 0 20px'
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
        color: 'black',
        cursor: 'pointer',
        fontDecoration: 'none',
        textDecoration: 'none',
        ':hover' : {
            color: 'blue',
        }
    },
    linkDecoration: {
        textDecoration: 'none'
    }

}

const StyledHeader = Radium(Header)


export default StyledHeader;