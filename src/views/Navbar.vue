<template>
    <div class="jm_navbar">
        <div class="jm_navbar_logo">
            <img src="@/assets/icons/Logo.png" alt="">
            <p>juragan material</p>
        </div>

        <div class="jm_navbar_link_parent">
            <div class="jm_navbar_link">
                <div class="jm_navbar_link_item" v-for="item in data"  v-bind:key="item.id">
                    <div class="jm_navbar_link_item_1 menu-link" :id="item.child.length == 0 ? item.url : ''" @click.prevent="navigate(item.url)">
                        <div class="icon"></div>
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="jm_navbar_link_item_2" v-show="item.child.length > 0" v-for="listItem in item.child" :key="listItem.id">
                        <div class="jm_navbar_link_item_2_item menu-link" @click.prevent="navigate(listItem.url)" :id="listItem.url">
                            <div class="icon"></div>
                            <p class="child_item">{{ listItem.name }}</p>
                        </div>
                    </div>
                </div>
                 <div class="jm_navbar_link_item link_item_profile" @click.prevent="profile">
                    <div class="jm_navbar_link_item_1">
                        <div class="icon"></div>
                        <p>Profile</p>
                    </div>
                </div>
                 <div class="jm_navbar_link_item" @click.prevent="logout">
                    <div class="jm_navbar_link_item_1">
                        <div class="icon"></div>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        data: {
            type: Array
        }
    },
    mounted() {
        let uri = this.$route.path
        let all = document.querySelectorAll('.menu-link')
        for (let a = 0; a < all.length; a++) {
            all[a].classList.remove('menu-active')
        }
        setTimeout(() => {
            let elem = document.getElementById(uri)
            if (elem != undefined || elem != null) {
                elem.classList.add('menu-active')
            }
        }, 1000)
    },
    methods: {
        navigate(path) {
            let all = document.querySelectorAll('.menu-link')
            for (let a = 0; a < all.length; a++) {
                all[a].classList.remove('menu-active')
            }
            document.getElementById(path).classList.add('menu-active')
            this.$router.push(path);
        },
        async logout(){
            await this.axios.get('/auth/logout')
            .then((res) => {
                console.log('logout success', res)
                localStorage.removeItem('jwt')
                localStorage.removeItem('module')
                localStorage.removeItem('isLogin')
                this.$store.dispatch("general/setLogin", false)
                this.$router.push('/')
            })
            .catch(err => {
                console.log('error logout', err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
// general in 1440 px
.menu-active {
    p {
        color: #155724 !important;
        font-weight: bolder !important;
    }
}

.link_item_profile {
    padding-top: 40px;
    border-top: 0.5px solid #DFDFDF;
    margin-top: 40px;
}

.jm_navbar_link_parent {
    overflow-y: auto;
    max-height: 90%;
    &::-webkit-scrollbar {
        display: none;
    }
}

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
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

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
            &_1 {
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
                    cursor: pointer;
                }
            }

            &_2 {
                margin-bottom: 14px;
                &_item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 24px;
                    padding-left: 24px;

                    .icon {
                        width: 24px;
                        height: 24px;
                        border: 1px solid black;
                        border-radius: 5px;
                    }
    
                    .child_item {
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
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>