import React, {Component} from 'react';
import './App.css';
import ListItem from './components/ListItem.js';
import Header from './components/Header';
import Footer from "./components/Footer";

class App extends Component {

    render(){

        return (
<div>
        <div className='container'>
            <div className='myForm'>
                <Header title = 'TODO APP'/>
                <ListItem />
                <div className='footer'>
                    <Footer />
                </div>
            </div>

        </div>
</div>
    );
  }
}

export default App;