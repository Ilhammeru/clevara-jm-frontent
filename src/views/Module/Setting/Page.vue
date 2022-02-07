<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Admin</p>
                <button class="jm_btn jm_green p_white" v-b-modal.modal-add-article-category>+ Admin</button>
            </div>

            <Search placeholder="Search for User"/>

            <div class="card jm_card card_page">
                <div class="card-body">
                    <table class="table jm_table table_page">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in page" :key="item.id">
                                <td class="page_name">{{ item.name }}</td>
                                <td class="page_action">
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
    name: "Page",
    components: {
        Search
    },
    data() {
        return {
            page: [
                {id: 1, name: 'Buah'},
                {id: 2, name: 'Buah'},
                {id: 3, name: 'Buah'},
                {id: 4, name: 'Buah'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.page_name {
    width: 90%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}

.jm_btn {
    border: none;
    
}
</style>