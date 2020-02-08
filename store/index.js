export const state = () => ({
  blogPosts: [],
  events: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setEvents(state, list) {
    state.events = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const blogfiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const eventfiles = await require.context(
      '~/assets/content/events/',
      false,
      /\.json$/
    )
    const blogPosts = blogfiles.keys().map((key) => {
      const res = blogfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    const events = eventfiles.keys().map((key) => {
      const res = eventfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
    await commit('setEvents', events)
  }
}
