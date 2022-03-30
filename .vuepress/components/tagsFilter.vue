<template>
  <div class="tags">
    <div
      v-for="tagElement in allTags"
      class="tag"
      @click="activateTag(tagElement)"
      :data-tag="tagElement.InnerHTML"
    >
      <li>{{ tagElement }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "tagsFilter",
  props: ["allTags"],
  data() {
    return {
      selectedTags: [],
    };
  },
  methods: {
    activateTag(tagElement) {
      if (!this.selectedTags.includes(tagElement))
        this.selectedTags.push(tagElement);
      else {
        const index = this.selectedTags.indexOf(tagElement);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
      }
	  console.log(this.selectedTags);
    },
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
  margin: 0 10px 5px 0;
  text-decoration: none;
  font-size: 11px;
	  -webkit-transition: color 0.2s;
  cursor: pointer;
}

.tags {
  padding-top: 40px;
  top: 0;
  left: 0;
  max-width: 15%;
}

@media (max-width: 850px) {
  .tags {
    padding-top: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
  }
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
