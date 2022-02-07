<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Halaman</p>
            </div>

            <div class="card jm_card card_detail_page">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Informasi Halaman</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Judul Halaman</label>
                                    <input type="text" class="jm_input" placeholder="Judul Halaman">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Sub Judul</label>
                                    <input type="text" class="jm_input" placeholder="Sub Judul">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Tipe</label>
                                    <div class="button_type_group">
                                        <button class="button_type_group_1 btn_type" id="btn_type_1" @click.prevent="chooseType('btn_type_1')">General</button>
                                        <button class="button_type_group_1 btn_type" id="btn_type_2" @click.prevent="chooseType('btn_type_2')">Informasi</button>
                                        <button class="button_type_group_1 btn_type" id="btn_type_3" @click.prevent="chooseType('btn_type_3')">Ketentuan</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Logo</label>
                                    <div class="upload_image" @click.prevent="uploadImage()">
                                        <span class="upload_image_text">Upload Gambar</span>
                                        <img v-if="url" class="preview_image" :src="url" />
                                    </div>
                                    <input type="file" hidden id="product_image" @change="onFileChange">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Konten</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_qa">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Pertanyaan</p>
                        <button class="btn_add_question" v-b-modal.modal-add-qa>+ Pertanyaan</button>
                    </div>

                    <table class="table jm_table table_qa">
                        <thead>
                            <tr>
                                <th>Pertanyaan</th>
                                <th>Jawaban</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in qa" :key="item.id">
                                <td class="q">{{ item.q }}</td>
                                <td class="a">{{ item.a }}</td>
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

            <div class="row">
                <div class="col">
                    <div class="button_submit">
                        <button class="button_submit_cancel">Batalkan</button>
                        <button class="button_submit_save">Simpan Artikel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal -->
        <b-modal
            id="modal-add-qa"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Detail Pertanyaan</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Pertanyaan</label>
                        <input type="text" class="jm_input" placeholder="Pertanyaan">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Jawaban</label>
                        <input type="text" class="jm_input" placeholder="Jawaban">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan Pertanyaan</button>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "CreatePage",
    data() {
        return {
            qa: [
                {id: 1, q: 'Pertanyaan', a: 'Jawaban'},
                {id: 2, q: 'Pertanyaan', a: 'Jawaban'}
            ]
        }
    },
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
.card_detail_page,
.card_qa {
    margin-top: 24px;
}

.table_qa {
    thead {
        tr {
            th {
                width: calc(100%/3);
            }

            th:last-child {
                text-align: center;
            }
        }
    }
    tbody {
        tr {
            td:last-child {
                display:flex;
                justify-content: center;
            }
        }
    }
}

.card_qa {
    margin-bottom: 24px;
}

.btn_add_question {
    background: transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    border: 1px solid #006664;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 24px;
}

.button_submit {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 0 24px 0;

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
        margin-right: 16px;
        background: transparent;
        padding: 8px 16px;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
    }

    &_1.active {
        background: #006664;
        color: #FFFFFF;
    }
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
    margin-top: 24px;
}
</style>