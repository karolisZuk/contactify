import React, { Component } from 'react';
import Main from './components/content/MainComponent';
import Header from './components/header/HeaderComponent';
import Footer from './components/footer/FooterComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
