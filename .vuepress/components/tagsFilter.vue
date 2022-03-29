<template>
  <div class="tags">
	<div v-for="tagelement in results" class="tag">
		<li>{{ tagelement }}</li>
	</div>
  </div>
</template>

<script>
export default {
  name: "tagsFilter",
  data() {
    return {
      results: [
	  "vue",
	  "musings",
	  "python",
	  "css",
	  "django",
	  "flask",
	  "haskell"
	  ],
    };
  },
};
</script>

<style scoped>
.tag {
  background: #eee;
  border-radius: 7px 0 0 7px;
  color: #999;
  display: inline-block;
  line-height: 20px;
  padding: 0 17px 0 20px;
  position: relative;
  margin: 0 10px 0 0;
  text-decoration: none;
  font-size: 11px;
  -webkit-transition: color 0.2s;
}

.tags {
  padding-top: 40px;
  padding-left: 40px;
  top: 0;
  left: 0;
}

@media (prefers-color-scheme: dark) {
  .tag {
    background: #383737;
    color: #d9ffd2;
    -webkit-transition: color 0.2s;
  }
}

li::marker {
  font-size: 150%;
  color: white;
}
</style>
