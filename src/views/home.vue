<template>
  <div class="wrapper">
    {{ isOpen }}
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
    },
    data() {
      return {
          
      }
    },
    computed: {
      isOpen() {
        return this.$store.state.common.isOpen
      }
    },
    watch: {},
    created() {},
    mounted() {
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {},
    filters: {}
  }
</script>
<style scoped>
</style>