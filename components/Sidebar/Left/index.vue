<script lang="ts" setup>
import {HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon} from "@heroicons/vue/20/solid";


const { defaultTransition } = useTailwindConfig()
</script>

<template>
  <div class="flex flex-col h-screen ">
    <div class="py-2 my-2 hover:bg-blue-100 rounded-full w-min dark:bg-white/20" :class="defaultTransition">
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogosTwitterLogo/>
        </div>
      </NuxtLink>
    </div>
    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template #icon>
          <HomeIcon/>
        </template>
        <template #name>
          Home
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <HashtagIcon/>
        </template>
        <template #name>
          Explore
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <BellIcon/>
        </template>
        <template #name>
          Notifications
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <InboxIcon/>
        </template>
        <template #name>
          Messages
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <BookmarkIcon/>
        </template>
        <template #name>
          Bookmark
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <DocumentTextIcon/>
        </template>
        <template #name>
          Lists
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template #icon>
          <UserIcon/>
        </template>
        <template #name>
          Profile
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
          <template #icon>
            <EllipsisHorizontalCircleIcon/>
          </template>
          <template #name>
            More
          </template>
        </SidebarLeftTab>

    </div>

  </div>
</template>

<style scoped></style>
