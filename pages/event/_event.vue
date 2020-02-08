<template>
  <article>
    <h1>{{ event.title }}</h1>
    <div>{{ event.body }}</div>
    <div v-for="img in event.images">
      <img :src="`${img.url}`" />
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
