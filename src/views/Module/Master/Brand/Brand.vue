<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Merek</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-brand>+ merek</button>
            </div>

            <Search placeholder="Search for brand" />

            <div class="card jm_card card_brand">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in merk" :key="item.id">
                                <td class="brand_name">{{ item.name }}</td>
                                <td class="brand_action">
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
        <!-- modal add category -->
        <b-modal
            id="modal-add-brand"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Merek</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama</label>
                        <input type="text" class="jm_input" placeholder="Nama">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Deskripsi</label>
                        <textarea class="jm_input" id="" cols="10" rows="5"></textarea>
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan merek</button>
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
            merk: [
                {id: 1, name: 'American Standart'},
                {id: 2, name: 'American Standart'},
                {id: 3, name: 'American Standart'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.brand_name {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}
</style>