<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title class="flex items-center q-gutter-x-md">
          <div class="logo">
            <img src="/icons/CVSS-logo.png" />
          </div>
          <h1 class="text-h6">Common Vulnerability Scoring System Version 4.0 Calculator</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white absolute-bottom">
      <q-toolbar>
        <q-toolbar-title class="flex items-center q-gutter-x-md">
          <div class="logo">
            <img src="/icons/CVSS-logo.png" />
          </div>
          <h1 class="text-h6">Version: {{ version }}</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
  import version from '../../version?raw';
</script>

<style lang="css" scoped>
.logo {
  width: 100px;
  height: auto;
  display: inline-block;
  overflow: hidden;
}
.logo img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
</style>
