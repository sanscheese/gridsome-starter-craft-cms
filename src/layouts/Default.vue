<template>
  <div>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <main  class="layout">
      <slot/>
    </main>
      <footer>
      <a href="https://bensheedy.com" target="_blank" rel="noopener">Ben did this</a>
      <p><small>{{ $static.craft.globalSet.contactUsLabel }}</small></p>
      </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  craft {
    globalSet {
      ...on craft_footer_GlobalSet {
        contactUsLabel
      }
    }
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 20px;
}


header {
  background: lightsteelblue;
  padding: 10px;
}

footer {
  padding: 10px;
  background: lightgray;
  margin-top: 20px;
}
</style>
