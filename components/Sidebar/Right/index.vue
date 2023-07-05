<script setup lang="ts">
const whatsHappeningArr = ref([
  {
    title: "Space X",
    count: "18.8K Tweets"
  },
  {
    title: "#Coding Is Fun",
    count: "8.8K Tweets"
  },
  {
    title: "#Artgorall",
    count: "1.8K Tweets"
  },

])
const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200"
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200"
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200"
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200"
  },

])

</script>

<template>
<div class="flex flex-col">
<!--  Preview Cards : Whats Happening-->
  <SidebarRightPreviewCards title="Whats Happening">
    <SidebarRightPreviewCardsItem v-for="(item, i) in whatsHappeningArr" :key="i">
      <div >
        <h2 class="font-bold text-gray-800 text-md">{{ item.title }}</h2>
        <p class="text-xs text-gray-400">{{ item.count }}</p>
      </div>
    </SidebarRightPreviewCardsItem>
  </SidebarRightPreviewCards>

<!--  Preview Cards: WHo to follow-->
  <SidebarRightPreviewCards title="Who to follow">
    <SidebarRightPreviewCardsItem v-for="(item, i) in whoToFollowItems" :key="i">
      <div class="flex flex-row justify-between items-center p-2">
        <div class="flex flex-row">
          <img :src="item.image" class="w-10 h-10 rounded-full" :alt="item.name">
          <div class="flex flex-col ml-2">
            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ item.name }}</h1>
            <p class="text-xs text-gray-400">{{ item.handle }}</p>
          </div>
        </div>
        <div class="flex  h-full">
          <button class="px-4 py-2 text-sm font-bold text-white bg-black rounded-full dark:text-black dark:bg-white ">Follow</button>
        </div>
      </div>
    </SidebarRightPreviewCardsItem>
  </SidebarRightPreviewCards>
</div>
</template>

<style scoped>

</style>