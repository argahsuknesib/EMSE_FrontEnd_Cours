<template>
  <div id="app">
    <header>
      <div class="title">Smart Building Managment</div>
    </header>

    <section class="main-content w-50 mx-auto">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Windows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Rooms</a>
        </li>
      </ul>

      <div class="windows-list pt-3">
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
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
