<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>order detail</p>
                <div class="button_action_group">
                    <button class="btn jm_btn btn_cancel">Batalkan</button>
                    <button class="btn jm_green jm_btn">Update Sales Order</button>
                </div>
            </div>

            <div class="action_helper_group">
                <div class="action_helper_group_1">
                    <div class="icon"></div>
                    <p class="text">Unduh Surat Jalan</p>
                </div>
                <div class="action_helper_group_2">
                    <div class="icon"></div>
                    <p class="text">Ekspor PDF</p>
                </div>
                <div class="action_helper_group_3">
                    <div class="icon"></div>
                    <p class="text">Hapus</p>
                </div>
            </div>

            <div class="card jm_card card_information">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2-5 col-sm-12">
                            <p class="card_information_title">No. Order</p>
                            <p class="card_information_value">#JM/08182021/05</p>
                            <p class="card_information_helper">11-08-2022</p>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <p class="card_information_title">Customer</p>
                            <p class="card_information_value">Bpk. Willy</p>
                            <p class="card_information_helper">0811767227</p>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <p class="card_information_title">Customer</p>
                            <p class="card_information_value">Bpk. Willy</p>
                            <p class="card_information_helper">0811767227</p>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <p class="card_information_title">Alamat Pengirim</p>
                            <p class="card_information_value_address">
                                Tasmania Sejahtera, PT — Kompleks Intercont Blok G-1 No. 95, Kebon Jeruk, Jakarta Barat, DKI Jakarta
                            </p>
                        </div>
                        <div class="col-md-2-5 col-sm-12">
                            <p class="card_information_title">Status</p>
                            <div class="btn_status_group">
                                <button class="btn_status" @click.prevent="showStatus">
                                    <span>Menunggu Pembayaran</span>
                                    <img src="@/assets/icons/dropdown.png" alt="">
                                </button>
                                <div class="status_dropdown scale-in-center">
                                    <p class="status_dropdown_list">Konfirmasi Stok</p>
                                    <p class="status_dropdown_list">Menunggu Pembayaran</p>
                                    <p class="status_dropdown_list">Order Diproses</p>
                                    <p class="status_dropdown_list">Order Dikirim</p>
                                    <p class="status_dropdown_list">Order Selesai</p>
                                    <p class="status_dropdown_list">Order Batal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_item">
                <div class="card-body">
                    <p class="card_title">Daftar Item</p>

                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in item" :key="list.id">
                                <td class="item_name">
                                    <div class="item_name_icon"></div>
                                    <p class="item_name_text">{{ list.name }}</p>
                                </td>
                                <td>{{ list.price }}</td>
                                <td class="item_qty">
                                    <div class="item_qty_group">
                                        <button class="item_qty_group_btn" @click.prevent="addQty('decrease', list.id)">-</button>
                                        <p class="item_qty_group_text">{{ list.quantity }}</p>
                                        <button class="item_qty_group_btn" @click.prevent="addQty('increase', list.id)">+</button>
                                    </div>
                                </td>
                                <td>{{ list.total }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="card jm_card card_payment">
                        <div class="card-body">
                            <p class="card_title">Metode Pembayaran</p>
                            <p class="card_title_helper">Transfer Bank BCA</p>
                            <div class="helper_group">
                                <div class="helper_group_1">
                                    <p class="card_title_helper">Nama Akun</p>
                                    <p class="card_title_subhelper">Aneka Juragan Material</p>
                                </div>
                                <div class="helper_group_2">
                                    <p class="card_title_helper">Nomor Akun</p>
                                    <p class="card_title_subhelper">670553332</p>
                                </div>
                            </div>
                            <div class="helper_desc">
                                <p class="card_title_helper">Keterangan Lain</p>
                                <p class="card_title_desc">-</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="card jm_card card_total">
                        <div class="card-body">
                            <p class="card_title">Total</p>
                            <div class="card_total_group">
                                <p class="card_title_helper">Sub Total</p>
                                <p class="card_title_subhelper">Rp1.000.000</p>
                            </div>
                            <div class="card_total_group">
                                <p class="card_title_helper">PPN (10%)</p>
                                <p class="card_title_subhelper">Rp1.000.000</p>
                            </div>
                            <div class="card_total_group">
                                <p class="card_title_helper">Biaya Pengiriman</p>
                                <p class="card_title_subhelper">Rp1.000.000</p>
                            </div>
                            <div class="card_grand_total">
                                <p class="card_grand_total_text">Total Tagihan</p>
                                <p class="card_grand_total_text">Rp2.050.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "DetailOrder",
    data() {
        return {
            item: [
                {id: 1, name: 'Keramik Pegasus 40X40 40736 Cream', image: '', price: 'Rp 71,935,920', quantity: 1, total: 'Rp 71,935,920'},
                {id: 2, name: 'Keramik Pegasus 40X40 40736 Cream', image: '', price: 'Rp 71,935,920', quantity: 1, total: 'Rp 71,935,920'},
                {id: 3, name: 'Keramik Pegasus 40X40 40736 Cream', image: '', price: 'Rp 71,935,920', quantity: 1, total: 'Rp 71,935,920'},
            ]
        }
    },
    methods: {
        addQty(param, id) {
            let data = this.item;
            let select = ''
            for (let a = 0; a < data.length; a++) {
                if (data[a].id == id) {
                    if (param == 'increase') {
                        data[a].quantity += 1   
                    } else {
                        if (data[a].quantity > 1) {
                            data[a].quantity -= 1   
                        }
                    }
                }
            }
        },
        showStatus() {
            let elem = document.querySelector('.status_dropdown')
            elem.classList.toggle('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.card_information,
.card_item,
.card_payment {
    margin-bottom: 24px;
}

.card_payment,
.card_total {
    height: 272px;
}

.card_total {
    &_group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card_grand_total {
        background: #FAFAFA;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        margin-top: 24px;

        &_text {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 140%;
            letter-spacing: -0.005em;
            color: #212121;
        }
    }
}


.card_title_subhelper {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.005em;
    color: #212121;
}

.card_payment {
    .helper_desc {
        .card_title_desc {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 160%;
            letter-spacing: -0.005em;
            color: #212121;
        }
    }

    .helper_group {
        display: flex;
        align-items: center;
        margin: 24px 0;

        &_1 {
            margin-right: 100px;
        }
    }
}

.table {
    thead {
        tr {
            th:first-child {
                width: 400px;
            }
        }
    }
    tbody {
        tr {
            .item_qty {

                &_group {
                    display: flex;
                    align-items: center;

                    &_btn {
                        color: #006664;
                        border: 1px solid #006664;
                        box-sizing: border-box;
                        border-radius: 100%;
                        font-size: 24px;
                        background: transparent;
                    }

                    &_btn:first-child {
                        margin-right: 18px;
                    }

                    &_btn:last-child {
                        margin-left: 18px;
                    }
                }
            }

            .item_name {
                display: flex;
                align-items: center;
                width: 310px;

                &_icon {
                    background: #F4F4F4;
                    border-radius: 10px;
                    width: 56px;
                    height: 56px;
                    margin-right: 16px;
                }

                &_text {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 140%;
                    letter-spacing: 0.04em;
                    color: #212121;
                    text-transform: capitalize;
                }
            }
        }
    }
}

.card_information {
    .col-md-2-5:nth-child(3) {
        width: 15% !important;
    }

    .col-md-2-5:nth-child(4) {
        width: 20% !important;
    }

    .col-md-2-5:last-child {
        width: 25% !important;
    }

    .btn_status_group {
        position: relative;

        .btn_status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            border: 0.5px solid #DFDFDF;
            box-sizing: border-box;
            border-radius: 10px;
            padding: 8px 16px;
            width: 100%;
        }

        .status_dropdown {
            width: 216px;
            height: auto;
            border: 0.5px solid #DFDFDF;
            box-sizing: border-box;
            position: absolute;
            background: #FFFFFF;
            border-radius: 10px;
            z-index: 10;
            box-shadow: -4px 3px 14px 9px rgba(0,0,0,0.13);
            -webkit-box-shadow: -4px 3px 14px 9px rgba(0,0,0,0.13);
            -moz-box-shadow: -4px 3px 14px 9px rgba(0,0,0,0.13);
            padding: 20px 12px;
            display: none;

            &_list {
                cursor: pointer;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #6C6C6C;
                padding: 8px;
                border-bottom: 0.5px solid #DFDFDF;
            }
        }

        .status_dropdown.active {
            display: block;
        }
    }


    &_title {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
        margin-bottom: 10px !important;
    }

    &_value {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #212121;
        margin-bottom: 8px !important;
    }

    &_helper {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
    }
}

.btn_cancel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    margin-right: 16px;
}

.jm_container_context_breadcrumb {
    margin-bottom: 40px;
}

.action_helper_group {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 24px;

    &_1,
    &_2,
    &_3 {
        display: flex;
        margin-right: 12px;
        cursor: pointer;
        border-right: 1px solid #DFDFDF;
        padding-right: 10px;

        .icon {
            border: 2px solid #006664;
            box-sizing: border-box;
            border-radius: 5px;
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        .text {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #006664;
        }
    }

    &_3 {
        padding-right: 0;
        border: none;
    }
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

.card_title_helper {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.005em;
    color: #6C6C6C;
}
</style>