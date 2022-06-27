<script setup lang="ts">
const APP_CLOSE_COMMAND = 'wv2g://CloseWebView'
const closeUsingUrl = function() {
  try {
    location.href = APP_CLOSE_COMMAND
  }
  catch (error) {
    console.log(error)
  }
}
const closeUsingUnity = function() {
  try {
    Unity.call('CloseWebView')
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex-col nft-buttons" inline-flex space-y-4 m="y-3">
    <button btn p-2 rounded-full @click="closeUsingUrl()">
      wv2g://CloseWebView
    </button>
    <button btn p-2 rounded-full @click="closeUsingUnity()">
      Unity.call('CloseWebView')
    </button>
  </div>
</template>
