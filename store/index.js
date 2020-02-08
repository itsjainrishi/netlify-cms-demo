export const state = () => ({
  events: []
})

export const mutations = {
  setEvents(state, list) {
    state.events = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const eventfiles = await require.context(
      '~/assets/content/events/',
      false,
      /\.json$/
    )
    const events = eventfiles.keys().map((key) => {
      const res = eventfiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setEvents', events)
  }
}
