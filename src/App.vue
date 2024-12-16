<script setup>
</script>

<template>
  <RouterView name="sidebar" />
  <main>
    <section id="interface" class="content">
      <RouterView name="navbar" />
      <RouterView />
    </section>
  </main>
</template>

<style>
:root {
  --sidebar-width: 78px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  width: 100%;
  background: rgb(223, 222, 222);
}
</style>

<style scoped>
main {
  padding: 0 3em 3em;
}

#interface {
  margin-left: var(--sidebar-width);
}

@media screen and (max-width: 768px) {
  main {
    padding: 0 1em 1em;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
