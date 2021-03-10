<template>
  <div class="item">
    <div class="poster">
      <img :src="item.img">
    </div>
    <div class="info">
      <title-row :title="item.title"></title-row>
      <div class="desc">{{ item.desc }}</div>
      <div class="author">
        <div class="author-info">
          <a class="user" href="/books" target="_blank">
            <img class="avatar" :src="item.userData.avatarLarge">
            <span>{{ item.userData.username }}</span>
          </a>
        </div>
        <div class="author-desc">{{ item.profile }}</div>
      </div>
      <div class="other">
        <div class="price">￥{{ item.price }}</div>
        <div class="messages">
          <span class="message">{{ item.lastSectionCount }}小节</span>
          <span class="message read-duration">阅读时长{{ Math.floor(item.contentSize/60/item.lastSectionCount) }}分</span>
          <span class="message">{{ item.buyCount }}人已购买</span>
        </div>
      </div>
    </div>
    <div class="m-aside">
      <div class="price">
        ￥{{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BookItem',
  
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>


