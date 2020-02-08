<template>
  <div>
    <div v-for="event in events">
      <nuxt-link :to="`/event/${event.slug}`">{{ event.title }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>
