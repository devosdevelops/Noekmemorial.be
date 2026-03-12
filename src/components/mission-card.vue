<template>
  <article class="mission-card" :class="{ 'is-reversed': reverseMobile }">
    <h3 class="subheading mission-title">{{ title }}</h3>
    <p class="body-text mission-text">{{ text }}</p>
    <img v-if="imageSrc" class="mission-image" :src="imageSrc" :alt="title" />
    <div v-else class="mission-image" :class="`is-${imageTone}`" aria-hidden="true"></div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  imageTone: {
    type: String,
    default: 'moon'
  },
  imageSrc: {
    type: String,
    default: ''
  },
  reverseMobile: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.mission-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--space-16);
}

.mission-title {
  margin: 0;
}

.mission-text {
  margin: 0;
  margin-bottom: auto;
}

.mission-image {
  margin-top: var(--space-24);
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: var(--radius-12);
  background-color: rgba(255, 255, 255, 0.35);
  object-fit: cover;
}

.mission-image.is-moon {
  background-image:
    radial-gradient(circle at 35% 35%, rgba(143, 209, 255, 0.7), rgba(143, 209, 255, 0) 45%),
    radial-gradient(circle at 62% 62%, rgba(221, 157, 235, 0.7), rgba(221, 157, 235, 0) 42%),
    linear-gradient(140deg, rgba(176, 208, 253, 0.85), rgba(255, 190, 214, 0.75));
}

.mission-image.is-team {
  background-image:
    radial-gradient(circle at 35% 30%, rgba(255, 220, 145, 0.85), rgba(255, 220, 145, 0) 40%),
    radial-gradient(circle at 65% 65%, rgba(206, 149, 241, 0.8), rgba(206, 149, 241, 0) 42%),
    linear-gradient(145deg, rgba(252, 193, 213, 0.75), rgba(186, 202, 255, 0.8));
}

@media (max-width: 40rem) {
  .mission-card {
    height: auto;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
    display: grid;
  }

  .mission-image {
    margin-top: 0;
  }

  .mission-title {
    grid-column: 1 / -1;
  }

  .mission-card.is-reversed .mission-image {
    order: 2;
  }

  .mission-card.is-reversed .mission-text {
    order: 1;
  }
}
</style>
