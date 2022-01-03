<template>
    <div class="jm_container_search">
        <input type="text" class="jm_container_search_input_default" :placeholder="placeholder">

        <div class="jm_container_search_btn_group_default">
            <button class="btn jm_btn_transparent">Filter Kolom</button>
            <button class="btn jm_btn_transparent btn_export">Export</button>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_export {
    margin-left: 16px;
}
</style>