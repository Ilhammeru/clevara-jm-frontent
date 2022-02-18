<template>
    <div class="main_login">
        <div class="card jm_card">
            <div class="card-body">
                <div class="icon">
                    <img src="@/assets/logo_full_new.png" alt="">
                    <!-- <p class="icon-text">Juragan Material</p> -->
                </div>
                <div class="form">
                    <div class="form-group">
                        <input type="text" class="form-control jm_input w-100" placeholder="Email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control jm_input w-100" placeholder="Kata Sandi" v-model="form.password">                  
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="text-end">
                                <p class="forgot-password" @click.prevent="forgetPassword">Lupa Kata Sandi?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="action_group_1">
                                <div class="action_group_1_left">
                                    <div class="checkbox"></div>
                                    <p class="helper_text_1">Tetap masuk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="jm_btn jm_green p_white w-100 btn-login" @click.prevent="login">Masuk</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="next-helper">
                                <div class="divider_1"></div>
                                <p class="helper_text_3">atau lanjutkan dengan</p>
                                <div class="divider_2"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="social_button">
                                <button class="jm_btn">
                                    <div class="icon_social">
                                        <img src="@/assets/icons/google.png" alt="">
                                    </div>
                                    <p class="social_button_text">Google</p>
                                </button>
                                <button class="jm_btn">
                                    <div class="icon_social">
                                        <img src="@/assets/icons/facebook.png" alt="">
                                    </div>
                                    <p class="social_button_text">Facebook</p>
                                </button>
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
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async login() {
            let payload = {
                email: this.form.email,
                password: this.form.password
            }
            console.log(payload)
            this.$store.dispatch("general/clearError")
            this.$store.dispatch("general/setLoading", true)
            await this.$store.dispatch("auth/login", payload)
            this.$store.dispatch("general/setLoading", false)
            if (this.$store.getters["general/errorForm"]) {
                this.$toast.error(this.$store.getters["general/errorInput"], {
                    timeout: 3000
                });
            } else {
                this.$router.push('/category')
            }
        },
        forgetPassword() {
            return this.$router.push('/confirm-email')
        }
    }
}
</script>

<style lang="scss" scoped>
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