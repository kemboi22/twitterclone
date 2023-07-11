<script setup lang="ts">
import useAuth from "~/composables/useAuth";

const data = reactive({
  password: "",
  username: "",
  loading: false
})
const {login} = useAuth()

const submit = async () => {
  data.loading = true
  try{
   await login(data)
  }catch (e){
    console.log(e)

  }finally {
    data.loading = false
  }

}
</script>

<template>
<div class="pt-5 space-y-6">
  <UIInputField  label="Username" placeholder="Username" v-model="data.username"/>
  <UIInputField  label="Password" placeholder="*********" type="password" v-model="data.password"/>
  <div >
    <button @click="submit">Login</button>
  </div>
</div>
</template>

<style scoped>

</style>