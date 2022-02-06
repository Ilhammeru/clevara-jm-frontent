<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Kategori Artikel</p>
                <button class="jm_btn jm_green p_white" v-b-modal.modal-add-article-category>+ Kategori</button>
            </div>

            <Search placeholder="Search for categories" :isArticle="true" />

            <div class="card jm_card card_article_category">
                <div class="card-body">
                    <table class="table jm_table table_article_category">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Deskripsi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in category" :key="item.id" v-b-modal.modal-add-article-category>
                                <td>{{ item.name }}</td>
                                <td>{{ item.description }}</td>
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

        <!-- modal add category -->
        <b-modal
            id="modal-add-article-category"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Detail Kategori Artikel</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama kategori</label>
                        <input type="text" class="jm_input" placeholder="Nama Kategori">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Deskripsi</label>
                    <textarea class="jm_input"  cols="10" rows="4"></textarea>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn mt-4">simpan Kategori</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "ArticleCategory",
    components: {
        Search
    },
    data() {
        return {
            category: [
                {id: 1, name: 'Event', description: 'Event Description'},
                {id: 2, name: 'Event', description: 'Event Description'},
                {id: 3, name: 'Event', description: 'Event Description'},
                {id: 4, name: 'Event', description: 'Event Description'},
                {id: 5, name: 'Event', description: 'Event Description'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table_article_category {
    thead {
        tr {
            th {
                width: calc(100% / 3);
            }

            th:last-child {
                text-align: center;
            }
        }
    }

    tbody {
        tr {
            cursor: pointer;

            .jm_table_action {
                justify-content: center;
            }

            td:last-child {
                text-align: center
            }
        }
    }
}

.jm_btn {
    border: none;
}
</style>