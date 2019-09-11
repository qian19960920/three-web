<template>
	<div ref="demo"></div>
</template>

<script>
import WebLoaderJS from '../js/WebLoader'

export default {
	name: 'WebLoader',
  data: () => ({
  	
  }),
  created () {
    this.$nextTick(() => {
    	WebLoaderJS.init(this.$refs.demo)
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

</style>
