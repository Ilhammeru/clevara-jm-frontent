<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>daftar customer</p>
                <button class="btn jm_green jm_btn">+ produk baru</button>
            </div>

            <Search />

            <div class="card jm_card">
                <div class="card-body custom_card_body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>nama customer</th>
                                <th>email</th>
                                <th class="th_customer_type">tipe</th>
                                <th>no. telepon</th>
                                <th>tanggal daftar</th>
                                <th>referal sales</th>
                                <th>aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in customer" v-bind:key="item.id" @click.prevent="detail({id: item.id, type: item.type_2})" style="cursor: pointer;">
                                <td class="customer_name">{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>
                                    <div class="customer_type">
                                        <span>{{ item.type }}</span>
                                    </div>
                                </td>
                                <td>{{ item.telp }}</td>
                                <td>{{ item.created_at }}</td>
                                <td>{{ item.sales }}</td>
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
    name: "Customer",
    components: {
        Search
    },
    methods: {
        detail(param) {
            this.$router.push('/customer/' + param.id);
        }
    },
    mounted() {
        this.$store.dispatch("customer/getCustomer");
    },
    computed: {
        customer() {
            return this.$store.getters["customer/customer"];
        }
    }
}
</script>

<style lang="scss" scoped>
.customer_name {
    font-style: normal;
    font-weight: bold !important;
    font-size: 14px !important;
    line-height: 140% !important;
    letter-spacing: 0.04em !important;
    color: #006664 !important;
}

.th_customer_type {
    width: 80px;
}

.customer_type {
    padding: 4px 8px 1important;
    background: #F4F4F4;
    border-radius: 10px;
    text-align: center;
    width: 56px;

    span {
        text-transform: capitalize;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #212121;
    }
}

.custom_card_body {
    padding: 40px !important;
}
</style>