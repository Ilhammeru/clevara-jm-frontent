<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Pemasok</p>
            </div>

            <div class="card jm_card card_add_supplier">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Data Pemasok</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">nama</label>
                                    <input type="text" class="jm_input" placeholder="nama">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">email</label>
                                    <input type="email" class="jm_input" placeholder="email">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">No. Telpon</label>
                                    <input type="text" class="jm_input" placeholder="No. Telpon">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">pic</label>
                                    <input type="text" class="jm_input" placeholder="pic">
                                </div>
                            </div>
                            <div class="col col-md-4 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">termin</label>
                                    <input type="email" class="jm_input" placeholder="termin">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">alamat</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">deskripsi</label>
                                    <textarea class="jm_input" id="" cols="10" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button_submit">
                <button class="button_submit_cancel">Batalkan</button>
                <button class="button_submit_save">Batalkan</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddSupplier'
}
</script>

<style lang="scss" scoped>
.card_add_supplier {
    margin-bottom: 24px;
}

.button_submit {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 24px;

    &_cancel {
        border: none;
        background: transparent;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
    }

    &_save {
        background: #006664;
        border-radius: 10px;
        padding: 12px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border: none;
        margin-left: 16px;
    }
}
</style>