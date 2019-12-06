<template>
  <div>
    <h2>所有标签：</h2>
    <Tag 
      v-if="labels.length"
      v-for="label in labels" 
      :key="label.id" 
      :color="label.color"
      :src="'/tags/' + label.name"
      >
      {{label.name}}
    </Tag>
    <div v-else class="loader"></div>
    <router-view></router-view>
  </div>
</template>
<script>
import Tag from '@/components/Tag'
export default {
  components: {
    Tag
  },
  computed: {
    labels() {
      return this.$store.state.blog.labels;
    }
  }
}
</script>

