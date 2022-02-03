<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Update Harga</p>
            </div>

            <div class="card jm_card card_create_update_price">
                <div class="card-body">
                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Kategori</label>
                                    <select class="jm_input" id="">
                                        <option value="">Pilih Kategori</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Merek</label>
                                    <select class="jm_input" id="">
                                        <option value="">Pilih Merek</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ro">
                            <div class="col col-md-4 col-sm-6">
                                <div class="jm_form_group">
                                    <label for="">Kenaikan</label>
                                    <input type="text" class="form-control" placeholder="0%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button_group">
                <button class="button_group_cancel">Batalkan</button>
                <button class="button_group_save">Update Harga</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreatePriceUpdate"
}
</script>

<style lang="scss" scoped>
.card_create_update_price {
    margin-bottom: 24px;
}

.button_group {
    display: flex;
    align-items: center;
    justify-content: end;

    &_cancel {
        margin-right: 24px;
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
        border: none;
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