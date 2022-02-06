<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Promo</p>
                <button class="btn jm_green jm_btn" @click.prevent="add">+ promo</button>
            </div>

            <Search placeholder="Search for categories" />

            <div class="card jm_card card_promo">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Diskon</th>
                                <th>Mulai</th>
                                <th>Berakhir</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in promo" :key="item.id">
                                <td class="promo_name">{{ item.name }}</td>
                                <td class="promo_discount">{{ item.discount }}</td>
                                <td class="promo_start">{{ item.start }}</td>
                                <td class="promo_end">{{ item.end }}</td>
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
    name: "Promo",
    components: {
        Search
    },
    data() {
        return {
            promo: [
                {id: 1, name: 'Promo 3%', discount: '3%', start: '11-08-2022', end: '15-08-2022'},
                {id: 2, name: 'Promo 3%', discount: '3%', start: '11-08-2022', end: '15-08-2022'},
                {id: 3, name: 'Promo 3%', discount: '3%', start: '11-08-2022', end: '15-08-2022'},
                {id: 4, name: 'Promo 3%', discount: '3%', start: '11-08-2022', end: '15-08-2022'},
                {id: 5, name: 'Promo 3%', discount: '3%', start: '11-08-2022', end: '15-08-2022'}
            ]
        }
    },
    methods: {
        add() {
            this.$router.push('/promo/create')
        }
    }
}
</script>

<style lang="scss" scoped>
.promo_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    width: 350px;
}

.promo_discount {
    width: 200px;
}

@media all and(min-width: 1113px) and(max-width: 1300px) {
    .promo_name,
    .promo_discount {
        width: auto;
    }
}
</style>