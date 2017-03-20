

<template>

<div class="grid" @click="onClick">
    <div class="grid-icon">
        <slot name="icon"><img :src="icon" alt=""></slot>
    </div>
    <p class="grid-label">
        <slot name="label"><span class="label" v-html="label"></span></slot>
        <slot name="labelDes"></slot>
    </p>
</div>

</template>

<script>

import { go } from '../../libs/router'

export default {
    name:'grid-item',
    props: ['icon', 'label', 'link'],
    methods: {
        onClick() {
            this.$emit('on-item-click')
            go(this.link, this.$router)
        }
    }
}

</script>
