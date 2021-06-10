Vue.component('tab-face', {
  props: ['data'],
  data() {
    return {
      swatches: [
        ['#525e37', '#523711'],
        ['#263419', '#d08418'],
        ['#83b7d5', '#bebebe'],
        ['#3e66a3', '#0d0d0c'],
        ['#8d6833'],
      ],
    }
  },
  template: `
<v-container id="scroll-target" class="main-container overflow-y-auto">
  <div class="settings-container">
    <span class="settings-container-title">
      Высота бровей
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Глубина бровей
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Высота скул
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Ширина скул
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
  <span class="settings-container-title">
    Ширина носа
  </span>
  <div class="settings-container-content picker">
    <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
      min="0" max="1" step="0.1" hide-details />
  </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Высота носа
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Длина кончика носа
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Высота кончика носа
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Глубина моста носа
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Поломанность носа
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Глубина щек
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Размер глаз
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
      <span class="settings-container-title">
        Цвет глаз
      </span>
        <v-color-picker class="ma-2" hide-inputs show-swatches :swatches="swatches" hide-canvas hide-sliders dark></v-color-picker>
    </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Толщина губ
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Ширина челюсти
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Форма челюсти
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Высота подбородка
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Глубина подбородка
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Ширина подбородка
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Отступ подбородка
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Шея
    </span>
    <div class="settings-container-content picker">
      <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
        min="0" max="1" step="0.1" hide-details />
    </div>
  </div>
</v-container>
  `
})