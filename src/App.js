import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div style={Styles.homeWrapper}>
        <section>
          <div style={Styles.homeImage}>
            <div style={Styles.textBox}>
              <p>Lien Tree is an auction based marketplace that
                connects medical providers of account receivables
                to a broad network of third party medical finance
                companies.
              </p>
            </div>
            <button style={Styles.signUp}> Sign Up</button>
          </div>
        </section>
      </div>
    );
  }
}
  var Styles = {
    homeWrapper: {
      height: '70vh'
    },
    homeImage: {
      height: '70vh',
      width: '100%',
      backgroundImage: `url(${require("./assets/homeFiller.jpg")})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textBox: {
      width: '15vw',
      marginLeft: '5px',
      maxWidth:'50%',
      minWidth:'300px',
      maxHeight:'500px',
      minHeight:'21%',
    },
    signUp: {
      width: '130px',
      marginLeft: '5px'
    }
  }
export default App;