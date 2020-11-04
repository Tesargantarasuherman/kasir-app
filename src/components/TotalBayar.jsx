import React, { Component } from 'react'
import { numberFormat } from '../utils/Utils';

export default class TotalBayar extends Component {
    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);
        return (
            <div className="fixed-bottom">
                <div className="row">
                    <div className="col-md-4 offset-md-8 d-flex justify-content-start">
                        <h6 className="float-left text-danger px-4">Total Harga :Rp. {numberFormat(totalBayar)}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
