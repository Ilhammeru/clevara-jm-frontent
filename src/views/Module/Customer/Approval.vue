<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>approval customer</p>
            </div>

            <Search placeholder="Search approval" />

            <div class="card jm_card">
                <div class="card-body custom_card_body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>nama customer</th>
                                <th>email</th>
                                <th>no. telepon</th>
                                <th>tanggal daftar</th>
                                <th>aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in approval" v-bind:key="item.id" @click.prevent="detail({id: item.id, type: item.type_2})" style="cursor: pointer;">
                                <td class="customer_name">{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.telp }}</td>
                                <td>{{ item.created_at }}</td>
                                <td>
                                    <div class="jm_table_action">
                                        <span>approve</span>
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
    name: "Approval",
    components: {
        Search
    },
    methods: {
        getData() {
            this.$store.dispatch("customer/getCustomerApproval");
        }
    },
    computed: {
        approval() {
            return this.$store.getters["customer/customerApproval"];
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style lang="scss" scoped>
.custom_card_body {
    padding: 40px !important;
}
</style>