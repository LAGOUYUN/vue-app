<style lang='less'>

@import "style/base/reset";
body {
    background-color: #f5f6f7;
}


/**
* router transition
*/

.router-view {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
}

.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
}

.pop-out-enter-active {
    animation-name: popInLeft;
}

.pop-out-leave-active {
    animation-name: popOutRight;
}

.pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
}

.pop-in-leave-active {
    animation-name: popOutLeft;
}

@keyframes popInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes popOutLeft {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes popInRight {
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes popOutRight {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
}

</style>

<template>

<div>
    <transition :name="'pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view class="router-view"></router-view>
    </transition>
</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState({
          direction: state => state.home.direction
        }),
    }
}

</script>
