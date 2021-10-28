<template>
<div>
	{{ posts }}
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/about/'))
        }
    }
}

</script>

 <style>
    .img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      float: right;
    }
</style>
