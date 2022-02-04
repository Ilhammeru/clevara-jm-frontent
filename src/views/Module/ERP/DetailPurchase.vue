<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Manajemen PO</p>
                <div class="button_submit_group">
                    <button class="button_submit_group_1">Batalkan</button>
                    <button class="button_submit_group_2">Update Status PO</button>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="action_helper">
                        <div class="action_helper_1">
                            <div class="icon"></div>
                            <p class="action_helper_1_text">Edit PO</p>
                        </div>
                        <div class="action_helper_1">
                            <div class="icon"></div>
                            <p class="action_helper_1_text">Kirim via Email</p>
                        </div>
                        <div class="action_helper_1">
                            <div class="icon"></div>
                            <p class="action_helper_1_text">Ekspor PDF</p>
                        </div>
                        <div class="action_helper_1">
                            <div class="icon"></div>
                            <p class="action_helper_1_text">Hapus</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_general">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2-5 col-sm-12">
                            <div class="general_header">
                                <p class="general_header_title">Nomor PO</p>
                                <p class="general_header_value">PO20210908154744</p>
                            </div>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <div class="general_header">
                                <p class="general_header_title">Pemasok</p>
                                <p class="general_header_value">Binamitra Handaya Perkasa, PT</p>
                            </div>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <div class="general_header">
                                <p class="general_header_title">Tanggal</p>
                                <p class="general_header_value">11-08-2022</p>
                            </div>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <div class="general_header">
                                <p class="general_header_title">PPN (10%)</p>
                                <p class="general_header_value">Tidak ada</p>
                            </div>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <div class="general_header">
                                <p class="general_header_title">Keterangan</p>
                                <p class="general_header_value">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_item">
                <div class="card-body">
                    <div class="card_title">
                        <p class="card_title_text">Items</p>
                    </div>

                    <table class="table jm_table table_item">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Satuan</th>
                                <th>Qty</th>
                                <th>Harga</th>
                                <th>Total</th>
                                <th>Ongkir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td class="item_name">{{ item.name }}</td>
                                <td>{{ item.unit }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.total }}</td>
                                <td class="item_shipping">{{ item.shipping_fee }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card jm_card card_item">
                <div class="card-body">
                    <div class="card_title">
                        <p class="card_title_text">Biaya Pendapatan</p>
                    </div>

                    <table class="table jm_table table_income">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Tanggal</th>
                                <th>Qty</th>
                                <th>Nilai</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in incomeCost" :key="item.id">
                                <td class="income_name">{{ item.name }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col col-md-8 col-sm-12">
                    <div class="card jm_card card_status">
                        <div class="card-body">
                            <div class="card_title">
                                <p class="card_title_text">Biaya Pendapatan</p>
                            </div>

                            <div class="jm_form">
                                <div class="row">
                                    <div class="col col-md-6 col-sm-12">
                                        <div class="jm_form_group">
                                            <label for="">Status Bayar</label>
                                            <select class="jm_input" id="">
                                                <option value="">Menunggu Pembayaran</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col col-md-6 col-sm-12">
                                        <div class="jm_form_group">
                                            <label for="">Bukti Pembayaran</label>
                                            <input type="text" class="jm_input" placeholder="Upload Bukti Pembayaran">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-md-4 col-sm-12">
                    <div class="card jm_card card_status">
                        <div class="card-body">
                            <div class="card_title">
                                <p class="card_title_text">Total</p>
                            </div>
                            <div class="total_item">
                                <p class="total_item_text">Sub Total</p>
                                <p class="total_item_value">Rp1,0000,000</p>
                            </div>
                            <div class="total_item">
                                <p class="total_item_text">PPN (10%)</p>
                                <p class="total_item_value">0</p>
                            </div>
                            <div class="total_item">
                                <p class="total_item_text">Biaya Pengiriman</p>
                                <p class="total_item_value">0</p>
                            </div>
                            <div class="total_button">
                                <p class="total_button_text">Total PO</p>
                                <p class="total_button_value">Rp2,050,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button_submit_group">
                <button class="button_submit_group_1">Batalkan</button>
                <button class="button_submit_group_2">Update Status PO</button>
            </div>
        </div>

        <!-- modal -->
        <b-modal
            id="modal-add-item"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
        >
            <div class="jm_modal_title">
                <p>Diskon</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Produk</label>
                        <input type="text" class="jm_input" placeholder="Pilih Produk">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Satuan</label>
                        <input type="text" class="jm_input" placeholder="Pilih Satuan">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Qty</label>
                        <input type="text" class="jm_input" placeholder="0">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Harga</label>
                        <input type="text" class="jm_input" placeholder="0">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Ongkir</label>
                        <input type="text" class="jm_input" placeholder="0">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan item</button>
        </b-modal>

        <b-modal
            id="modal-add-income"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
        >
            <div class="jm_modal_title">
                <p>Biaya / Pendapatan Lain</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Judul</label>
                        <input type="text" class="jm_input" placeholder="Tambahkan Judul">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Tanggal</label>
                        <input type="date" class="jm_input">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Jenis</label>
                        <div class="type_group">
                            <button class="type_group_btn btn_cost" id="btn_cost_1" @click.prevent="chooseType('cost', 1)">Biaya</button>
                            <button class="type_group_btn btn_inc" id="btn_inc_2" @click.prevent="chooseType('inc', 2)">Pendapatan</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-12 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Nilai</label>
                        <input type="text" class="jm_input" placeholder="0">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan Biaya / Pendapatan</button>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "DetailPurchase",
    data() {
        return {
            items: [
                {id: 1, name: 'Keramik Pegasus 40X40 40736 Cream', unit: 'Buah', qty: 36, price: 'Rp71,925,000', total: 'Rp171,925,000', shipping_fee: '0'},
                {id: 2, name: 'Keramik Pegasus 40X40 40736 Cream', unit: 'Buah', qty: 36, price: 'Rp71,925,000', total: 'Rp171,925,000', shipping_fee: '0'}
            ],
            incomeCost: [
                {id: 1, name: 'Keramik Pegasus 40X40 40736 Cream', date: '11-08-2022', qty: 'Pendapatan', value: 'Rp71,925,000'}
            ]
        }
    },
    methods: {
        choosePpn() {
            let elem = document.querySelector('.btn_ppn')
            elem.classList.toggle('active')
        },
        chooseType(param, value) {
            let all = document.querySelectorAll('.type_group_btn')
            let elem = document.getElementById('btn_' + param + '_' + value)
            for (let a = 0; a < all.length; a++) {
                all[a].classList.remove('active')
            }
            elem.classList.add('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.card_general,
.card_item {
    margin-bottom: 24px;
}

.action_helper {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: 24px;
    
    &_1 {
        display: flex;
        align-items: center;
        padding: 0 12px;
        border-right: 1px solid #DFDFDF !important;
        cursor: pointer;

        .icon {
            width: 20px;
            height: 20px;
            border: 2px solid #006664;
            box-sizing: border-box;
            border-radius: 5px;
            margin-right: 10px;
        }

        &_text {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #006664;
        }
    }
}

.general_header {
    &_title {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #212121;
        margin-bottom: 10px !important;
    }

    &_value {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #212121;
    }
}

.button_submit_group {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 40px 0;

    &_1 {
        border: none;
        background: transparent;
        margin-right: 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
    }

    &_2 {
        border: none;
        padding: 12px 24px;
        background: #006664;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        margin-left: 18px;
    }
}

.total_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    &_text {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
    }

    &_value {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        text-align: right;
        letter-spacing: -0.005em;
        color: #212121;
    }
}

.total_button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: #FAFAFA;

    &_text,
    &_value {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.005em;
        color: #212121;
    }
}

.card_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px !important;

    &_text {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        letter-spacing: -0.005em;
        color: #212121;
    }

    &_btn {
        background: transparent;
        border: 1px solid #006664;
        box-sizing: border-box;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
        padding: 12px 24px;
    }
}

.type_group {
    display: flex;
    align-items: center;

    &_btn {
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 8px 16px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #A9A9A9;
        margin-right: 16px;
        background: transparent;
    }

    &_btn.active {
        color: #006664;
        border: 0.5px solid #006664;
    }
}

.btn_ppn {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.005em;
    color: #A9A9A9;
    border: 0.5px solid #DFDFDF !important;
    box-sizing: border-box;
    border-radius: 20px;
    border: none;
    background: transparent;
    padding: 8px 16px;
}

.btn_ppn.active {
    color: #006664;
    border: 1px solid #006664 !important;
}

.table_item {
    tbody {
        tr {
            .item_name {
                width: 240px;
                padding-right: 30px;
            }

            .item_shipping {
                width: 140px;
            }
        }
    }
}
</style>