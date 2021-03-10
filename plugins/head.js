// plugins/head.js
import Vue from 'vue'

Vue.mixin({
  methods: {
    $seo(title, content) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'description',
          content
        }]
      }
    }
  }
})