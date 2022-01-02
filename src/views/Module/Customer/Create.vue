<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>customer</p>
                <button class="btn btn_change_password jm_border" v-b-modal.modal-change-password>ubah password</button>
            </div>

            <div class="card jm_card">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Data Customer</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">nama</label>
                                    <input type="text" class="jm_input" placeholder="nama">
                                </div>
                            </div>
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">email</label>
                                    <input type="email" class="jm_input" placeholder="email">
                                </div>
                            </div>
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">jenis</label>
                                    <div class="custom_checkbox">
                                        <button class="btn custom_checkbox_btn">retail</button>
                                        <button class="btn custom_checkbox_btn">kontraktor</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">nomor telepon</label>
                                    <input type="text" class="jm_input" placeholder="nomor telepon">
                                </div>
                            </div>
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">termin</label>
                                    <input type="text" class="jm_input" placeholder="termin">
                                </div>
                            </div>
                            <div class="col md-4">
                                <div class="jm_form_group">
                                    <label for="">down payment</label>
                                    <input type="text" class="jm_input" placeholder="down payment">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col md-4 lg-4 xl-4">
                                <div class="jm_form_group">
                                    <label for="">sales referal</label>
                                    <input type="text" class="jm_input" placeholder="sales referal">
                                </div>
                            </div>
                            <div class="col md-4"></div>
                            <div class="col md-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card custom_card">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Data Alamat</p>
                        <button class="btn btn_change_password jm_border" v-b-modal.modal-add-address>+ alamat</button>
                    </div>

                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>alamat</th>
                                <th>kota/kabupaten</th>
                                <th>provinsi</th>
                                <th>kecematan</th>
                                <th>kode pos</th>
                                <th>aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in customer" v-bind:key="item.id">
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

            <div class="d-flex align-items-center justify-content-end mb-2 custom_action_group">
                <button class="btn jm_btn_cancel">batalkan</button>
                <button class="btn jm_green jm_btn">simpan customer</button>
            </div>
        </div>

        <!-- modal -->
        <b-modal
            id="modal-change-password"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Ubah Password</p>
            </div>

            <div class="jm_form_group">
                <label for="">password baru</label>
                <input type="password" class="jm_input" placeholder="password baru">
            </div>
            <div class="jm_form_group">
                <label for="">konfirmasi password</label>
                <input type="password" class="jm_input" placeholder="konfirmasi password">
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan password</button>
        </b-modal>

        <b-modal
            id="modal-add-address"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Alamat</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">alamat lengkap</label>
                        <input type="text" class="jm_input" placeholder="alamat lengkap">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col md-6">
                    <div class="jm_form_group">
                        <label for="">Kecamatan</label>
                        <select name="" id="" class="jm_input">
                            <option value="">Pilih Kecamatan</option>
                        </select>
                    </div>
                </div>
                <div class="col md-6">
                    <div class="jm_form_group">
                        <label for="">provinsi</label>
                        <select name="" id="" class="jm_input">
                            <option value="">Pilih Provinsi</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col md-6">
                    <div class="jm_form_group">
                        <label for="">Kota/Kabupaten</label>
                        <select name="" id="" class="jm_input">
                            <option value="">Pilih Kota/Kabupaten</option>
                        </select>
                    </div>
                </div>
                <div class="col md-6">
                    <div class="jm_form_group">
                        <label for="">kode pos</label>
                        <input type="number" class="jm_input" placeholder="0">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan item</button>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "CustomerCreate",
    data() {
        return {
            customer: [
                {
                    id: 1,
                    address: '123 Main Street',
                    city: 'Kabupaten Bogor',
                    province: 'Jawa Barat',
                    district: 'Jawa Barat',
                    postalcode: 'Jawa Barat'
                }
            ]
        }
    },
    methods: {
        resetModal() {
            console.log('modal closed');
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_change_password {
    padding: 12px 24px !important;
}

.custom_checkbox {
    display: flex;
    align-content: center;

    &_btn {
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 8px 16px !important;
        text-transform: capitalize;
        margin-right: 8px;
        color: #A9A9A9;
        font-size: 14px;
    }
}

.custom_card {
    margin-top: 24px;
}

.custom_action_group {
    margin-top: 24px;
}

.jm_btn_cancel {
    margin-right: 16px;
}
</style>