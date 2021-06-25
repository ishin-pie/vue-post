<template>
  <div class="contact">
    <content-block :title="$t('app.menu.contact')">
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
