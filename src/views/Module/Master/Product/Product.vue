<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>daftar produk</p>
                <button class="btn jm_green jm_btn">+ produk baru</button>
            </div>
            
            <Search placeholder="Search for products" />

            <table class="table jm_table">
                <thead>
                    <tr>
                        <th>nama customer</th>
                        <th>Merek</th>
                        <th>pemasok</th>
                        <th>berat</th>
                        <th>dimensi</th>
                        <th>COGS</th>
                        <th>harga retail</th>
                        <th>harga kontraktor</th>
                        <th>status review</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in product" v-bind:key="item.id" @click.prevent="detail(item.id)" style="cursor: pointer;">
                        <td class="product_name">{{ item.name }}</td>
                        <td class="product_merk">{{ item.merk }}</td>
                        <td>{{ item.supplier }}</td>
                        <td>{{ item.weight }}</td>
                        <td>{{ item.dimension }}</td>
                        <td>{{ item.COGS }}</td>
                        <td>{{ item.retailPrice }}</td>
                        <td>{{ item.contractorPrice }}</td>
                        <td class="product_icon">
                            <div class="icon">
                                <img src="@/assets/icons/checklist.png" alt="">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>

    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Product",
    components: {
        Search
    },
    methods: {
        detail(id) {
            this.$router.push('/product/' + id)
        }
    },
    mounted() {
        this.$store.dispatch("inventory/getProduct");
    },
    computed: {
        product() {
            return this.$store.getters["inventory/listProduct"];
        }
    }
}
</script>

<style lang="scss" scoped>
.jm_table {
    thead {
        tr {
            th:last-child {
                text-align: center;
            }
        }
    }
    tbody {
        tr {
            .product_name {
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #006664 !important;
                text-transform: capitalize;
                width: 180px;
            }

            .product_merk {
                width: 80px;
            }

            .product_icon {
                display: flex;
                justify-content: center;

                .icon {
                    background: #006664;
                    border-radius: 50px;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                }
            }

        }
    }
}
</style>