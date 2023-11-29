<template>
  <div class="contauner h-full">
    <form @submit.prevent="handleSubmit()">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
      >
        <div class="-mb-2 w-full md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p
              class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-12"
            >
              Register
            </p>
            <div class="mt-0">
              <label class="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                v-model="userEmail"
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
                  v-model="userPassword"
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
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <div class="flex items-center bg-input-bg rounded-md pr-2">
                <input
                  v-model="userConfirmPassword"
                  class="bg-input-bg text-gray-900 sm:text-sm outline-none rounded-md block w-full p-2.5"
                  required
                  placeholder="••••••••"
                  id="password2"
                  :type="showConfirmToggle ? 'text' : 'password'"
                />
                <img
                  src="../../assets//img//eye 1.png"
                  class="cursor-pointer"
                  @click="showConfirmToggle = !showConfirmToggle"
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
            Already have an account?
            <span class="text-button-color cursor-pointer" @click="redirect()"
              >Sign in</span
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
import { useUserStore } from "../../stores/UserStore";
const showPasswordToggle = ref(false);
const showConfirmToggle = ref(false);
const userEmail = ref("");
const userPassword = ref("");
const userConfirmPassword = ref("");
const userStore = useUserStore();
const router = useRouter();
const redirect = () => {
  return router.push({ name: "sign-in" });
};
const handleSubmit = () => {
  if (
    userEmail.value.length > 0 &&
    userPassword.value.length > 0 &&
    userConfirmPassword.value.length > 0 &&
    userPassword.value === userConfirmPassword.value
  ) {
    userStore.registerUser({
      userEmail: userEmail.value,
      userPassword: userPassword.value,
      userConfirmPassword: userConfirmPassword.value,
    });
    userEmail.value = "";
    userPassword.value = "";
    userConfirmPassword.value = "";
    router.push({ name: "sign-in" });
  } else {
    alert("Enter valid values");
  }
};
</script>

<style lang="scss" scoped></style>
