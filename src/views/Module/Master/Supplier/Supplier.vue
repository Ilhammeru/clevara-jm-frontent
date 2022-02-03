<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Pemasok</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-brand>+ pemasok</button>
            </div>

            <Search placeholder="Search for supplier" />

            <div class="card jm_card card_supplier">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table jm_table">
                            <thead>
                                <tr>
                                    <th>nama</th>
                                    <th>PIC</th>
                                    <th>termin</th>
                                    <th>email</th>
                                    <th>alamat</th>
                                    <th>aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in supplier" :key="item.id">
                                    <td class="supplier_name">{{ item.name }}</td>
                                    <td>{{ item.pic }}</td>
                                    <td>{{ item.termin }}</td>
                                    <td>{{ item.email }}</td>
                                    <td class="supplier_address">{{ item.address }}</td>
                                    <td class="supplier_action">
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
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Supplier",
    components: {
        Search
    },
    data() {
        return {
            supplier: [
                {id: 1, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'},
                {id: 2, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'},
                {id: 3, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'},
                {id: 4, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'},
                {id: 5, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'},
                {id: 6, name: 'Inti Gilang Sakama, PT', pic: 'Eka', termin: 'termin', email: 'intigilang@gmail.com', address: 'Jl. KH Hasyim Ashari Gg. H. Pendek No.21, RT.005/RW.003, Nerogtog, Kec. Pinang, Kota Tangerang, Banten 15145'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.supplier_action {
    justify-content: center;
    display: flex;
}

.table thead tr th:last-child {
    text-align: center;
}

.supplier_name {
    width: 200px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}

.supplier_address {
    width: 250px;
}

@media all and(min-width: 1113px) and (max-width: 1300px) {
    .table-responsive {
        overflow-x: auto;

        .table {
            width: 120%;
        }
    }
}
</style>