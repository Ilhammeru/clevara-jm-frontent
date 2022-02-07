<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Mitra Sales</p>
                <button class="jm_btn jm_green p_white">+ Sales Baru</button>
            </div>

            <Search placeholder="Search for User" :isSales="true" />
        
            <div class="card jm_card card_mitra">
                <div class="card-body">
                    <table class="table jm_table table_mitra">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>No. Telpon</th>
                                <th>Total Order</th>
                                <th>Total Komisi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in mitra" :key="item.id">
                                <td class="mitra_name">{{ item.name }}</td>
                                <td class="mitra_address">{{ item.address }}</td>
                                <td class="mitra_phone">{{ item.phone }}</td>
                                <td class="mitra_total_order">{{ item.totalOrder }}</td>
                                <td class="mitra_comision">{{ item.comision }}</td>
                                <td class="mitra_action">
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
import Search from '@/components/Search.vue'
export default {
    name: "Mitra",
    components: {
        Search
    },
    data() {
        return {
            mitra: [
                {id: 1, name: 'Jaja', address: 'Jl. Adhi Karya Pintu Air, Kedoya Selatan, Kebon Jeruk', phone: '0897979797', totalOrder: '9.000.000', comision: '181.000'},
                {id: 2, name: 'Jaja', address: 'Jl. Adhi Karya Pintu Air, Kedoya Selatan, Kebon Jeruk', phone: '0897979797', totalOrder: '9.000.000', comision: '181.000'},
                {id: 3, name: 'Jaja', address: 'Jl. Adhi Karya Pintu Air, Kedoya Selatan, Kebon Jeruk', phone: '0897979797', totalOrder: '9.000.000', comision: '181.000'},
                {id: 4, name: 'Jaja', address: 'Jl. Adhi Karya Pintu Air, Kedoya Selatan, Kebon Jeruk', phone: '0897979797', totalOrder: '9.000.000', comision: '181.000'},
                {id: 5, name: 'Jaja', address: 'Jl. Adhi Karya Pintu Air, Kedoya Selatan, Kebon Jeruk', phone: '0897979797', totalOrder: '9.000.000', comision: '181.000'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.jm_btn {
    border: none;
}

.table_mitra {
    thead {
        tr {
            th:first-child {
                width: 250px;
            }
        }
    }

    tbody {
        tr {
            .mitra_name {
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #006664;
                width: 200px;
                padding-right: 40px;
            }

            .mitra_address {
                width: 200px;
                padding-right: 40px;
            }
        }
    }
}
</style>