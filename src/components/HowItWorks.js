import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <div>
                <div style={Styles.image}></div>
                <div>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                    </p>
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
    }
}

export default HowItWorks;