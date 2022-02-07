<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Wilayah</p>
                <button class="jm_btn jm_green p_white" v-b-modal.modal-add-region>+ Wilayah</button>
            </div>

            <Search placeholder="Search for User"/>

            <div class="card jm_card card_region">
                <div class="card-body">
                    <table class="table jm_table table_region">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Negara</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in region" :key="item.id">
                                <td class="region_name">{{ item.name }}</td>
                                <td>{{ item.country }}</td>
                                <td class="region_status">
                                    <span>{{ item.status == 1 ? 'Aktif' : 'Tidak aktif' }}</span>
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

        <!-- modal -->
        <b-modal
            id="modal-add-region"
            centered
            modal-class="jm_modal"
            title="BootstrapVue"
            @hidden="resetModal"
        >
            <div class="jm_modal_title">
                <p>Detail Wilayah</p>
            </div>

            <div class="row">
                <div class="col">
                    <div class="jm_form_group">
                        <label for="">Nama</label>
                        <input type="text" class="jm_input" placeholder="Nama">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-6 col-sm-12">
                    <div class="jm_form_group">
                        <label for="">Negara</label>
                        <input type="text" class="jm_input" placeholder="Indonesia">
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

            <button class="btn w-100 jm_green jm_btn">simpan Wilayah</button>
        </b-modal>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: "Region",
    components: {
        Search
    },
    data() {
        return {
            region: [
                {id: 1, name: 'Aceh', country: 'Indonesio', status: 1},
                {id: 2, name: 'Aceh', country: 'Indonesio', status: 1},
                {id: 3, name: 'Aceh', country: 'Indonesio', status: 2},
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
.jm_btn {
    border: none;
}

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

.region_status {
    span {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        background: #006664;
        border-radius: 10px;
        padding: 4px 8px;
    }
}

.region_name {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #006664;
    width: calc(100%/4);
}
</style>