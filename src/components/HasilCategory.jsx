import React, { Component } from 'react'
import { TotalBayar } from '.'
import { numberFormat } from '../utils/Utils'

export default class HasilCategory extends Component {
    render() {
        const { keranjangs } = this.props
        return (
            <div className="col-md-3 mt-2">
                <h4><strong>Hasil Ketgori</strong></h4>
                <hr />
                {
                    keranjangs.length !== 0 && (
                        <ul class="list-group">
                            {
                                keranjangs.map(keranjang => {
                                    return (
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <h5>
                                                        <span className="badge badge-success">{keranjang.jumlah}</span>
                                                    </h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6>{keranjang.product.nama}</h6>
                                                    <p>Rp. {numberFormat(keranjang.product.harga)}</p>
                                                </div>
                                                <div>
                                                    <strong className="float-right">Rp. {numberFormat(keranjang.total_harga)}</strong>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
                <TotalBayar keranjangs={keranjangs} />
            </div>
        )
    }
}
