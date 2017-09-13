import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <div>
                <div style={Styles.image}></div>
                <div style={Styles.titleContainer}>
                    <p>How It Works</p>
                </div>
                <div style={Styles.paragraphWrapper}>
                    <div style={Styles.paragraphContainer}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
        );
    }
}
var Styles = {
    image: {
        height: '50vh',
        backgroundImage: `url(${require("../assets/howItWorksFiller.jpg")})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    titleContainer: {
        width: '15vw',
        maxWidth:'50%',
        minWidth:'300px',
        maxHeight:'500px',
        minHeight:'21%',
        border: '2px solid black',
        borderRadius: '25px',
        boxShadow: '10px 10px 10px #888888',
        padding: '20px',
        margin: '15px 0 0 15px',
        textAlign: 'center'
    },
    paragraphWrapper: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    paragraphContainer: {
        width: '75%',
        textAlign: 'left',
        border: '2px solid black',
        borderRadius: '25px',
        boxShadow: '10px 10px 10px #888888',
        padding: '20px',
        marginTop: '20px',
    }
}

export default HowItWorks;