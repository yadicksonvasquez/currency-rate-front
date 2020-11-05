import { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'jquery/src/jquery';

import logo from '../assets/img/43-512.png';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import SockJsClient from 'react-stomp';
import { connect } from "react-redux";
import { loadDolarRate } from "../js/actions/index";
import { loadEuroRate } from "../js/actions/index";
import { loadRealRate } from "../js/actions/index";

function mapStateToProps(state) {
  return {
    dolarQuotationMessage: state.dolarQuotationMessage,
    euroQuotationMessage: state.euroQuotationMessage,
    realQuotationMessage: state.realQuotationMessage
  };
};

function mapDispatchActionToProps(dispatch) {
  return {
    refreshDolarRate: (message) => dispatch(loadDolarRate(message)),
    refreshEuroRate: (message) => dispatch(loadEuroRate(message)),
    refreshRealRate: (message) => dispatch(loadRealRate(message))
  };
}


class Home extends Component {

  constructor(props) {
    super(props);
    this.handleDolarData = this.handleDolarData.bind(this);
    this.handleEuroData = this.handleEuroData.bind(this);
    this.handleRealData = this.handleRealData.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  handleDolarData(data) {
    console.log('WebSocket receive message|Message:' + JSON.stringify(data));
    let result = this.getMessage(data);
    this.props.refreshDolarRate(result);
  }

  handleEuroData(data) {
    console.log('WebSocket receive message|Message:' + JSON.stringify(data));
    let result = this.getMessage(data);
    this.props.refreshEuroRate(result);
  }

  handleRealData(data) {
    console.log('WebSocket receive message|Message:' + JSON.stringify(data));
    let result = this.getMessage(data);
    this.props.refreshRealRate(result);
  }

  getMessage(data) {
    return JSON.parse(JSON.stringify(data));
  }

  render() {

    let dolarQuotationPrice = 0;
    if (this.props.dolarQuotationMessage !== null && typeof this.props.dolarQuotationMessage !== "undefined") {
      dolarQuotationPrice = this.props.dolarQuotationMessage.precio;
    }

    let euroQuotationPrice = 0;
    if (this.props.euroQuotationMessage !== null && typeof this.props.euroQuotationMessage !== "undefined") {
      euroQuotationPrice = this.props.euroQuotationMessage.precio;
    }

    let realQuotationPrice = 0;
    if (this.props.realQuotationMessage !== null && typeof this.props.realQuotationMessage !== "undefined") {
      realQuotationPrice = this.props.realQuotationMessage.precio;
    }

    return (
      <div>
        <Header />
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">

            <img className="masthead-avatar mb-5" src={logo} />

            <h1 className="masthead-heading text-uppercase mb-0">Currency Rates</h1>
          </div>
        </header>
        <section className="page-section portfolio" id="quotation">
          <div className="container">

            <div className="card-deck mb-3 text-center">

              <div className="col-md-4 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header"><h3>Dolar Quotation</h3>
                  </div>
                  <div className="card-body">
                    {dolarQuotationPrice}
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header"><h3>Euro Quotation</h3>
                  </div>
                  <div className="card-body">
                    {euroQuotationPrice}
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header"><h3>Real Quotation</h3>
                  </div>
                  <div className="card-body">
                    {realQuotationPrice}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <About />

        <Footer />

        <SockJsClient url='http://localhost:8080/currencyquotation' topics={['/topic/dolar']}
          onMessage={this.handleDolarData}
          ref={(client) => { this.clientRef = client }}
          debug={true} />

        <SockJsClient url='http://localhost:8080/currencyquotation' topics={['/topic/euro']}
          onMessage={this.handleEuroData}
          ref={(client) => { this.clientRef = client }}
          debug={true} />

        <SockJsClient url='http://localhost:8080/currencyquotation' topics={['/topic/real']}
          onMessage={this.handleRealData}
          ref={(client) => { this.clientRef = client }}
          debug={true} />

      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchActionToProps)(Home);