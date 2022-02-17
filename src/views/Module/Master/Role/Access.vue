<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Daftar Akses</p>
                <button class="jm_btn jm_green p_white" @click.prevent="create">+ Akses Baru</button>
            </div>

            <Search placeholder="Search for User" @searchItem="search"/>

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
                                <td class="access_name">{{ item.name }}</td>
                                <td class="access_slug">{{ item.slug }}</td>
                                <td class="access_action">
                                    <div class="jm_table_action">
                                        <span @click.prevent="edit(item.id)">edit</span>
                                        <span @click.prevent="deleteItem(item.name, item.id)">hapus</span>
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
            isEdit: false
        }
    },
    methods: {
        async init() {
            await this.$store.dispatch("role/getAll", {page: 0, count: 10})
        },
        create() {
            return this.$router.push('/management/access/create')
        },
        deleteItem(name, id) {
            this.$swal({
                text: 'Anda yakin ingin menghapus role ' + name + '?',
                title: 'Hapus data',
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ya, Hapus data",
                cancelButtonText: "Tidak",
                closeOnConfirm: true,
                closeOnCancel: true 
            })
            .then(async (confirmed) => {
                if (confirmed.isConfirmed) {
                    await this.axios.delete("/role/" + id)
                    .then(() => {
                        this.$swal('Sukses', 'Hapus data berhasil', 'success')
                        this.$store.dispatch("role/getAll", {page: 0, count: 10})
                    })
                }
            })
        },
        edit(id) {
            this.$router.push('/management/access/edit/' + id)
        },
        async search(value) {
            await this.$store.dispatch("role/search", {value: value})
        },
    },
    mounted() {
        this.init()
    },
    computed: {
        access()  {
            return this.$store.getters["role/showRole"]
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
    text-transform: capitalize;
}
</style>