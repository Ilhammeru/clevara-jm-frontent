<template>
    <div class="main_login">
        <div class="card jm_card">
            <div class="card-body">
                <div class="icon">
                    <img src="@/assets/logo_full_new.png" alt="">
                    <!-- <p class="icon-text">Juragan Material</p> -->
                </div>
                <div class="success" id="success">
                    <p>Halaman ini sudah kadaluarsa, silahkan kembali ke halaman utama</p>
                </div>
                <button class="btn-login jm_green w-100 p_white" @click.prevent="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Expired",
    methods: {
        login() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.success {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 24px;
}

.btn-login {
    border: none;
    margin-top: 10px;
    padding: 12px;
    border-radius: 10px;
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