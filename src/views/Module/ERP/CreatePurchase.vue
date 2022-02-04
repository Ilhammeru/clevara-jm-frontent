<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Manajemen PO</p>
            </div>

            <div class="card jm_card card_general">
                <div class="card-body">
                    <p class="card_title">PO</p>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Pemasok</label>
                                    <select  id="" class="jm_input">
                                        <option value="">Pilih Pemasok</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Tanggal</label>
                                    <input type="date" class="jm_input">
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">PPN</label>
                                    <div class="button_ppn_group">
                                        <button class="btn_ppn" @click.prevent="choosePpn">Include PPN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Keterangan</label>
                                    <textarea class="jm_input" id="" cols="10" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_item">
                <div class="card-body">
                    <div class="card_title">
                        <p class="card_title_text">Items</p>
                        <button class="card_title_btn" v-b-modal.modal-add-item>+ Item</button>
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
                                <th>Aksi</th>
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

            <div class="card jm_card card_item">
                <div class="card-body">
                    <div class="card_title">
                        <p class="card_title_text">Biaya Pendapatan</p>
                        <button class="card_title_btn" v-b-modal.modal-add-income>+ Biaya pendapatan</button>
                    </div>

                    <table class="table jm_table table_income">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Tanggal</th>
                                <th>Qty</th>
                                <th>Nilai</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in incomeCost" :key="item.id">
                                <td class="income_name">{{ item.name }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ item.value }}</td>
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
    name: "CreatePurchase",
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