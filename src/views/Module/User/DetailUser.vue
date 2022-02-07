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
                                    <input type="text" class="jm_input" placeholder="Nama Tipe">
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
                                <img src="@/assets/icons/box-checklist.png" alt="">
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
                                    <img src="@/assets/icons/box-checklist.png" alt="">
                                    <span>Pilih semua</span>
                                </div>
                                <div class="detail_access_body_value_1 sub" v-show="item.child.length > 0" v-for="sub in item.child" :key="sub.id">
                                    <img src="@/assets/icons/box-checklist.png" alt="">
                                    <span>Pilih semua</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailUser",
    data() {
        return {
            module: [
                {id: 1, name: 'Approval Product', child: []},
                {id: 2, name: 'Dasbor', child: []},
                {id: 3, name: 'Customer', child: [
                    {id:1, name: 'Tipe'},
                    {id:2, name: 'Customer'},
                    {id:3, name: 'Approval Customer'}
                ]}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.card_detail_access {
    margin-top: 24px;
}

.detail_access_body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 21px 0;
    border-bottom: 1px solid #DFDFDF;

    &_text {

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