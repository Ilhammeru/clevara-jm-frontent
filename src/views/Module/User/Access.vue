<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Akses</p>
                <button class="jm_btn jm_green p_white" v-b-modal.modal-add-article-category>+ Akses Baru</button>
            </div>

            <Search placeholder="Search for User"/>

            <div class="card jm_card card_access">
                <div class="card-body">
                    <table class="table jm_table table_access">
                        <thead>
                            <tr>
                                <th>Akses</th>
                                <th>Slug</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in access" :key="item.id">
                                <td class="access_name">{{ item.access }}</td>
                                <td class="access_slug">{{ item.slug }}</td>
                                <td class="access_action">
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
    name: "Access",
    components: {
        Search
    },
    data() {
        return {
            access: [
                {id: 1, access: 'Super Admin', slug: 'super-admin'},
                {id: 2, access: 'Admin', slug: 'admin'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.jm_btn {
    border: none;
}

.table_access {
    thead {
        tr {
            th {
                width: calc(100%/3);
            }

            th:last-child {
                text-align: center;
            }
        }
    }
    tbody {
        tr {
            cursor: pointer;
            
            td:last-child {
                display: flex;
                justify-content: center;
            }
        }
    }
}

.access_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}
</style>