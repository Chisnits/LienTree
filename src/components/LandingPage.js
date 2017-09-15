import React, { Component } from 'react';
import Radium from 'radium';

class LandingPage extends Component {
    render() {
        return (
            <div style={Styles.homeWrapper}>
          <section>
            <div style={Styles.homeImage}>
              <div style={Styles.textBox}>
                <h1>Lien Tree</h1>
                <p>Lien Tree is an auction based marketplace that
                  connects medical providers of account receivables
                  to a broad network of third party medical finance
                  companies.
                </p>
              </div>
              <button style={Styles.signUp}> Sign Up</button>
            </div>
          </section>
          <section style={Styles.bottomHalf}>
            <div style={Styles.column} key={1}>
              <div style={Styles.titleContainer}>
                <img style={Styles.icon} src={require("../assets/LienTreeIcon.png")} alt="icon"/>
                <p style={Styles.title}>Accounts Receivable Management Services</p>
              </div>
                  <p style={Styles.paragraph}>
                    We create a comprehensive recovery strategy across the lifeline of
                    the account receivables, from implementation through management of
                    the entire process. This ensures timely and maximization of your A/R.
                  </p>
            </div>      
            <div style={Styles.column} key={2}>
              <div style={Styles.titleContainer}>
                <img style={Styles.icon} src={require("../assets/LienTreeIcon.png")} alt="icon"/>
                <p style={Styles.title}>Portfolio Price <br/>
                analysis/evaluation for AR sale</p>
              </div>
                  <p style={Styles.paragraph}>
                    Wtih our personal injury knowledge and case
                    analytics, we can provide an acute underwriting
                    of your portfolio to ensure you get top dollar for your
                    account receivables.
                  </p>
            </div>      
            <div style={Styles.column} key={3}>
              <div style={Styles.titleContainer}>
                <img style={Styles.icon} src={require("../assets/LienTreeIcon.png")} alt="icon"/>
                <p style={Styles.title}>Account Liquidation</p>
              </div>
                  <p style={Styles.paragraph}>
                    Lien Tree will generate immediate cash flow through
                    the sale of account receivables with our auction based
                    platform finding the best buyers for your account receivables.

                  </p>
            </div>      
          </section>
        </div>
    );
  }
}
  var Styles = {
    homeWrapper: {
      // height: '70vh'
    },
    homeImage: {
      height: '65vh',
      width: '100%',
      backgroundImage: `url(${require("../assets/homeFiller.jpg")})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textBox: {
      width: '15vw',
      marginLeft: '10vw',
      maxWidth:'50%',
      minWidth:'300px',
      maxHeight:'500px',
      minHeight:'21%',
    },
    signUp: {
      width: '130px',
      marginLeft: '12vw'
    },
    bottomHalf: {
      marginTop: '30px',
      height: '25vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '30px'
    },
    icon: {
      height: '50px',
      width: '50px',
    },
    column: {
      height: '21vh',
      border: '2px solid black',
      borderRadius: '25px',
      padding: '20px',
      boxShadow: '10px 10px 10px #888888',
      ':hover' : {
        backgroundColor: '#99ddff',
    }
    },
    titleContainer: {
      width: '15vw',
      height: '7vh',
      maxWidth:'50%',
      minWidth:'300px',
      maxHeight:'500px',
      minHeight:'21%',
      display: 'flex'
    },
    title : {
      marginLeft: '10px'
    },
    paragraph: {
      width: '15vw',
      maxWidth:'50%',
      minWidth:'300px',
      maxHeight:'500px',
      minHeight:'21%',
    },
  }

  const StyledLandingPage = Radium(LandingPage)

export default StyledLandingPage;