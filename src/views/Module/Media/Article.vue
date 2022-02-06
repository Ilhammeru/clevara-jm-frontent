<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Artikel</p>
            </div>

            <Search placeholder="Search for categories" :isArticle="true" />

            <div class="card jm_card card_article">
                <div class="card-body">
                    <table class="table jm_table table_article">
                        <thead>
                            <tr>
                                <th>Judul</th>
                                <th>Sub Judul</th>
                                <th>Penulis</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in article" :key="item.id">
                                <td class="article_title">{{ item.title }}</td>
                                <td class="article_sub">{{ item.sub }}</td>
                                <td class="article_createdBy">{{ item.createdBy }}</td>
                                <td class="article_status">
                                    <span :class="item.status == 1 ? 'active' : ''">{{ item.status == 1 ? 'Published' : 'Draft' }}</span>
                                </td>
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
    name: "Article",
    components: {
        Search
    },
    data() {
        return {
            article: [
                {id: 1, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '1'},
                {id: 2, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '1'},
                {id: 3, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '1'},
                {id: 4, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '2'},
                {id: 5, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '2'},
                {id: 6, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '2'},
                {id: 7, title: 'Bahan Bangunan Paling Penting Dalam Konstruksi Yang Perlu Kamu Ketahui', sub: 'Memilih Bahan Bangunan', createdBy: 'Super Admin', status: '1'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.article_title {
    width: 300px;
    padding-right: 40px;
}

.article_status {
    span {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #212121;
        background: #F4F4F4;
        border-radius: 10px;
        padding: 4px 8px;
    }

    .active {
        background: #006664;
        color: #FFFFFF;
    }
}
</style>