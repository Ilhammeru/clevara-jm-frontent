<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>produk</p>
            </div>

            <div class="main_detail">
                <div class="card jm_card card_general_information">
                    <div class="card-body">
                        <p class="card_title">Informasi Produk</p>

                        <div class="jm_form">
                            <div class="row">
                                <div class="col">
                                    <div class="jm_form_group">
                                        <label for="">nama produk</label>
                                        <input type="text" class="jm_input" placeholder="nama produk">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-md-6 col sm-12">
                                    <div class="jm_form_group">
                                        <label for="">merek</label>
                                        <select class="jm_input" id="">
                                            <option value="">Pilih Merek</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col col-md-6 col sm-12">
                                    <div class="jm_form_group">
                                        <label for="">kategori</label>
                                        <select class="jm_input" id="">
                                            <option value="">Pilih Kategori</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="">deskripsi</label>
                                    <textarea class="jm_input" cols="10" rows="5"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-md-4 col-sm-12">
                                    <label for="">item populer</label>
                                    <div class="radio_button">
                                        <button class="radio_button_1 btn_popular" id="btn_popular_1" @click.prevent="choose('popular', 1)">Aktif</button>
                                        <button class="radio_button_2 btn_popular" id="btn_popular_2" @click.prevent="choose('popular', 2)">Tidak Aktif</button>
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <label for="">penjualan terbaik</label>
                                    <div class="radio_button">
                                        <button class="radio_button_1 btn_best" id="btn_best_1" @click.prevent="choose('best', 1)">Aktif</button>
                                        <button class="radio_button_2 btn_best" id="btn_best_2" @click.prevent="choose('best', 2)">Tidak Aktif</button>
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <label for="">harga fluktuasi</label>
                                    <div class="radio_button">
                                        <button class="radio_button_1 btn_price" id="btn_price_1" @click.prevent="choose('price', 1)">Aktif</button>
                                        <button class="radio_button_2 btn_price" id="btn_price_2" @click.prevent="choose('price', 2)">Tidak Aktif</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card_spesification jm_card">
                    <div class="card-body">
                        <p class="card_title">Informasi Produk</p>

                        <div class="row jm_form">
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">berat</label>
                                    <input type="text" class="jm_input" placeholder="Gram">
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">panjang</label>
                                    <input type="text" class="jm_input" placeholder="cm">
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Lebar</label>
                                    <input type="text" class="jm_input" placeholder="cm">
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Tinggi</label>
                                    <input type="text" class="jm_input" placeholder="cm">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card_price jm_card">
                    <div class="card-body">
                        <p class="card_title">Harga</p>

                        <div class="jm_form">
                            <div class="row">
                                <div class="col col-md-8 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">COGS</label>
                                        <input type="text" class="jm_input" placeholder="Rp">
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Satuan</label>
                                        <input type="text" class="jm_input" placeholder="Buah">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-md-8 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Harga Retail</label>
                                        <input type="text" class="jm_input" placeholder="Rp">
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Satuan</label>
                                        <input type="text" class="jm_input" placeholder="Buah">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-md-8 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Harga Kontraktor</label>
                                        <input type="text" class="jm_input" placeholder="Rp">
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Satuan</label>
                                        <input type="text" class="jm_input" placeholder="Buah">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card jm_card card_stock">
                    <div class="card-body">
                        <p class="card_title">Stok</p>

                        <div class="jm_form">
                            <div class="row">
                                <div class="col col-md-8 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Stok</label>
                                        <input type="text" class="jm_input" placeholder="Stok">
                                    </div>
                                </div>
                                <div class="col col-md-4 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Stok Selalu Tersedia</label>
                                        <div class="stock_button_group">
                                            <button class="stock_button_group_1 btn_stock" id="btn_stock_1" @click.prevent="choose('stock', 1)">Aktif</button>
                                            <button class="stock_button_group_1 btn_stock" id="btn_stock_2" @click.prevent="choose('stock', 2)">Tidak Aktif</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <p class="helper_label">Min QTY Buying for Discount</p>
                                <div class="col col-md-3 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Diskon Tier 2</label>
                                        <input type="text" class="jm_input" placeholder="0">
                                    </div>
                                </div>
                                <div class="col col-md-3 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Diskon Tier 3</label>
                                        <input type="text" class="jm_input" placeholder="0">
                                    </div>
                                </div>
                                <div class="col col-md-3 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Diskon Tier 4</label>
                                        <input type="text" class="jm_input" placeholder="0">
                                    </div>
                                </div>
                                <div class="col col-md-3 col-sm-12">
                                    <div class="jm_form_group">
                                        <label for="">Diskon Tier 1</label>
                                        <input type="text" class="jm_input" placeholder="0">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="jm_form_group">
                                        <label for="">Min Qty Buying for Free Ongkir</label>
                                        <div class="stock_input_range">
                                            <input type="text" class="jm_input" placeholder="0">
                                            <span>-</span>
                                            <input type="text" class="jm_input" placeholder="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card_location jm_card">
                    <div class="card-body">
                        <div class="jm_card_title">
                            <p>Lokasi</p>
                            <button class="btn btn_change_password jm_border" v-b-modal.modal-add-address>+ alamat</button>
                        </div>

                        <div class="row">
                            <div class="col">
                                <table class="table jm_table">
                                    <thead>
                                        <tr>
                                            <th>Alamat</th>
                                            <th>Kota / Kabupaten</th>
                                            <th>Provinsi</th>
                                            <th>Kecamatan</th>
                                            <th>Kode Pos</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in productAddress" :key="item.id">
                                            <td>{{ item.address }}</td>
                                            <td>{{ item.city }}</td>
                                            <td>{{ item.province }}</td>
                                            <td>{{ item.district }}</td>
                                            <td>{{ item.postalcode }}</td>
                                            <td>
                                                <div class="jm_table_action">
                                                    <span>edit</span>
                                                    <span>hapus</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card jm_card card_option_shipping">
                    <div class="card-body">
                        <p class="card_title">Opsi Pengiriman</p>
                        <div class="row">
                            <div class="col">
                                <div class="button_shipping_group">
                                    <button class="btn_shipping" id="btn_shipping_1" @click.prevent="choose('shipping', 1)">Free Ongkir</button>
                                    <button class="btn_shipping" id="btn_shipping_2" @click.prevent="choose('shipping', 2)">Pickup di Toko</button>
                                    <button class="btn_shipping" id="btn_shipping_3" @click.prevent="choose('shipping', 3)">JNE</button>
                                    <button class="btn_shipping" id="btn_shipping_4" @click.prevent="choose('shipping', 4)">Anteraja</button>
                                    <button class="btn_shipping" id="btn_shipping_5" @click.prevent="choose('shipping', 5)">Deliveree</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card jm_card card_image">
                    <div class="card-body">
                        <p class="card_title">Gambar</p>

                        <div class="row">
                            <div class="col">
                                <div class="upload_image" @click.prevent="uploadImage()">
                                    <span class="upload_image_text">Upload Gambar</span>
                                    <img v-if="url" class="preview_image" :src="url" />
                                </div>
                                <input type="file" hidden id="product_image" @change="onFileChange">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- submit button -->
                <div class="button_submit_group">
                    <button class="button_submit_group_cancel jm_btn">Batalkan</button>
                    <button class="button_submit_group_save jm_btn">Simpan Produk</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailProduct",
    data() {
        return {
            isPopular: false,
            isBestSeller: false,
            isVolatile: false,
            isAlwaysInStock: false,
            productAddress: [
                {id: 1, address: '123 Main Street', city: 'Kabupaten Bogor', province: 'Jawa Barat', district: 'Jawa Barat', postalcode: '111470'}
            ],
            url: ""
        }
    },
    methods: {
        choose(param, val) {
            let allElem = document.querySelectorAll('.btn_' + param);
            let elem = document.getElementById('btn_' + param + '_' + val)
            for (let a = 0; a < allElem.length; a++) {
                allElem[a].classList.remove('active')
            }

            elem.classList.add('active')
            if (param == 'popular') {
                this.isPopular = true
            } else if (param == 'best') {
                this.isBestSeller = true
            } else if (param == 'stock') {
                this.isAlwaysInStock = true;
            } else {
                this.isVolatile = true
            }
        },
        uploadImage() {
            let elem = document.getElementById('product_image')
            elem.click()
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        }
    }
}
</script>

