<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>diskon</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-discount>+ diskon</button>
            </div>

            <Search placeholder="Search for discount" />

            <div class="card jm_card card_discount">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in discount" :key="item.id">
                                <td class="discount_name">{{ item.name }}</td>
                                <td class="discount_action">
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
            id="modal-add-discount"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Diskon</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Level</label>
                        <input type="text" class="jm_input" placeholder="Level">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Persentase Diskon</label>
                        <input type="text" class="jm_input" placeholder="Persentase Diskon">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Persentase Mitra Sales</label>
                        <input type="text" class="jm_input" placeholder="Persentase Mitra Sales">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan diskon</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Discount",
    components: {
        Search
    },
    data() {
        return {
            discount: [
                {id: 1, name: 'Discount Tier 1'},
                {id: 2, name: 'Discount Tier 2'},
                {id: 3, name: 'Discount Tier 3'},
                {id: 4, name: 'Discount Tier 4'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.discount_name {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}
</style>