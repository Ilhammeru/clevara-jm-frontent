<template>
    <div class="main_login">
        <div class="card jm_card">
            <div class="card-body">
                <div class="icon">
                    <img src="@/assets/logo_full_new.png" alt="">
                    <!-- <p class="icon-text">Juragan Material</p> -->
                </div>
                <div class="form" id="form">
                    <div class="form-group">
                        <input type="text" class="form-control jm_input w-100" placeholder="Email yang terdaftar" v-model="form.email">
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="jm_btn jm_green p_white w-100 btn-login" @click.prevent="send">Kirim</button>
                        </div>
                    </div>
                </div>
                <div class="success d-none" id="success">
                    <p class="success_text"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmEmail",
    data() {
        return {
            form: {
                email: ""
            }
        }
    },
    methods: {
        async send() {
            let data = this.form
            this.$store.dispatch("general/setLoading", true)
            await this.axios.post('/auth/confirm-email', data)
            .then((res) => {
                this.$store.dispatch("general/setLoading", false)
                console.log('success confirmation email', res)
                document.getElementById('success').classList.remove('d-none')
                document.getElementById('form').classList.add('d-none')
                document.querySelector('.success_text').textContent = res.data.message
            })
            .catch(err => {
                console.log('error confirmation email', err)
                this.$store.dispatch("general/setLoading", false)
                document.getElementById('form').classList.remove('d-none')
                document.getElementById('success').classList.add('d-none')
                if (err.response.data != undefined) {
                    this.$toast.error(err.response.data.message, {
                    timeout: 3000
                });
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    padding: 24px;

    &_text {
        color: #155724;
        text-align: center;
    }
}

.jm_btn {
    border: none;
}

.social_button {
    display: flex;
    align-items: center;

    .jm_btn {
        background: #FFFFFF;
        box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.05);
        border-radius: 10px !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 50px;

        .icon_social {
            img {
                // background: #DFDFDF;
                border-radius: 5px;
                width: 24px;
                height: 24px;
                margin-right: 16px;
            }
        }
    }

    &_text {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.04em;
        color: #6C6C6C;
    }
}

.next-helper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    .divider_1,
    .divider_2 {
        border: 0.5px solid #DFDFDF;
        width: 100%;
    }

    .helper_text_3 {
        width: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: #6C6C6C;
        text-align: center;
    }
}

.btn-login {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
}

.action_group_1 {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 40px;

    &_left {
        display: flex;
        align-items: center;

        .checkbox {
            width: 16px;
            height: 16px;
            border: 1px solid #006664;
            box-sizing: border-box;
            border-radius: 5px;
            margin-right: 8px;
            cursor: pointer;
        }

        .helper_text_1 {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #6C6C6C;
            cursor: pointer;
        }
    }

    &_right {
        .helper_text_2 {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #006664;
            cursor: pointer;
        }
    }
}

.jm_card {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background: red;
    width: 419px;

    .card-body {
        padding: 0 !important;

        .icon {
            margin-bottom: 80px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 200px;
                height: auto;
            }

            .icon-text {
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 140%;
                letter-spacing: 0.04em;
                color: #212121;
                margin-left: 24px;
            }
        }

        .form-group {
            text-align: left;
            margin-bottom: 24px;

            .jm_input {
                border: 0.5px solid #DFDFDF;
                box-sizing: border-box;
                border-radius: 10px;
                padding: 16px;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 160%;
                letter-spacing: -0.005em;
                color: #A9A9A9;

                &::placeholder {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 160%;
                    letter-spacing: -0.005em;
                    color: #A9A9A9;
                }

                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }
        }

        .form-group:nth-child(2) {
            margin-bottom: 8px;
        }

        .forgot-password {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.04em;
            color: #006664;
        }
    }
}
</style>