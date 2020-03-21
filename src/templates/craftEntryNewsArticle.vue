<template>
  <Layout>
  <h1>{{$page.craft.entry.title}}</h1>
  <div v-for="(item, i) in $page.craft.entry.articleBody" :key="i">
    <div v-html="item.text" />
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
query CraftEntry ($id: [craft_QueryArgument]) {
  craft {
    entry (id: $id) {
      title
      ...on craft_news_article_Entry {
        articleBody {
          ...on craft_articleBody_text_BlockType {
            text 
            position
          }
        }
      }
    }
  }
}
</page-query>