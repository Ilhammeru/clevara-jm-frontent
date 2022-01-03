<template>
    <div class="jm_navbar">
        <div class="jm_navbar_logo">
            <img src="@/assets/icons/Logo.png" alt="">
            <p>juragan material</p>
        </div>

        <div class="jm_navbar_link">
            <div class="jm_navbar_link_item" @click.prevent="navigate(item.link)" v-for="item in navbar"  v-bind:key="item.id">
                <div class="icon"></div>
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        navigate(path) {
            this.$router.push(path);
        }
    },
    data() {
        return {
            navbar: [
                {
                    id: 1,
                    icon: 'icon/path',
                    name: 'dashboard',
                    link: '/'
                },
                {
                    id: 2,
                    icon: '/customer',
                    name: 'customer',
                    link: '/customer',
                    children: [
                        {
                            path: 'approval',
                            link: '/approval'
                        }
                    ]
                },
                {
                    id: 3,
                    icon: 'icon/path',
                    name: 'Customer Approval',
                    link: '/approval'
                },
                {
                    id: 4,
                    icon: 'icon/path',
                    name: 'dashboard',
                    link: '/'
                },
                {
                    id: 5,
                    icon: 'icon/path',
                    name: 'dashboard',
                    link: '/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
// general in 1440 px
.jm_navbar {
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    background: #FFF;
    width: 247px;
    padding: 40px;
    padding-top: 80px;
    text-align: left;

    &_logo {
        display: flex;
        align-items: center;
        margin-bottom: 42.5px;

        img {
            width: 42.54px;
            height: 40px;
        }

        p {
            text-transform: capitalize;
            margin-left: 16px;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #212121;
        }
    }

    &_link {
        &_item {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            cursor: pointer;

            .icon {
                width: 24px;
                height: 24px;
                border: 1px solid black;
                border-radius: 5px;
            }

            p {
                text-transform: capitalize;
                padding-left: 16px;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: #212121;
                margin-bottom: 0;
                margin-top: 0;
            }
        }
    }
}
</style>