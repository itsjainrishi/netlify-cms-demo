<template>
  <div>
    <div v-for="blog in blogPosts">
      <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
