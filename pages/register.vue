<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const email = useState('email',(()=>''))
const password = useState('password',(()=>''))
const name = useState('name',(()=>''))

async function register(){
  const user = await $fetch('/api/users/registration', {
        method: "post",
        body: {
          email:email.value,
          password:password.value,
          name:name.value

        }
      })

    if(user) {
    authStore.login(user);
    await navigateTo('/cabinet')
    };
  }


</script>

<template>


              <div class="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style='font-family: "Work Sans", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf3] px-10 py-3">
          <div class="flex items-center gap-4 text-[#0d131b]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-[#0d131b] text-lg font-bold leading-tight tracking-[-0.015em]">MSBANK</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://cdn.usegalileo.ai/sdxl10/55bc7632-52fb-4e16-93f0-e0091162550b.png");'
            ></div>
          </div>
        </header>
        <form class="px-40 flex flex-1 justify-center py-5" @submit.prevent="register">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h1 class="text-[#0d131b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Welcome back</h1>
            <p class="text-[#0d131b] text-base font-normal leading-normal pb-3 pt-1 px-4">Sign Up to MSBANK and get access to your accounts</p>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">email</p>
                <input
                  placeholder="Enter email"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                  v-model="email"
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Enter name"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                  v-model="name"
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="Enter password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                  v-model="password"
                />
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button type="submit"
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1366ec] text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Sign Up</span>
              </button>
            </div>
            <p class="text-[#4c6a9a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Forgot your username or password?</p>
            <p class="text-[#4c6a9a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Don't have an account? Sign up</p>
            <p class="text-[#4c6a9a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">By logging in, you agree to MSBANK's terms of use and privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
</template>