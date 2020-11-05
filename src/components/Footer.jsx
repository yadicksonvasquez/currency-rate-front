import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';



class Footer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Valencia
                            <br />
                            Venezuela
                        </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © Currency Rate On Line 2020</small></div>
            </div>
            <div className="scroll-to-top d-lg-none position-fixed">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
            </div>
        </div>);
    }


}

export default Footer;
