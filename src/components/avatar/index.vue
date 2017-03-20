<template>
    <div class="avatar">
        <span v-if="!url" :class= "avatarTextBg" v-html="formatText"></span>
        <img v-else class="avatar-img" :src=" url " >
    </div>
</template>

<script>
    export default {
        name:'avatar',
        props: {
            id: String,
            width: {
                type: [Number,String],
                default: 30,
                required: true
            },
            text: String,
            url: String
        },
        computed: {
            formatText() {
                return this.text ? this.text.substr(0,1).toUpperCase() : null
            },
            completeUrl() {
                return this.url
                    ? this.url.indexOf('http')>-1 ? this.url : `https://yun.lagou.com/${this.url}`
                    : ''
            },
            avatarTextBg() {
                return this.id ? `avatar-text bg-${this.id%4}` : ''
            }
        }

    }
</script>

<style lang="less" scoped>
    .avatar {
        display: flex;
        justify-content: center;
    }
    .avatar-text {
        flex: 1;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: #fff;
        border-radius: 50%;
        width: 130px;
        height: 130px;

        &.bg-0 {
			background-color: #fe6633;
		}
		&.bg-1 {
			background-color: #64ccc9;
		}
		&.bg-2 {
			background-color: #73bf67;
		}
		&.bg-3 {
			background-color: #4c4c4c;
		}
    }
    .avatar-img {
        border-radius: 50%;
        width: 130px;
        height: 130px;
    }

</style>
