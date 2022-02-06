<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Artikel</p>
            </div>

            <Search placeholder="Search for categories" :isArticle="true" />
        
            <div class="card jm_card card_banner">
                <div class="card-body">
                    <table class="table jm_table table_banner">
                        <thead>
                            <tr>
                                <th>Judul</th>
                                <th>Caption</th>
                                <th>URL</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in banner" :key="item.id" @click.prevent="detail">
                                <td class="banner_image">
                                    <div class="banner_image_1"></div>
                                </td>
                                <td class="banner_caption">{{ item.caption }}</td>
                                <td class="banner_url">{{ item.url }}</td>
                                <td class="banner_status">
                                    <span :class="item.status == 1 ? 'active' : ''">{{ item.status == 1 ? 'Aktif' : 'Tidak Aktif' }}</span>
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
    name: "Banner",
    components: {
        Search
    },
    data() {
        return {
            banner: [
                {id: 1, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 1},
                {id: 2, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 2},
                {id: 3, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 1},
                {id: 4, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 2},
                {id: 5, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 1},
                {id: 6, title: '', caption: '-', url: 'www.juraganmaterial.id', status: 1},
            ]
        }
    },
    methods: {
        detail() {
            this.$router.push('/media/banner/create')
        }
    }
}
</script>

<style lang="scss" scoped>
.table_banner {
    tbody {
        tr {
            cursor: pointer;
        }
    }
}

.banner_image {
    width: 300px;
    &_1 {
        border: 1px solid #6C6C6C;
        box-sizing: border-box;
        border-radius: 10px;
        width: 200px;
        height: 85px;
    }
}

.banner_status {
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