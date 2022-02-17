<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Detail Admin</p>
            </div>

            <div class="card jm_card card_type">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Detail Tipe</p>
                    </div>
                    <div class="jm_form">
                        <div class="row">
                            <div class="col">
                                <div class="jm_form_group">
                                    <label for="">Nama Tipe</label>
                                    <input type="text" class="jm_input" v-model="name" placeholder="Nama Tipe">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_detail_access">
                <div class="card-body">
                    <div class="jm_card_title">
                        <p>Detail Akses</p>
                    </div>

                    <div class="detail_access">
                        <div class="detail_access_header">
                            <p class="detail_access_header_text">Akses Modul</p>
                            <div class="detail_access_header_value">
                                <img src="@/assets/icons/box-checklist.png" @click.prevent="checkAll('unchecked')" id="all-checked" class="d-none" alt="">
                                <div class="unchecked" id="all-unchecked" @click.prevent="checkAll('checked')"></div>
                                <span>Pilih Semua</span>
                            </div>
                        </div>
                        <div class="detail_access_body" v-for="item in module" :key="item.id">
                            <div class="detail_access_body_text">
                                <p class="detail_access_body_text_1">{{ item.name }}</p>
                                <p class="detail_access_body_text_sub" v-for="sub in item.child" :key="sub.id">{{ sub.name }}</p>
                            </div>
                            <div class="detail_access_body_value">
                                <div class="detail_access_body_value_1">
                                    <img src="@/assets/icons/box-checklist.png" @click.prevent="unchooseModule('parent', item.id, item.child)" class="d-none" :id="'parent-' + item.id" alt="">
                                    <div class="unchecked" :id="'unchecked-parent-' + item.id" @click.prevent="chooseModule('parent', item.id)"></div>
                                    <span>Pilih semua</span>
                                </div>
                                <div class="detail_access_body_value_1 sub" v-show="item.child.length > 0" v-for="sub in item.child" :key="sub.id">
                                    <div class="unchecked" :id="'unchecked-sub-' + sub.id" @click.prevent="chooseModule('sub', sub.id, item.id)"></div>
                                    <img src="@/assets/icons/box-checklist.png" @click.prevent="unchooseModule('sub', sub.id)" class="d-none" :id="'sub-' + sub.id" alt="">
                                    <span>Pilih semua</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="button_submit">
                        <button class="button_submit_cancel" @click.prevent="cancel">Batalkan</button>
                        <button class="button_submit_save" @click.prevent="save">Simpan Role</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateAccess",
    data() {
        return {
            name: '',
            roleId: "",
            selectModule: [],
            isEdit: false
        }
    },
    mounted() {
        let uri = this.$route.path
        let split = uri.split('/')
        if (split.length == 5) {
            this.isEdit = true
            this.init(split[split.length - 1])
            this.roleId = split[split.length - 1]
        } else {
            this.isEdit = false
        }
    },
    methods: {
        async save() {
            let dataModule = this.selectModule
            let unique = [...new Set(dataModule)]
            let payload = {
                name: this.name,
                module: unique
            }
            if (unique.length == 0) {
                return this.$toast.error('Modul tidak boleh kosong', {
                    timeout: 3000
                });
            }
            this.$store.dispatch("general/clearError")
            this.$store.dispatch("general/setLoading", true)
            if (this.isEdit) {
                await this.axios.patch("/role/" + this.roleId, payload)
            } else {
                await this.axios.post("/role", payload)
            }
            this.$store.dispatch("general/setLoading", false)
            if (this.$store.getters["general/errorForm"]) {
                this.$toast.error(this.$store.getters["general/errorInput"], {
                    timeout: 3000
                });
            } else {
                this.$toast('Berhasil menyimpan Role', {
                    timeout: 3000
                });
                this.name = ''
                this.selectModule = []
                this.checkAll('unchecked')
                if (this.isEdit) {
                    this.$router.push('/management/access')
                }
            }
        },
        chooseModule(key, id, parentId = '') {
            let elem = document.getElementById(key + '-' + id)
            let unc = document.getElementById('unchecked-' + key + '-' + id)
            if (elem != undefined || unc != undefined) {
                elem.classList.remove('d-none')
                unc.classList.add('d-none')
                this.selectModule.push(id)
            }
            if (parentId != '') {
                let parent = document.getElementById('parent-' + parentId)
                let parentEnc = document.getElementById('unchecked-parent-' + parentId)
                if (parent.classList[0] == 'd-none') {
                    parentEnc.classList.add('d-none')
                    parent.classList.remove('d-none')
                    this.selectModule.push(parentId)
                }
            }
        },
        unchooseModule(key, id, sub = []) {
            let elem = document.getElementById(key + '-' + id)
            let unc = document.getElementById('unchecked-' + key + '-' + id)
            if (elem != undefined) {
                elem.classList.add('d-none')
                unc.classList.remove('d-none')
            }
            if (this.selectModule.length > 0) {
                let index = this.selectModule.indexOf(id)
                this.selectModule.splice(index, 1)
            }

            if (key == 'parent') {
                if (sub != []) {
                    for (let a = 0; a < sub.length; a++) {
                        let childUnc = document.getElementById('unchecked-sub-' + sub[a].id)
                        let child = document.getElementById('sub-' + sub[a].id)
                        if (childUnc.classList[1] == 'd-none') {
                            let index = this.selectModule.indexOf(sub[a].id)
                            this.selectModule.splice(index, 1)
                        }
                        childUnc.classList.remove('d-none')
                        child.classList.add('d-none')
                    }   
                }
            }
        },
        checkAll(key) {
            let check = document.getElementById("all-checked")
            let uncheck = document.getElementById("all-unchecked")
            let data = this.module
            if (key == 'checked') {
                for (let a = 0; a < data.length; a++) {
                    let itemCheck = document.getElementById('parent-' + data[a].id)
                    let itemUncheck = document.getElementById('unchecked-parent-' + data[a].id)
                    itemCheck.classList.remove('d-none')
                    itemUncheck.classList.add('d-none')
                    this.selectModule.push(data[a].id)

                    if (data[a].child.length > 0) {
                        for (let b = 0; b < data[a].child.length; b++) {
                            let subCheck = document.getElementById('sub-' + data[a].child[b].id)
                            let subUncheck = document.getElementById('unchecked-sub-' + data[a].child[b].id)
                            subCheck.classList.remove('d-none')
                            subUncheck.classList.add('d-none')
                            this.selectModule.push(data[a].child[b].id)
                        }
                    }
                }
                check.classList.remove('d-none')
                uncheck.classList.add('d-none')
            } else {
                for (let a = 0; a < data.length; a++) {
                    let itemCheck = document.getElementById('parent-' + data[a].id)
                    let itemUncheck = document.getElementById('unchecked-parent-' + data[a].id)
                    itemCheck.classList.add('d-none')
                    itemUncheck.classList.remove('d-none')

                    if (data[a].child.length > 0) {
                        for (let b = 0; b < data[a].child.length; b++) {
                            let subCheck = document.getElementById('sub-' + data[a].child[b].id)
                            let subUncheck = document.getElementById('unchecked-sub-' + data[a].child[b].id)
                            subCheck.classList.add('d-none')
                            subUncheck.classList.remove('d-none')
                        }
                    }
                }
                this.selectModule = []
                check.classList.add('d-none')
                uncheck.classList.remove('d-none')
            }
        },
        async init(id) {
            await this.$store.dispatch("role/getRoleById", {id: id})
            let data = this.$store.getters["role/detailRole"]
            if (data != '') {
                this.name = data[0].name
                for (let a = 0; a < data[0].module.length; a++) {
                    if (data[0].module[a].module.parent == null) {
                        let parentCheck = document.getElementById('parent-' + data[0].module[a].module_id)
                        let parentUncheck = document.getElementById('unchecked-parent-' + data[0].module[a].module_id)
                        parentCheck.classList.remove('d-none')
                        parentUncheck.classList.add('d-none')
                    } else {
                        let subCheck = document.getElementById('sub-' + data[0].module[a].module_id)
                        let subUncheck = document.getElementById('unchecked-sub-' + data[0].module[a].module_id)
                        subCheck.classList.remove('d-none')
                        subUncheck.classList.add('d-none')
                    }

                    this.selectModule.push(data[0].module[a].module_id)
                }
            }
        },
        cancel() {
            this.$router.push('/management/access')
        }
    },
    computed: {
        module() {
            let data = this.$store.getters["auth/module"]
            if (data == []) {
                data = JSON.parse(localStorage.getItem('module'))
            }
            return data
        }
    }
}
</script>

<style lang="scss" scoped>
.card_detail_access {
    margin-top: 24px;
}

.unchecked {
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}

.button_submit {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 24px 0;

    &_cancel {
        background: transparent;
        margin-right: 40px;
        border: none;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #006664;
    }

    &_save {
        border: none;
        background: #006664;
        border-radius: 10px;
        padding: 12px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
}

.detail_access_body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 21px 0;
    border-bottom: 1px solid #DFDFDF;

    &_text {
        cursor: pointer;

        &_1 {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 160%;;
            letter-spacing: -0.005em;
            color: #000000;
        }

        &_sub {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 160%;;
            letter-spacing: -0.005em;
            color: #000000;
            padding: 12px 0 12px 24px;
        }
    }

    &_value {
        align-items: center;
        cursor: pointer;

        &_1 {
            display: flex;
        
            span {
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: transparent;
                margin-left: 20px;
            }
        }

        &_1.sub {
            padding: 12px 0;
        }
    }
}

.detail_access_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 21px;
    border-bottom: 1px solid #DFDFDF;

    &_text {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #000000;
    }

    &_value {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 160%;
            letter-spacing: -0.005em;
            color: #000000;
            margin-left: 16px;
        }
    }
}
</style>