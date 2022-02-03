<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Update Harga</p>
                <button class="btn jm_green jm_btn" @click.prevent="create">+ Update Harga</button>
            </div>

            <Search placeholder="Search for discount" />

            <div class="card jm_card card_price_update">
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
                            <tr v-for="item in priceUpdate" :key="item.id">
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
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "PriceUpdate",
    components: {
        Search
    },
    data() {
        return {
            priceUpdate: [
                {id: 1, product: 'Bata Ringan AA Block Ukuran 10x20x60 cm (12.6 m3) per 1 DO', date: '11-08-2021', retailPrice: '71.935.000', contractorPrice: '71.935.000'}
            ]
        }
    },
    methods: {
        create() {
            this.$router.push('/update-price/create')
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