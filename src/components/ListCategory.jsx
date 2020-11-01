import Axios from 'axios';
import React, { Component } from 'react'
import { API_URL } from '../utils/URL';

export default class ListCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
        };
    };

    componentDidMount() {
        Axios.get(API_URL + 'categories').then(res => {
            this.setState({
                categories: res.data
            }, () => console.log(this.state.categories))
        })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        const {categories} = this.state
        return (
            <div className="col-md-2 mt-2">
                <h5><strong>Daftar Ketgori</strong></h5>
                <hr />
                <ul className="list-group">
                    {
                        categories && categories.map((category)=>{
                        return  <li className="list-group-item" key={category.id}>{category.nama} <span class="lnr lnr-dinner"></span> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
