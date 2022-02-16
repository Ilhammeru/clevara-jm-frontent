<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Merek</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-brand>+ merek</button>
            </div>

            <Search placeholder="Search for brand" @searchItem="search" />

            <div class="card jm_card card_brand">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-show="brand.length == 0">
                                <td colspan="4">
                                    <p class="empty_data">Belum ada Merek di database</p>
                                </td>
                            </tr>
                            <tr v-for="item in brand" :key="item.id">
                                <td class="brand_name">{{ item.name }}</td>
                                <td class="brand_action">
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

        <!-- modal -->
        <b-modal
            id="modal-add-brand"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @show="resetModal"
        >
            <div class="jm_modal_title">
                <p>Merek</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama</label>
                        <input type="text" class="jm_input" v-model="form.name" placeholder="Nama">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Deskripsi</label>
                        <textarea class="jm_input" id="" cols="10" rows="5" v-model="form.description"></textarea>
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn" @click.prevent="save">simpan merek</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Unit",
    components: {
        Search
    },
    data() {
        return {
            form: {
                name: "",
                description: ""
            },
            id: "",
            isEdit: false
        }
    },
    methods: {
        async init() {
            await this.$store.dispatch("brand/getAll", {page: 0, count: 10})
        },
        async search(value) {
            await this.$store.dispatch("brand/search", {value: value})
        },
        resetModal() {
            this.form.name = ""
            this.form.description = ""
            this.isEdit = false
        },
        deleteItem(name, id) {
            this.$swal({
                text: 'Anda yakin ingin menghapus merek ' + name + '?',
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
                    await this.$store.dispatch("brand/deleteItem", {id: id})
                    .then(() => {
                        this.$swal('Sukses', 'Hapus data berhasil', 'success')
                        this.$store.dispatch("brand/getAll", {page: 0, count: 10})
                    })
                }
            })
        },
        async save() {
            let param = this.form
            this.$store.dispatch("general/clearError")
            this.$store.dispatch("general/setLoading", true)
            if (this.isEdit) {
                await this.$store.dispatch("brand/update", {param: param, id: this.id})
                this.isEdit = false
            } else {
                await this.$store.dispatch("brand/save", param)
            }
            this.$store.dispatch("general/setLoading", false)
            if (this.$store.getters["general/errorForm"]) {
                this.$toast.error(this.$store.getters["general/errorInput"], {
                    timeout: 3000
                });
            } else {
                this.$toast('Berhasil menyimpan merek', {
                    timeout: 3000
                });
                this.$bvModal.hide('modal-add-brand')
                this.$store.dispatch("brand/getAll", {page: 0, count: 10})
            }
        },
        edit(id) {
            let data = this.$store.getters["brand/listBrand"]
            this.$bvModal.show('modal-add-brand')
            let result = ''
            data.forEach(element => {
                if (element.id == id) {
                    this.form.name = element.name
                    this.form.description = element.description
                }
            });
            this.isEdit = true
            this.id = id
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        brand() {
            return this.$store.getters["brand/showBrand"]
        }
    }
}
</script>

<style lang="scss" scoped>
.brand_name {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    text-transform: capitalize;
}
</style>