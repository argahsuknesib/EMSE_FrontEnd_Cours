<template>
  <div class="window border border-secondary rounded p-2 mb-2">
    <div class="top-row d-flex">
      <div class="window-name fw-bold pe-3">Window 1</div>
      <div class="room-name text-muted">Room 1</div>
      <div class="open-status open ms-4">
        <span class="icon open">&#x2B24;</span>
        Open
      </div>
      <div class="expand-button ms-auto">&#9658;</div>
    </div>
  </div>


  <!-- This is the template for expanded list item 
  
  
    <div class="window border border-secondary rounded p-2">
      <div class="top-row d-flex">
        <div class="window-name fw-bold pe-3">Window 1</div>
        <div class="room-name text-muted">Room 1</div>
        <div class="open-status open ms-4">
          <span class="icon closed">&#x2716;</span>
          Closed
        </div>
        <div class="expand-button ms-auto">&#9660;</div>
      </div>
      <hr/>
      <div class="details d-flex">
        <button type="button" class="btn btn-secondary me-2">Open window</button>
        <button type="button" class="btn btn-danger disabled">Delete window</button>
      </div>
    </div>
  
  
  -->
</template>

<script>
export default {
  name: 'WindowsListItem'
}
</script>

<style lang="scss" scoped>
.icon {
  position: relative;

  &.open {
    font-size: 12px;
    top: -3px;
    color: #198754;
  }

  &.closed {
    color: #dc3545;
  }
}

.window {
  .top-row {
    cursor: pointer;
  }
}
</style>
