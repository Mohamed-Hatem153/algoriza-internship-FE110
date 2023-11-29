<template>
  <div class="contauner h-full">
    <form @submit.prevent="handleSignIn()">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
      >
        <div class="-mb-2 w-full md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p
              class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-12"
            >
              Sign In
            </p>
            <div class="mt-0">
              <label class="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                v-model="email"
                placeholder="JohnDoe@yahoo.com"
                required
                class="bg-input-bg outline-none text-gray-900 sm:text-sm rounded-md block w-full p-2.5"
                id="username"
                type="email"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <div class="flex items-center bg-input-bg rounded-md pr-2">
                <input
                  v-model="password"
                  class="bg-input-bg text-gray-900 sm:text-sm outline-none rounded-md block w-full p-2.5"
                  required
                  :type="showPasswordToggle ? 'text' : 'password'"
                  placeholder="••••••••"
                  id="password"
                />
                <img
                  src="../../assets//img//eye 1.png"
                  class="cursor-pointer"
                  @click="showPasswordToggle = !showPasswordToggle"
                />
              </div>
            </div>
            <button
              class="w-full bg-button-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <p>
            Don’t have an account?
            <span class="text-button-color cursor-pointer" @click="redirect()"
              >Register</span
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const showPasswordToggle = ref(false);
const modalActive = ref(false);
const email = ref("");
const password = ref("");
import { useUserStore } from "../../stores/UserStore";
const userStore = useUserStore();
const router = useRouter();
const redirect = () => {
  return router.push({ name: "register" });
};
const handleSignIn = () => {
  if (email.value.length > 0 && email.value.length > 0) {
    userStore.loginUser({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
    router.push({ name: "home" });
  } else {
    alert("Enter valid values");
  }
};
</script>
