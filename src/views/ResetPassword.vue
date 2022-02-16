<template>
    <div class="main_login">
        <div class="card jm_card">
            <div class="card-body">
                <div class="icon">
                    <img src="@/assets/logo.png" alt="">
                    <p class="icon-text">Juragan Material</p>
                </div>
                <div class="form">
                    <div class="form-group">
                        <input type="password" class="form-control jm_input w-100" placeholder="Kata Sandi Baru" v-model="password">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control jm_input w-100" placeholder="Ulangi Kata Sandi" v-model="repeat_password">
                        <div class="helper error d-none" id="helper-password"><span>Password tidak sesuai</span></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <button class="jm_btn jm_green p_white w-100 btn-login" id="btn-reset" disabled @click.prevent="send">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CryptoJj from 'crypto-js'
export default {
    name: "Login",
    data() {
        return {
            password: "",
            repeat_password: "",
            user_email: ""
        }
    },
    mounted() {
        let content = this.$route.query.content
        var decoded = CryptoJj.enc.Hex.parse(content).toString(CryptoJj.enc.Base64);
        var decrypted = CryptoJj.AES.decrypt(decoded, "jmAp1-b4ckeNd!").toString(CryptoJj.enc.Utf8);
        let params = JSON.parse(decrypted)
        this.user_email = params.email

        let dt = new Date()
        let h = dt.getHours().toString().length == 1 ? '0' + dt.getHours() : dt.getHours().toString()
        let m = dt.getMinutes().toString().length == 1 ? '0' + dt.getMinutes() : dt.getMinutes().toString()
        let expHour = params.exp.split(':')[0]
        let expMinute = params.exp.split(':')[1]
        console.log(h)
        console.log(m)
        console.log(expHour)
        console.log(expMinute)
        if (h > expHour) {
            this.$router.push('/exp')
        } else if (h == expHour) {
            if (m > expMinute) {
                this.$router.push('/exp')
            }
        }
    },
    watch: {
        repeat_password: function(newValue, oldValue) {
            if (this.password != '') {
                if (newValue == this.password) {
                    document.getElementById('helper-password').classList.add('d-none')
                    document.getElementById('btn-reset').disabled = false
                } else {
                    document.getElementById('helper-password').classList.remove('d-none')
                    document.getElementById('btn-reset').disabled = true
                }
            } else {
                document.getElementById('btn-reset').disabled = true
            }
        },
        password: function(newValue, oldValue) {
            if (this.repeat_password != '') {
                if (newValue == this.repeat_password) {
                    document.getElementById('helper-password').classList.add('d-none')
                    document.getElementById('btn-reset').disabled = false
                } else {
                    document.getElementById('helper-password').classList.remove('d-none')
                    document.getElementById('btn-reset').disabled = true
                }
            } else {
                document.getElementById('btn-reset').disabled = true
            }
        }
    },
    methods: {
        async send() {
            let data = this.user_email
            let payload = {
                email: data,
                password: this.password
            }
            await this.axios.post("/auth/change-password", payload)
            .then((res) => {
                console.log('res change password', res)
                this.$toast.success(res.data.message + '. Anda akan diarahkan ke halaman login secara otomatis', {
                    timeout: 3000
                });
                setTimeout(() => {
                    this.$router.push('/')
                }, 3000);
            })
            .catch(err => {
                console.log('err change password', err)
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
.helper.error {
    color: red;
    font-size: 12px;
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