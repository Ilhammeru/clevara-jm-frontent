<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>kategori produk</p>
                <button class="btn jm_green jm_btn" v-b-modal.modal-add-category>+ kategori baru</button>
            </div>

            <Search placeholder="Search for categories" />

            <div class="card jm_card card_category">
                <div class="card-body">
                    <table class="table jm_table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Order</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in category" :key="item.id">
                                <td class="category_name">{{ item.name }}</td>
                                <td class="category_order">{{ item.order }}</td>
                                <td class="category_status">
                                    <button class="category_status_button">
                                        {{ item.status ? 'aktif' : 'tidak aktif' }}
                                    </button>
                                </td>
                                <td class="category_action">
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
            id="modal-add-category"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Kategori</p>
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
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Order</label>
                        <input type="text" class="jm_input" placeholder="0">
                    </div>
                </div>
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Status</label>
                        <div class="button_status_group">
                            <button class="btn_status" id="btn_status_1" @click.prevent="chooseStatus('status', 1)">Aktif</button>
                            <button class="btn_status" id="btn_status_2" @click.prevent="chooseStatus('status', 2)">Tidak Aktif</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn w-100 jm_green jm_btn">simpan item</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Category",
    components: {
        Search
    },
    data() {
        return {
            category: [
                {id: 1, name: 'Alat Pemadang Api Ringan (APAR)', order: '100', status: true},
                {id: 2, name: 'Alat Pemadang Api Ringan (APAR)', order: '100', status: true},
                {id: 3, name: 'Alat Pemadang Api Ringan (APAR)', order: '100', status: true},
                {id: 4, name: 'Alat Pemadang Api Ringan (APAR)', order: '100', status: true}
            ]
        }
    },
    methods: {
        chooseStatus(param, value) {
            let all = document.querySelectorAll('.btn_status')
            let elem = document.getElementById('btn_' + param + '_' + value)
            
            for (let a = 0; a < all.length; a++) {
                all[a].classList.remove('active')
            }
            elem.classList.add('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.button_status_group {
    display: flex;
    align-items: center;

    button {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #A9A9A9;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        background: transparent;
        padding: 8px 16px;
        margin-right: 12px;

        &:focus {
            box-shadow: none;
        }
    }

    button.active {
        border: 0.5px solid #006664;
        color: #006664;
    }
}

.table {
    thead {
        tr {
            th:nth-child(2),
            th:nth-child(3),
            th:last-child {
                text-align: center;
            }
        }
    }
}

.category_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    width: 300px;
}

.category_order {
    width: 300px;
    text-align: center;
}

.category_action {
    text-align: center;

    .jm_table_action {
        justify-content: end;
    }
}

.category_status {
    text-align: center;
    width: 300px;

    &_button {
        padding: 4px 8px !important;
        background: #006664;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border: none;
        text-transform: capitalize;
    }
}
</style>