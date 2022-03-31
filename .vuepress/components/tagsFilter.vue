<template>
  <div class="tags">
    <div
      v-for="tagElement in allTags"
      class="tag"
      @click="
        activateTag(tagElement);
        changeTagColor(tagElement);
      "
      v-bind:id="tagElement"
    >
      <li>{{ tagElement }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "tagsFilter",
  props: ["allTags"],
  emits: ["emittedTags"],
  data() {
    return {
      selectedTags: [],
    };
  },
  methods: {
    changeTagColor(tagElement) {
      let elem = document.getElementById(tagElement);
      if (this.selectedTags.includes(tagElement)) {
        elem.style["color"] = "var(--selectedTagLabelColor)";
        elem.style["background"] = "var(--selectedTagColor)";
      } else {
        elem.style["color"] = "var(--tagLabelColor)";
        elem.style["background"] = "var(--tagColor)";
		}
    },
    activateTag(tagElement) {
      if (!this.selectedTags.includes(tagElement))
        this.selectedTags.push(tagElement);
      else {
        const index = this.selectedTags.indexOf(tagElement);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
      }
      this.emitTags();
    },
    emitTags() {
      this.$emit("emittedTags", this.selectedTags);
    },
  },
};
</script>

<style>
:root {
  --tagColor: #cfe8c2;
  --tagLabelColor: black;
  --selectedTagColor: #7a8883;
  --selectedTagLabelColor: white; 
}
@media (prefers-color-scheme: dark) {
  :root {
  --tagColor: #383737;
  --tagLabelColor: #d9ffd2;
  --selectedTagColor: ##27604b;
  --selectedTagLabelColor: white; 
  }
}

.tag {
  background: var(--tagColor);
  border-radius: 7px 0 0 7px;
  color: var(--tagLabelColor);
  display: inline-block;
  line-height: 20px;
  padding: 0 17px 0 20px;
  position: relative;
  margin: 0 10px 5px 0;
  text-decoration: none;
  font-size: 11px;
  -webkit-transition: color 0.2s;
  -webkit-transition: background 0.2s;
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

li::marker {
  font-size: 150%;
  color: white;
}
</style>
