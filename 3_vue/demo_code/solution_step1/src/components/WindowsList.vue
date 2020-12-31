<template>
  <div class="windows-list pt-3">
    <windows-list-item></windows-list-item>
    <windows-list-item></windows-list-item>
  </div>
</template>


<script>
import WindowsListItem from './WindowsListItem';

export default {
  components: {
    WindowsListItem
  },
  name: 'WindowsList'
}
</script>
