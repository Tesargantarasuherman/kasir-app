import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sukses extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                <img src="assets/images/success.png" width={500}/>
               <h2>Pesanan Sukses</h2>
                <p>Terimakasih Sudah Memesan</p>
                <Link to="/" className="btn btn-info">Kembali</Link>
            </div>
        )
    }
}
