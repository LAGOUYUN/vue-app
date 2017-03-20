<style lang='less'>
@import "./index";
</style>

<template>

<div class="page">
    <slot name="page-header"></slot>
    <div class="page-content" id="pageContent">
        <slot></slot>
    </div>
    <slot name="page-footer"></slot>
</div>

</template>

<script>

export default {
    name: "page",
    data() {
        return {

        }
    }
}

</script>
