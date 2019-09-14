<template>
  <div style="height:100%;width:100%">
    <video
      id="video"
      class="video-js vjs-default-skin vjs-big-play-centered"
      ref="videoPlayer"
      style="height:100%;width:100%"
    >
      <source :src="videosrc" type="application/x-mpegURL"/>
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: ["videosrc"],
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.player = this.$video(this.$refs.videoPlayer, {
      controls: true,
      height: '100%',
      width: '100%',
      preload: true
    });
  }
};
</script>

<style>
</style>