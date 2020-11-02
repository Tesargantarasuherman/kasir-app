import React from 'react'
import {numberFormat} from '../utils/Utils'
const Menus = ({ menu,masukKeranjang }) => {
    return (
        <div className="col-md-4 col-xs-6 my-2">
            <div className="card shadow" onClick={()=>masukKeranjang(menu)}>
                <img className="card-img-top" src={"assets/images/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{menu.nama} <strong> ({menu.kode}) </strong></h5>
                    <p className="card-text">Rp. {numberFormat(menu.harga)}</p>
                </div>
            </div>

        </div>
    )
}
export default Menus