<script setup>
import useAuth from "~/composables/useAuth";

const darkMode = ref(false)
const {useAuthUser, initAuth} = useAuth()
onBeforeMount(() => {
  initAuth()
})

const user = useAuthUser()
</script>
<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">

      <div v-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8
        lg:gap-5
        ">
          <!--        LEFT SIDEBAR-->
          <div class="hidden md:block  xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>
          <!--        MAIN CONTENT-->
          <main class="col-span-12 md:col-span-8 xl:col-span-6 ">
            <NuxtPage/>
          </main>
          <!--        RIGHT SIDEBAR-->
          <div class="hidden md:block col-span-12  md:col-span-3 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>
        </div>
      </div>

      <AuthPage v-else/>

    </div>

  </div>
</template>
