<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Satuan</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-unit>+ satuan</button>
            </div>

            <Search placeholder="Search for categories" />

            <div class="card jm_card card_unit">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in unit" :key="item.id">
                                <td class="unit_name">{{ item.name }}</td>
                                <td class="unit_action">
                                    <div class="jm_table_action">
                                        <span>ubah</span>
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
        <!-- modal add category -->
        <b-modal
            id="modal-add-unit"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
        >
            <div class="jm_modal_title">
                <p>Satuan</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama</label>
                        <input type="text" class="jm_input" placeholder="Nama">
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan satuan</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Unit",
    components: {
        Search
    },
    data() {
        return {
            unit: [
                {id: 1, name: 'Buah'},
                {id: 2, name: 'Gram'},
                {id: 3, name: 'Kilogram'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.unit_name {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}
</style>