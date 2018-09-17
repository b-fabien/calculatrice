import React, { Component } from "react";
import "../../css/App.css";

import Hearder from "../header";
import Footer from "../footer";
import Calculator from "../calculator";
import ShowResult from "../showResult";
import Screen from "../screen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeResultat: [],
      result: []
    };

    this.showResultat = this.showResultat.bind(this);
    this.addResultat = this.addResultat.bind(this);
  }

  showResultat(resultat) {
    this.setState(() => {
      return {
        result: resultat
      };
    });
  }
  addResultat() {
    this.setState(prevState => {
      return {
        listeResultat: [
          ...prevState.listeResultat,
          { id: this.state.listeResultat.length, number: this.state.result }
        ]
      };
    });
  }
  render() {
    return (
      <div className="App">
        <Hearder />
        <section>
          <Screen resultat={this.state.result} addResultat={this.addResultat} />
          <Calculator
            showResultat={this.showResultat}
            addResultat={this.addResultat}
          />
          <ShowResult listeResultat={this.state.listeResultat} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
