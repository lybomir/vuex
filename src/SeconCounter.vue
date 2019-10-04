<template>
    <h2>second: {{ counter }}</h2>
</template>

<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.computedCounts
        }
    }
}
</script>

<style scoped>

</style>