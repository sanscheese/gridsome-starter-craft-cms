<template>
  <div>
    <router-view />
    <CraftLivePreview v-if="craftEndpoint" :endpoint="craftEndpoint" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  computed: {
    craftEndpoint: () => process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT || false
  },
  components: {
    CraftLivePreview: () => import ('@bhws/gridsome-source-craft-graphql/CraftLivePreview')
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>
