<template>
    <div>
        <button @click="updateCounter(1)">add</button>
        <button @click="updateCounter(-1)">delete</button>
    </div>
</template>
<script>
export default {
    methods: {
        updateCounter(val){
            // this.$store.state.counter += val;
            // this.$store.commit('changeCounter',val)
            this.$store.dispatch('asyncChangeCounter',{
                counterValue:val,
                waitValue: 1000
            })
        }
    }
}
</script>

<style scoped>

</style>