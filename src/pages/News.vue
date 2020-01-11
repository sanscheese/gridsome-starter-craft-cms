<template>
  <Layout>
     <h1>News</h1>
    <div v-for="(entry, i) in $page.craft.entries" :key="i">
      <g-link :to="entry.uri">{{ entry.title }}</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      hello: "world"
    }
  }
};
</script>

<page-query>
query CraftEntries {
  craft {
    entries (section: "news") {
      id
      title
      uri
    }
  }
}
</page-query>