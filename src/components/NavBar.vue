<template>
  <div>
    <nav class="bg-white pt-4 pb-4 mb-3">
      <div class="container mx-auto flex justify-between items-center">
        <router-link
          to="/"
          class="text-gray-800 text-lg flex font-medium tracking-wide w-[175px]"
          ><span class="mr-1 text-logo-color"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
                fill="#2F80ED"
              /></svg></span
          >My Dream Place</router-link
        >

        <div class="hidden md:flex gap-12">
          <router-link to="/" class="text-links-color">Home</router-link>
          <router-link to="/" class="text-links-color">Discover</router-link>
          <router-link to="/" class="text-links-color">Activities</router-link>
          <router-link to="/" class="text-links-color">About</router-link>
          <router-link to="/" class="text-links-color">Contact</router-link>
        </div>
        <div class="w-[175px] flex justify-end" v-if="auth === false">
          <Button value="Register" @click="redirect()" />
        </div>
        <!--Start User avatar -->
        <div
          class="flex items-center justify-end gap-6 w-[175px]"
          v-if="auth === true"
        >
          <div>
            <img src="../assets/img/notification 1.png" />
          </div>
          <div class="relative">
            <button
              @click="isDropDownOpen = !isDropDownOpen"
              class="relative z-10 block h-11 w-11 rounded-full overflow-hidden focus:outline-none"
            >
              <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt="Your avatar"
              />
            </button>
            <button
              v-if="isDropDownOpen"
              @click="isDropDownOpen = false"
              tabindex="-1"
              class="fixed inset-0 h-full w-full cursor-default"
            ></button>
            <div
              v-if="isDropDownOpen"
              class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10 border-2"
            >
              <router-link
                to="/"
                class="block px-4 py-2 text-links-color hover:bg-gray-200 border-b-2"
                ><div class="flex items-center justify-start gap-2">
                  <img src="../assets/img/user-square 2.png" />Manage account
                </div></router-link
              >
              <router-link
                to="/trips"
                class="block px-4 py-2 text-links-color hover:bg-gray-200 border-b-2"
                ><div class="flex items-center justify-start gap-2">
                  <img src="../assets/img/bxs-plane-take-off 1.png" />My trips
                </div></router-link
              >
              <router-link
                to="/"
                class="block px-4 py-2 text-links-color hover:bg-gray-200 border-b-2"
                ><div class="flex items-center justify-start gap-2">
                  <img src="../assets/img/wallet-3 1.png" />Reward and wallet
                </div></router-link
              >
              <div
              @click="handleSignOut()"
                class="block px-4 py-2 text-links-color cursor-pointer hover:bg-gray-200"
                ><div class="flex items-center justify-start gap-2">
                  <img src="../assets/img/logout 1.png" />Sign out
                </div></div
              >
            </div>
          </div>
        </div>
        <!--End User avatar -->
        <div class="md:hidden">
          <!-- Add responsive menu button here -->
          <div>
            <button @click="toggleMenu" class="text-black">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
                ></path>
              </svg>
            </button>

            <!-- Responsive menu -->
            <transition name="fade">
              <div
                v-if="menuOpen"
                @click="toggleMenu"
                class="fixed inset-0 bg-black opacity-50"
              ></div>
            </transition>
            <transition name="slide">
              <div
                v-if="menuOpen"
                class="fixed top-0 left-0 h-screen w-64 bg-gray-800 p-4"
              >
                <!-- Add responsive menu items here -->
                <div class="flex justify-between items-center">
                  <router-link to="/" class="text-black mb-4" @click="closeMenu"
                    >Home</router-link
                  >
                  <span
                    class="text-black mb-4 border-2 px-2 py-1 cursor-pointer"
                    @click="closeMenu"
                    >X</span
                  >
                </div>

                <router-link
                  to="/about"
                  class="text-black block mb-4"
                  @click="closeMenu"
                  >About</router-link
                >
                <router-link to="/" class="text-black block" @click="closeMenu"
                  >Contact</router-link
                >
              </div>
            </transition>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";
const menuOpen = ref(false);
import { useUserStore } from "@/stores/UserStore";
const isDropDownOpen = ref(false);
const router = useRouter();
const userStore = useUserStore();
const auth = ref(userStore.isAuth);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  menuOpen.value = false;
};
const redirect = () => {
  return router.push({ name: "register" });
};
const handleSignOut = ()=>{
  localStorage.clear()
  return router.push({ name: "sign-in" });
}
</script>

<style>
/* You can customize styles here */
.fade-enter-active,
  /* .fade-leave-active, */
  .slide-enter-active,
  .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to,
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