<style lang="scss" scoped>
.card_general_information,
.card_spesification,
.card_price,
.card_location,
.card_stock,
.card_option_shipping {
    margin-bottom: 24px;
}

.helper_label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.005em;
    color: #212121;
    margin-bottom: 16px !important;
}

.upload_image {
    width: 250px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    /* dashed border */
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23A9A9A9FF' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='43' stroke-linecap='square'/%3e%3c/svg%3e");

    &_text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
    }
}

.preview_image {
    width: 250px;
    height: auto;
    position: absolute;
}

.card_title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.005em;
    color: #212121;
    margin-bottom: 24px !important;
}

textarea {
    margin-bottom: 24px;
}

.stock_input_range {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        margin: 0 20px;
    }
}

.button_submit_group {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 24px 0;

    &_cancel {
        border: none;
        background: transparent;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
    }

    &_save {
        background: #006664;
        border-radius: 10px;
        padding: 12px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        border: none;
        color: #FFFFFF;
    }
}

.radio_button,
.stock_button_group,
.button_shipping_group {
    display: flex;
    align-items: center;

    button {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #A9A9A9;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        background: transparent;
        padding: 8px 16px;
        margin-right: 12px;

        &:focus {
            box-shadow: none;
        }
    }

    button.active {
        border: 0.5px solid #006664;
        color: #006664;
    }
}
</style>