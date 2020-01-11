<template>
  <Layout>
    <h1>Hello, crafty world!</h1>
    <p>
      <g-link to="/news">Look at some news examples</g-link>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
