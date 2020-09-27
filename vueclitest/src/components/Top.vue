<template>
<div>
    <a v-show="show"><img src="../img/top.png" alt=""></a>
    <span class="remove" v-on:click="show=!show" v-show="show"></span>
</div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            show: true
        }
    },
    methods: {

    },
    components: {

    },
    computed: {

    },
    watch: {

    },
};
</script>

<style>
.remove {
    width: 20px;
    height: 20px;
    background-image: url(../img/remove.png);
    right: 0px;
    top: 10px;
    position: absolute;
}
</style>
