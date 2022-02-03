<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Harga fluktuasi</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-fluctuation>+ Fluktuasi</button>
            </div>

            <Search placeholder="Search for discount" />

            <div class="card jm_card card_price_fluctuation">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Produk</th>
                                <th>Tanggal</th>
                                <th>Harga Retail</th>
                                <th>Harga Kontraktor</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in price" :key="item.id">
                                <td class="price_name">{{ item.product }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.retailPrice }}</td>
                                <td>{{ item.contractorPrice }}</td>
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

        <!-- modal -->
        <b-modal
            id="modal-add-fluctuation"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Tambah Fluktuasi</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Produk</label>
                        <select class="jm_input" id="">
                            <option value="">Produk</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Tanggal</label>
                        <input type="date" class="jm_input" placeholder="dd/mm/yyy">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Harga Retail</label>
                        <input type="text" class="jm_input" placeholder="Harga Retail">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Harga Kontraktor</label>
                        <input type="text" class="jm_input" placeholder="Harga Kontraktor">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan Fluktuasi</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "FluctuationPrice",
    components: {
        Search
    },
    data() {
        return {
            price: [
                {id: 1, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'},
                {id: 2, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'},
                {id: 3, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'},
                {id: 4, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'},
                {id: 5, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.price_name {
    width: 400px;
    padding-right: 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}
</style>