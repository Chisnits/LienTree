import React, { Component } from 'react';
import Newsletter from './Newsletter';

class About extends Component {
    render() {
        return (
            <section>
                <div style={Styles.mainImage}></div>
                    <div style={Styles.paragraphWrapper}>
                        <div style={Styles.paragraphContainer}>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div>
                    </div>
                    <div style={Styles.subImageContainer}>
                        <img src={require("../assets/html-icon.png")} alt=""/>
                        <img src={require("../assets/html-icon.png")} alt=""/>
                        <img src={require("../assets/html-icon.png")} alt=""/>
                    </div>
                <main style={Styles.footerWrapper}>
                    <div style={Styles.followUs}>
                        <h2>Follow Us</h2>
                        <div>
                            <i className="fa fa-facebook-square" style={Styles.socialIcon} aria-hidden="true"></i>
                            <i className="fa fa-instagram" style={Styles.socialIcon} aria-hidden="true"></i>
                            <i className="fa fa-twitter-square" style={Styles.socialIcon} aria-hidden="true"></i>
                            <i className="fa fa-youtube-play" style={Styles.socialIcon} aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="mailing-list">
                        <Newsletter />
                    </div>
                </main>
                <div className="copyright-wrapper">
                    <div>Copyright © | <span className="site-name">Lien Tree</span> | All Rights Reserved</div>
                </div>
        </section>
    );
}
}
    var Styles = {
        mainImage: {
            height: '50vh',
            backgroundImage: `url(${require("../assets/aboutFiller.jpg")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        paragraphWrapper: {
            display:'flex',
            justifyContent: 'center'
        },
        paragraphContainer: {
            width: '100%',
            textAlign: 'left'
        },
        footerWrapper: {
            width: '100%',
            backgroundColor: '#1D1D1D',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '3vh 0'
        },
        subImageContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '5px'
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

export default About;