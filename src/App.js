import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Ravi',
        lastName: 'Kumar',
      },
      date: 'May 2, 2023',
    }

    const techs = ['HTML', 'CSS', 'JavaScript']
  
    return (
      <div className='App'>
        <Header data={data}/>
        <Main techs={techs} />
        <Footer />
      </div>
    )
  }
}


