import React, { Component, Fragment } from "react";
import "../../App.css";
import { API_URL } from "../../utils/URL";
import { ListCategory, HasilCategory, Menus } from "../../components";
import Axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      kategoriYangDipilih: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    Axios.get(
      API_URL + "products?category.nama=" + this.state.kategoriYangDipilih
    )
      .then((res) => {
        this.setState({
          menus: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      
      Axios.get(API_URL + "keranjangs")
      .then((res) => {
        this.setState({
          keranjangs: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  gantiKategori = (value) => {
    this.setState(
      {
        kategoriYangDipilih: value,
        menus: [],
      },
      () => console.log(this.state.kategoriYangDipilih)
    );
    Axios.get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        this.setState({
          menus: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  masukKeranjang = (value) => {
    Axios.get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if(res.data.length === 0){
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          Axios.post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang" + keranjang.product.nama,
                icon: "success",
                button: false,
                timer :2000
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else{
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          Axios.put(API_URL + "keranjangs/"+res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang" + keranjang.product.nama,
                icon: "success",
                button: false,
                timer :2000
              });
            })
            .catch((error) => {
              console.log(error);
            });

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidUpdate(prevState){
    if(this.state.keranjangs !== prevState.keranjangs){
      Axios.get(API_URL + "keranjangs")
      .then((res) => {
        this.setState({
         keranjangs: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
  render() {
    const { menus, kategoriYangDipilih,keranjangs } = this.state;
    return (
      <Fragment>
        <div className="mt-2">
          <div className="container">
            <div className="row">
              <ListCategory
                gantiKategori={this.gantiKategori}
                kategoriYangDipilih={kategoriYangDipilih}
              />
              <div className="col mt-2">
                <h4>
                  <strong> Daftar Produk</strong>
                </h4>
                <hr />
                <div className="row">
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                </div>
              </div>
              <HasilCategory keranjangs={keranjangs}/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
