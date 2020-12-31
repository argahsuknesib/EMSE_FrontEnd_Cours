<template>
  <div class="windows-list pt-3">
    <windows-list-item 
      v-for="window in windows"
      :window="window"
      :key="window.id"  
    >
    </windows-list-item>
  </div>
</template>


<script>
import WindowsListItem from './WindowsListItem';

export default {
  components: {
    WindowsListItem
  },
  name: 'WindowsList',
  data: function() {
    return {
      windows: [{
        id: 0,
        name: 'North window',
        status: 'open',
        room: {
          id: 0,
          name: 'Classroom'
        }
      }, {
        id: 1,
        name: 'East window',
        status: 'closed',
        room: {
          id: 0,
          name: 'Classroom'
        }
      }]
    }
  }
}
</script>
