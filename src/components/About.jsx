import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/styles.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'jquery/src/jquery';



class About extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        var React = require('react');
        var FontAwesome = require('react-fontawesome');
        
        return ( <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
           
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesome name="fas fa-star" /></div>
                <div className="divider-custom-line"></div>
            </div>
           
            <div className="row">
                <div className="col-lg-4 ml-auto"><p className="lead">This application was develop with SpringBoot  and React.js</p></div>
                <div className="col-lg-4 mr-auto"><p className="lead">The quotation rates are updated every five minutes</p></div>
            </div>
           
        </div>
    </section>);
    }


}

export default About;
