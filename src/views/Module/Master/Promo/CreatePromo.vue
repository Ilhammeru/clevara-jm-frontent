<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Promo</p>
            </div>

            <div class="card jm_card card_detail_promo">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>PO</p>
                    </div>

                    <div class="jm_form">
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Nama Promo</label>
                                    <input type="text" class="jm_input" placeholder="Nama Promo">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Diskon</label>
                                    <input type="text" class="jm_input" placeholder="%">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Tanggal Mulai</label>
                                    <input type="date" class="jm_input" placeholder="Nama Promo">
                                </div>
                            </div>
                            <div class="col col-md-6 col-sm-12">
                                <div class="jm_form_group">
                                    <label for="">Tanggal Berakhir</label>
                                    <input type="date" class="jm_input" placeholder="%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_promo_item">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>PO</p>
                        <button class="jm_btn button_add_item">+ Item</button>
                    </div>
                    <table class="jm_table table table_item">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Item</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list,i) in item" :key="list.id">
                                <td>{{ i + 1 }}</td>
                                <td class="item_name">{{ list.name }}</td>
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
        </div>

    </div>
</template>

<script>
export default {
    name: "CreatePromo",
    data() {
        return {
            item: [
                {id: 1, name: 'Keramik Pegasus 40X40 40736 Cream'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.card_promo_item {
    margin-top: 24px;
}

.button_add_item {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    padding: 12px 24px;
    border: 1px solid #006664;
    box-sizing: border-box;
    border-radius: 10px;
    background: transparent;
}

.item_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #212121;
    width: 900px;
}

@media all and(min-width: 1113px) and(max-width: 1400px) {
    .item_name {
        width: auto;
    }
}
</style>