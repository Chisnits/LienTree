import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Header extends Component {
    render() {
        return (
            <div style={Styles.navbar}>
                <img style={Styles.logo} src="../assets/css-icon.png" alt=""></img>
                <ul style={Styles.navLinksContainer}>
                  <Link to="/"><li style={Styles.navLink}>Home</li></Link>
                  <Link to="/about"><li style={Styles.navLink}>About</li></Link>
                  <Link to=""><li style={Styles.navLink}>How It Works</li></Link>
                  <a href=""><li style={Styles.navLink}>Sign In</li></a>
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
    ':hover' : {
        color: 'black'
    }
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
    }

}

const MyStyledComponent = Radium(Header)


export default MyStyledComponent;