<style lang="less" scoped>
    @import "../../style/widget/cell";
</style>

<template>

<div class="cell" :class="{'link': isLink || !!link,'access': isLink || !!link}" @click= "onClick">
    <div class="cell-header">
        <slot name='icon'></slot>
    </div>
    <div class="cell-body" :class="{ 'cell-primary': primary==='title'}">
        <p>{{ title }} <slot name="after-title"></slot></p>
        <InlineDesc>{{ titleDes }}</InlineDesc>
    </div>
    <div class="cell-footer" :class="{ 'cell-primary': primary==='content'}">
        {{ value }}
        <slot name="value"></slot>
        <slot></slot>
    </div>
    <slot name="child"></slot>
</div>

</template>

<script>
import InlineDesc from '../inline-desc';
import { go } from '../../libs/router';

export default {
    components: {
        InlineDesc
    },
    name: "cell",
    props: {
        title: String,
        value: [String,Number,Array],
        isLink: Boolean,
        link: [String,Object],
        primary: {
            type: String,
            default: 'title'
        },
        titleDes:[String,Number]
    },
    methods: {
        onClick () {
            go(this.link, this.$router)
        }
    }
}

</script>
