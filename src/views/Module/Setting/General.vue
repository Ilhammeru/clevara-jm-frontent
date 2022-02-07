<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Pengaturan General</p>
            </div>

            <div class="card jm_card card_general">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Informasi Umum</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Nama Aplikasi</label>
                                    <input type="text" class="jm_input" placeholder="Nama Aplikasi">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Email Support</label>
                                    <input type="text" class="jm_input" placeholder="Email Support">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Telepon Support</label>
                                    <input type="text" class="jm_input" placeholder="Telepon Support">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">No Whatsapp</label>
                                    <input type="text" class="jm_input" placeholder="No Whatsapp">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Deskripsi</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_media">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Media</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Icon</label>
                                    <div class="upload_image" @click.prevent="uploadImage()">
                                        <span class="upload_image_text">Upload Gambar</span>
                                        <img v-if="url" class="preview_image" :src="url" />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-3 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Logo</label>
                                    <div class="upload_image" @click.prevent="uploadImage()">
                                        <span class="upload_image_text">Upload Gambar</span>
                                        <img v-if="url" class="preview_image" :src="url" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_address">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Alamat</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Alamat</label>
                                    <input type="text" class="jm_input" placeholder="Alamat">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Titik Peta</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Longitude</label>
                                    <input type="text" class="jm_input" placeholder="Longitude">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Latitude</label>
                                    <input type="text" class="jm_input" placeholder="Latitude">
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
                        <button class="button_submit_save">Simpan Pengaturan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingGeneral"
}
</script>

<style lang="scss" scoped>
.card_media,
.card_address {
    margin-top: 24px;
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