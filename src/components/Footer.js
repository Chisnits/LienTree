import React, { Component } from 'react';		
import Newsletter from './Newsletter';		
		
class Footer extends Component {		
    render() {		
        return (		
            <section>		
                <main style={Styles.footerWrapper}>		
                  <div>		
                      <h2 style={Styles.followUs}>Follow Us</h2>		
                      <div>		
                          <i style={Styles.socialIcon} className="fa fa-facebook-square about-media" aria-hidden="true"></i>		
                          <i style={Styles.socialIcon} className="fa fa-instagram about-media" aria-hidden="true"></i>		
                          <i style={Styles.socialIcon} className="fa fa-twitter-square about-media" aria-hidden="true"></i>		
                          <i style={Styles.socialIcon} className="fa fa-youtube-play about-media" aria-hidden="true"></i>		
                      </div>		
                  </div>		
                  <div>		
                    <Newsletter />		
                  </div>		
                  <div>
                      <h2>Contact Us</h2>
                        <div>
                          <div>Lein Tree Email</div>
                        </div>
                  </div>
                </main>
                		
		
            </section>		
        );		
    }		
}		
		
    var Styles = {		
        footerWrapper: {		
            width: '100%',		
            backgroundColor: 'white',		
            display: 'flex',		
            justifyContent: 'space-evenly',		
            padding: '3vh 0',
            border: '2px solid black',
            borderRadius: '20px'		
        },
        followUs: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        socialIcon: {
            fontSize: '3em',
            margin: '0 5px'
        }
    }		
		
export default Footer; 