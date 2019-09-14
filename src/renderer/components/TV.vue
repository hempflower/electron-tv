<template>
  <div style="height:100%;width:100%">
      <VideoPlayer videosrc="http://qxlmlive.cbg.cn:1935/app_2/ls_57.stream/chunklist.m3u8"></VideoPlayer>
  </div>
</template>

<script>
import VideoPlayer from '@/components/tv/VideoPlayer'
export default {
    name: 'TV',
    components:{
        VideoPlayer
    }
}
</script>

<style>

</style>