<template>
    <div class="jm_container_search">
        <input type="text" class="jm_container_search_input_default" :placeholder="placeholder">

        <div>
            <button class="btn jm_btn_transparent btn_date" v-show="isSales">
                Periode: 
                <span class="helper_date">01/08/2021 - 14/08/2021</span>
            </button>
            <button class="btn jm_btn_transparent" v-show="isSales">Status</button>
            <button class="btn jm_btn_transparent" v-show="isSales">Filter Kolom</button>
            <button class="btn jm_btn_transparent btn_export" v-show="isSales">Export</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search",
    props: {
        placeholder: {
            type: String,
            default: 'Search for clients, status'
        },
        isSales: {
            type: Boolean,
            default: false
        },
        isArticle: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    margin-left: 16px;
}

.jm_container_search {
    padding: 12px;
}

.custom_container {
    justify-content: inherit;
}

.helper_date {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #A9A9A9;
}

@media all and(min-width: 1113px) and(max-width: 1300px) {
    button {
        padding: 16px !important;
        font-size: 12px;
    }

    .helper_date {
        font-size: 10px;
    }

    .jm_container_search_input_default {
        width: 200px;
    }
}

@media all and(min-width: 1301px) and(max-width: 1440px) {
    button {
        padding: 16px !important;
        font-size: 12px;
    }

    .helper_date {
        font-size: 10px;
    }

    .jm_container_search_input_default {
        width: 550px;
    }
}
</style>