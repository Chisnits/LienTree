import React, { Component } from 'react';
import Newsletter from './Newsletter';

class Footer extends Component {
    render() {
        return (
            <section>
                <main style={Styles.footerWrapper}>
                  <div className="follow-us">
                      <h2 className="footer-headline">Follow Us</h2>
                      <div className="media-container">
                          <i className="fa fa-facebook-square about-media" aria-hidden="true"></i>
                          <i className="fa fa-instagram about-media" aria-hidden="true"></i>
                          <i className="fa fa-twitter-square about-media" aria-hidden="true"></i>
                          <i className="fa fa-youtube-play about-media" aria-hidden="true"></i>
                      </div>
                  </div>
                  <div className="mailing-list">
                    <Newsletter />
                  </div>
                </main>
                <div className="copyright-wrapper">
                  <div>Copyright © | <span className="site-name">Trailify</span> | All Rights Reserved</div>
                </div>
            </section>
        );
    }
}

    var Styles = {
        footerWrapper: {
            width: '100%',
            backgroundColor: '#1D1D1D',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '3vh 0'
        }
    }

export default Footer;