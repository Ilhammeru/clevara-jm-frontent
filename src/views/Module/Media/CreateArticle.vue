<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Artikel</p>
            </div>

            <div class="card jm_card card_detail_article">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Konten Artikel</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-sm-12 col-md-12">
                                <div class="jm_form_group">
                                    <label for="">Judul</label>
                                    <input type="text" placeholder="Judul" class="jm_input">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-12 col-md-12">
                                <div class="jm_form_group">
                                    <label for="">Sub Judul</label>
                                    <input type="text" placeholder="Sub Judul" class="jm_input">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-12 col-md-12">
                                <div class="jm_form_group">
                                    <label for="">Kontent</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Kategori</label>
                                    <select class="jm_input">
                                        <option value="">Pilih Kategori</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <label for="">Item Populer</label>
                                <div class="button_popular_group">
                                    <button class="button_popular_group_1 btn_popular" id="popular_1" @click.prevent="isPopular('popular_1')">Publish</button>
                                    <button class="button_popular_group_1 btn_popular" id="popular_2" @click.prevent="isPopular('popular_2')">Draft</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_image">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Gambar</p>
                    </div>
                    <div class="upload_image" @click.prevent="uploadImage()">
                        <span class="upload_image_text">Upload Gambar</span>
                        <img v-if="url" class="preview_image" :src="url" />
                    </div>
                    <input type="file" hidden id="product_image" @change="onFileChange">
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
    </div>
</template>

<script>
export default {
    name: "CreateArticle",
    data() {
        return {
            url: ''
        }
    },
    methods: {
        isPopular(id) {
            let elem = document.getElementById(id)
            let all = document.querySelectorAll('.btn_popular')
            for (let a = 0; a < all.length; a++) {
                all[a].classList.remove('active')
            }
            elem.classList.add('active')
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
.button_popular_group {
    display: flex;
    align-items: center;

    &_1 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #A9A9A9;
        background: transparent;
        padding: 8px 16px;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        margin-right: 14px;
    }

    .active {
        color: #FFFFFF;
        background: #006664;
    }
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

.card_image {
    margin-top: 24px;
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