<template>
  <div class="about">
    <content-block :title="$t('app.menu.about')">
      <p class="text-justify"></p>
    </content-block>
  </div>
</template>

<script>
import ContentBlock from '../components/ContentBlock'

export default {
  components: {
    ContentBlock
  }
}
</script>
