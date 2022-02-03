<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Konfirmasi Pembayaran</p>
            </div>

            <Search placeholder="Search for categories" isSales="true" />

            <div class="card jm_card card_confirmation">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>No. Order</th>
                                <th>Tanggal</th>
                                <th>Bank</th>
                                <th>No. Rekening</th>
                                <th>Atas Nama</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in confirmation" :key="item.id" v-b-modal.modal-confirmation>
                                <td>{{ item.invoice }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.bank }}</td>
                                <td>{{ item.account }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.total }}</td>
                                <td>
                                    <button class="btn_status" :class="{'is_verify': item.isVerify}">
                                        {{ item.status }}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- modal -->
        <!-- modal -->
        <b-modal
            id="modal-confirmation"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
        >
            <div class="jm_modal_title">
                <p>Verifikasi Pembayaran</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Bukti Transfer</label>
                        <input type="text" class="jm_input" placeholder="Upload Bukti Transfer" @click.prevent="showUpload">
                        <input type="file" id="img_transfer" hidden>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Bank Pengirim</label>
                        <input type="text" class="jm_input" placeholder="Bank Pengirim">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">No. Rekening</label>
                        <input type="text" class="jm_input" placeholder="No. Rekening">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama Rekening</label>
                        <input type="text" class="jm_input" placeholder="Nama Rekening">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Jumlah Transfer</label>
                        <input type="text" class="jm_input" placeholder="Jumlah Transfer">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan Butki Pembayaran</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "ConfirmationPayment",
    components: {
        Search
    },
    data() {
        return {
            confirmation: [
                {id: 1, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Verifikasi Pembayaran', isVerify: true},
                {id: 2, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false},
                {id: 3, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false},
                {id: 4, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false},
                {id: 5, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false},
                {id: 6, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false},
                {id: 7, invoice: 'JM/08112021/02', date: '11/08/2022', bank: 'Cimb Niaga Syariah', account: '12344566666', name: 'Jessica Vicillia Sunardi', total: '71,935,000', status: 'Sudah Terverifikasi', isVerify: false}
            ]
        }
    },
    methods: {
        showUpload() {
            let elem = document.getElementById('img_transfer')
            elem.click()
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_status {
    border: none;
    background: #F4F4F4;
    border-radius: 10px;
    padding: 4px 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #212121;
}

.is_verify {
    background: #006664;
    color: #FFFFFF;
}
</style>