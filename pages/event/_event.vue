<template>
  <article>
    <h1>{{ event.title }}</h1>
    <div>{{ event.body }}</div>
    <span>{{ event.images }}</span>
    <div v-for="image in event.images">
      <img :src="`${image.url}`" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { event: payload }
    else
      return {
        event: await require(`~/assets/content/events/${params.event}.json`)
      }
  }
}
</script>
