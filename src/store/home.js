import Vue from 'vue'

const initState = {
    direction: ''
}

export default {
    state: initState,
    mutations: {
        updateDirection(state, direction) {
            state.direction = direction
        }
    }
}
