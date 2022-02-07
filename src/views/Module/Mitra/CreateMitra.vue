<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Sales</p>
            </div>

            <div class="card jm_card card_create_sales">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Data Sales</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Nama</label>
                                    <input type="text" class="jm_input" placeholder="Nama">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Alamat</label>
                                    <input type="text" class="jm_input" placeholder="Alamat">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">No. KTP</label>
                                    <input type="text" class="jm_input" placeholder="No. KTP">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">No. Telpon</label>
                                    <input type="text" class="jm_input" placeholder="No. Telpon">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Email</label>
                                    <input type="text" class="jm_input" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Nama Bank</label>
                                    <input type="text" class="jm_input" placeholder="Nama Bank">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">No. Rekening</label>
                                    <input type="text" class="jm_input" placeholder="No. Rekening">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Komisi</label>
                                    <input type="text" class="jm_input" placeholder="Komisi">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Referal Code</label>
                                    <input type="text" class="jm_input" placeholder="Referal Code">
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
                        <button class="button_submit_save">Simpan Sales</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateMitra"
}
</script>

<style lang="scss" scoped>
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
</style>