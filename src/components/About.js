import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section>
                <div style={Styles.mainImage}></div>
                    <div style={Styles.paragraphWrapper}>
                        <div style={Styles.paragraphContainer}>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
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
                        <img src={require("../assets/html-icon.png")} alt="" style={Styles.icon}/>
                        <img src={require("../assets/html-icon.png")} alt="" style={Styles.icon}/>
                        <img src={require("../assets/html-icon.png")} alt="" style={Styles.icon}/>
                    </div>
        </section>
    );
}
}
    var Styles = {
        mainImage: {
            height: '45vh',
            backgroundImage: `url(${require("../assets/aboutFiller.jpg")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        paragraphWrapper: {
            display:'flex',
            justifyContent: 'center',
            margin: '20px'
        },
        paragraphContainer: {
            width: '100%',
            textAlign: 'left',
            border: '2px solid black',
            borderRadius: '25px',
            boxShadow: '10px 10px 10px #888888',
            padding: '20px'
        },
        subImageContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '5px'
        },
        icon: {
            height: '10vh',
            width: '10vw'
        }
    }

export default About;