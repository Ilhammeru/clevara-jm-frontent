<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Admin</p>
                <button class="jm_btn btn_change_password" v-b-modal.modal-user-change-password>Ubah Password</button>
            </div>

            <div class="card jm_card card_detail">
                <div class="card-body">
                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Email</label>
                                    <input type="text" class="jm_input" placeholder="Email">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Nama</label>
                                    <input type="text" class="jm_input" placeholder="Nama">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Jenis Akses</label>
                                    <div class="button_type_group">
                                        <button class="button_type_group_1 btn_type" id="btn_type_1" @click.prevent="chooseType('btn_type_1')">Admin</button>
                                        <button class="button_type_group_1 btn_type" id="btn_type_2" @click.prevent="chooseType('btn_type_2')">Customer</button>
                                        <button class="button_type_group_1 btn_type" id="btn_type_3" @click.prevent="chooseType('btn_type_3')">Mitra Sales</button>
                                        <button class="button_type_group_1 btn_type" id="btn_type_4" @click.prevent="chooseType('btn_type_4')">Super Admin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="button_submit">
                        <button class="button_submit_cancel">Batalkan</button>
                        <button class="button_submit_save">Simpan Admin</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal -->
        <b-modal
            id="modal-user-change-password"
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
    </div>
</template>

<script>
export default {
    name: "CreateUser",
    methods: {
        chooseType(id) {
            let all = document.querySelectorAll('.btn_type')
            let elem = document.getElementById(id)
            for (let a = 0; a < all.length; a++) {
                all[a].classList.remove('active')
            }
            elem.classList.add('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_change_password {
    background: transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    padding: 12px 24px;
    border: 1px solid #006664;
    box-sizing: border-box;
    border-radius: 10px;
}

.button_submit {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 24px 0;

    &_cancel {
        background: transparent;
        margin-right: 40px;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
    }

    &_save {
        border: none;
        background: #006664;
        border-radius: 10px;
        padding: 12px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
}

.button_type_group {
    display: flex;
    align-items: center;

    &_1 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #A9A9A9;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 8px 16px;
        background: transparent;
        margin-right: 12px;
    }

    &_1.active {
        color: #FFFFFF;
        background: #006664;
    }
}
</style>