<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Admin</p>
                <button class="jm_btn jm_green p_white" v-b-modal.modal-add-article-category>+ Admin</button>
            </div>

            <Search placeholder="Search for User"/>
        
            <div class="card jm_card card_user">
                <div class="card-body">
                    <table class="table jm_table table_user">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Jenis Akses</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in user" :key="item.id">
                                <td class="user_name">{{ item.name }}</td>
                                <td class="user_email">{{ item.email }}</td>
                                <td class="user_type">
                                    <span :class="item.type == 1 ? 'active' : ''">{{ item.type == 1 ? 'Super Admin' : 'admin' }}</span>
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
    name: "User",
    components: {
        Search
    },
    data() {
        return {
            user: [
                {id: 1, name: 'Super Adinistrator', email: 'superadmin@gmail.com', type: '1'},
                {id: 2, name: 'Admin', email: 'admin@gmail.com', type: '2'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table_user {
    tbody {
        tr {
            cursor: pointer;

            td {
                font-family: 'cabin-regular' !important;
            }
        }
    }
}

.jm_btn {
    border: none;
}

.user_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
}

.user_type {
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
}
</style>