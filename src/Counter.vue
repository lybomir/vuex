<template>
    <h2> {{ counter }}</h2>
</template>

<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.computedCount
        }
    }
}
</script>

<style scoped>

</style>