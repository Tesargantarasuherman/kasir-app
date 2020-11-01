import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_URL } from './utils/URL'
import { Navbar, ListCategory, HasilCategory, Menus } from './components'
import Axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    Axios.get(API_URL + 'products').then(res => {
      this.setState({
        menus: res.data
      })
    })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const {menus} = this.state
    return (
      <Fragment>
        <Navbar />
        <div className="mt-2">
          <div className="container">
            <div className="row">
              <ListCategory />
              <div className="col mt-2">
                <h4><strong> Daftar Produk</strong></h4>
                <hr />
                <div className="row">
                  {
                    menus && menus.map(menu => (
                      <Menus key={menu.id} menu={menu} />
                    ))
                  }
                </div>
              </div>
              <HasilCategory />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

