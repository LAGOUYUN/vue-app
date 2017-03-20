<style lang='less'>

@import "../../style/widget/selector";
.selector-no-padding {
    padding-left: 0;
}

.selector.cell-select {
    padding: 0;
}

.selector.cell-select-after {
    padding-left: 15px;
}

.selector-readonly {
    width: 100%;
}

</style>

<template>

<div class="selector cell" :class="{'cell-select':!disabled, 'cell-select-after':title}">
    <div class="cell-header" v-if="title">
        <label for="" class="label" :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}">{{title}}</label>
    </div>
    <div class="cell-body" v-if="!disabled">
        <select class="select" :class="{placeholder:typeof value === 'undefined'}" v-model="currentValue" :style="{direction: direction}">
            <option value="" v-if="typeof value === 'undefined' && placeholder" :selected="typeof value === 'undefined' && placeholder">{{placeholder}}</option>
            <option disabled v-if="!placeholder && typeof value === 'undefined' && isIOS && title"></option>
            <option :value="one.key" v-for="one in formateOptions">{{one.value}}</option>
        </select>
    </div>
    <div class="cell-footer selector-readonly" v-else>
        {{value | findByKey(formateOptions)}}
    </div>
</div>

</template>

<script>

import { find } from '../utils/array';

const findByKey = function(key, options) {
    const _rs = find(options, function(item) {
        return item.key === key
    })
    return _rs ? _rs.value : key
}

export default {
    mounted() {
        if (typeof this.value !== 'undefined') {
            this.currentValue = this.value;
        }
    },
    computed: {
        formateOptions() {
            if (this.options.length && {}.hasOwnProperty.call(this.options[0], 'key')) {
                return this.options
            } else {
                return this.options.map(function(item) {
                    return {
                        key: item,
                        value: item
                    }
                })
            }
        }
    },
    watch: {
        value (val) {
            this.currentValue = val
        },
        currentValue (val) {
            this.$emit('on-change', val)
            this.$emit('input', val)
        }
    },
    filters: {
        findByKey
    },
    name: "selector",
    props: {
        disabled: Boolean,
        title: String,
        direction: String,
        options: {
            type: Array,
            required: true
        },
        name: String,
        placeholder: String,
        value: [String, Number, Object]
    },
    data() {
        return {
            currentValue: '',
            isIOS: /iPad|iPhone|iPod/.test(window.navigator.userAgent)
        }
    }
}

</script>
