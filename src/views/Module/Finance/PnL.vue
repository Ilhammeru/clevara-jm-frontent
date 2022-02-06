<template>
    <div class="jm_container">
        <div class="jm_container_context">
            <div class="jm_container_context_breadcrumb">
                <p>Laba Rugi</p>
            </div>

            <Search placeholder="Search for categories" />

            <div class="row">
                <div class="col col-md-4 col-sm-12">
                    <div class="card jm_card card_summary">
                        <div class="card-body">
                            <p class="card_summary_title">Total Pendapatan</p>
                            <p class="card_summary_value">768.484.000</p>
                        </div>
                    </div>
                </div>
                <div class="col col-md-4 col-sm-12">
                    <div class="card jm_card card_summary">
                        <div class="card-body">
                            <p class="card_summary_title">Total Pendapatan</p>
                            <p class="card_summary_value summary_2">768.484.000</p>
                        </div>
                    </div>
                </div>
                <div class="col col-md-4 col-sm-12">
                    <div class="card jm_card card_summary">
                        <div class="card-body">
                            <p class="card_summary_title">Laba Rugi</p>
                            <p class="card_summary_value summary_3">768.484.000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_detail_income">
                <div class="card-body">
                    <div class="jm_container_context_breadcrumb">
                        <p>Detail Pendapatan</p>
                    </div>
                    <div class="detail_income_header">
                        <p class="detail_income_header_text">Item</p>
                        <p class="detail_income_header_text">Total</p>
                    </div>

                    <div class="detail_income_value">
                        <p class="detail_income_value_text">Penjualan</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="detail_income_value custom_detail_income">
                        <p class="detail_income_value_text">Ongkos Kirim</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="detail_income_value">
                        <p class="detail_income_value_text">Pendapatan Lain lain</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="custom_divider"></div>

                    <div class="row">
                        <div class="col col-md-9"></div>
                        <div class="col-md-3">
                            <div class="detail_income_total">
                                <p class="detail_income_total_text">PPN 10%</p>
                                <p class="detail_income_total_value">768.925</p>
                            </div>
                            <div class="detail_income_total">
                                <p class="detail_income_total_text">Sub Total</p>
                                <p class="detail_income_total_value">768.925.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card jm_card card_detail_income">
                <div class="card-body">
                    <div class="jm_container_context_breadcrumb">
                        <p>Detail Pendapatan</p>
                    </div>
                    <div class="detail_income_header">
                        <p class="detail_income_header_text">Item</p>
                        <p class="detail_income_header_text">Total</p>
                    </div>

                    <div class="detail_income_value">
                        <p class="detail_income_value_text">Pembelian</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="detail_income_value custom_detail_income">
                        <p class="detail_income_value_text">Ongkos Kirim</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="detail_income_value">
                        <p class="detail_income_value_text">Pendapatan Lain lain</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>
                    <div class="detail_income_value">
                        <p class="detail_income_value_text">Komisi Sales</p>
                        <p class="detail_income_value_text">768.925.000</p>
                    </div>

                    <div class="custom_divider"></div>

                    <div class="row">
                        <div class="col col-md-9"></div>
                        <div class="col-md-3">
                            <div class="detail_income_total">
                                <p class="detail_income_total_text">PPN 10%</p>
                                <p class="detail_income_total_value">768.925</p>
                            </div>
                            <div class="detail_income_total">
                                <p class="detail_income_total_text">Sub Total</p>
                                <p class="detail_income_total_value">768.925.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    name: 'PnL',
    components: {
        Search
    },
}
</script>

<style lang="scss" scoped>
.card_detail_income {
    margin: 24px 0;

    .card-body {
        padding: 40px !important;

        .detail_income_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;

            &_text {
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: #000000;
            }

            &_text:last-child {
                margin-right: 80px;
            }
        }

        .detail_income_total {
            display: flex;
            align-content: center;
            // justify-content: end;

            &_text {
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: #212121;
            }

            &_value {
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #212121;
                margin-left: 24px;
            }
        }

        .custom_detail_income {
            background: #FAFAFA;
        }

        .detail_income_value {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 12px 10px 12px;

            &_text {
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: #212121;
            }

            &_text:last-child {
                margin-right: 40px;
            }
        }
    }
}

.custom_divider {
    border: 0.5px solid #DFDFDF;
    margin: 40px 0;
}

.card_summary {
    .card-body {
        padding: 40px !important;
    }

    &_title {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #212121;
        margin-bottom: 8px !important;
    }

    &_value {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        letter-spacing: -0.005em;
        color: #212121;
    }

    .summary_2 {
        color: #CA1010;
    }

    .summary_3 {
        color: #006664;
    }
}
</style>