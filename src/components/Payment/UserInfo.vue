<template>
  <div class="mt-[30px]">
    <form @submit.prevent="redirectToTrips()">
      <div class="flex items-center rounded-t-md bg-button-color px-5 py-4">
        <img src="../../assets/img/Payment/security-user 1.png" />
        <p class="text-white text-lg font-medium ml-4">Room 1</p>
        <p class="ml-[18px] font-medium text-base text-white">
          2 adults, 1 double bed and 1 twin bed, Non-smoking
        </p>
      </div>
      <div class="pt-8 pl-8 pb-10 rounded-b-md mb-[30px] bg-white">
        <div class="flex gap-5">
          <div class="flex flex-col w-60">
            <label class="text-footer-color text-sm mb-1 font-medium"
              >First name</label
            >
            <input
              type="text"
              class="w-full bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
              required
            />
          </div>
          <div class="flex flex-col w-60">
            <label class="text-footer-color text-sm mb-1 font-medium"
              >Last name</label
            >
            <input
              type="text"
              class="w-full bg-input-bg rounded border-[1px] focus:bg-white focus:border-button-color p-3"
              required
            />
          </div>
        </div>
        <div class="flex flex-col w-80 mb-5">
          <label class="text-footer-color text-sm mb-1 font-medium"
            >Mobile number</label
          >
          <input
            type="tel"
            class="w-full bg-input-bg rounded border-[1px] focus:bg-white focus:border-button-color p-3"
            required
          />
        </div>
        <div class="flex">
          <input type="checkbox" class="w-5 h-5" />
          <label class="text-links-color text-sm font-normal ml-2"
            >Receive text alerts about this trip.</label
          >
        </div>
      </div>
      <div class="flex rounded-t-md bg-button-color px-5 py-4">
        <img src="../../assets/img/Payment/card-tick 1.png" />
        <p class="text-white text-lg font-medium ml-4">Payment options</p>
      </div>
      <div
        class="pt-2 pl-8 pb-10 rounded-b-md mb-[30px] flex flex-col bg-white"
      >
        <div class="flex border-b-[1px]">
          <p class="py-[10px] px-[14px] border-b-[3px] border-button-color">
            Debit/Credit Card
          </p>
        </div>
        <div class="flex gap-[6px] mt-[30px] mb-5">
          <div
            class="bg-input-bg w-[60px] h-10 rounded-[5px] flex items-center justify-center"
          >
            <img src="../../assets/img/Payment/image 6.png" />
          </div>
          <div
            class="bg-input-bg w-[60px] h-10 rounded-[5px] flex items-center justify-center"
          >
            <img src="../../assets/img/Payment/image 7.png" />
          </div>
          <div
            class="bg-input-bg w-[60px] h-10 rounded-[5px] flex items-center justify-center"
          >
            <img src="../../assets/img/Payment/image 10.png" />
          </div>
          <div
            class="bg-input-bg w-[60px] h-10 rounded-[5px] flex items-center justify-center"
          >
            <img src="../../assets/img/Payment/image 8.png" />
          </div>
        </div>
        <div>
          <div class="flex flex-col w-[500px] mb-5">
            <label class="text-footer-color text-sm mb-1 font-medium"
              >Name on Card</label
            >
            <input
              type="text"
              class="w-full bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
              required
            />
          </div>
          <div class="flex flex-col w-[500px] mb-5">
            <label class="text-footer-color text-sm mb-1 font-medium"
              >Debit/Credit card number</label
            >
            <input
              type="number"
              class="w-full bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
              required
            />
          </div>
          <div class="flex flex-col w-[500px] mb-5">
            <label class="text-footer-color text-sm mb-1 font-medium"
              >Exoiration Date</label
            >
            <div class="flex gap-3">
              <input
                type="number"
                class="w-[150px] bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
                required
              />
              <input
                type="number"
                class="w-[150px] bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
                required
              />
            </div>
          </div>
          <div class="flex gap-5">
            <div class="flex flex-col w-60">
              <label class="text-footer-color text-sm mb-1 font-medium"
                >Security Code</label
              >
              <input
                type="text"
                class="w-full bg-input-bg focus:bg-white rounded border-[1px] focus:border-button-color p-3"
                required
              />
            </div>
            <div class="flex flex-col w-60">
              <label class="text-footer-color text-sm mb-1 font-medium"
                >Billing Zip code</label
              >
              <input
                type="text"
                class="w-full bg-input-bg rounded border-[1px] focus:bg-white focus:border-button-color p-3"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex rounded-t-md bg-[#F2C94C] px-5 py-4">
        <p class="text-links-color text-lg font-medium ml-4">
          Important information about your booking
        </p>
      </div>
      <div
        class="pt-8 pl-8 pb-10 pr-8 leading-[150%] rounded-b-md mb-[30px] flex flex-col bg-white"
      >
        <div class="mb-8">
          <p class="text-links-color text-[15px] font-normal">
            1.This rate is non-refundable. If you change or cancel your booking
            you will not get a refund or credit to use for a future stay.
          </p>
          <p class="text-links-color text-[15px] font-normal">
            2.Stay extensions will require a new reservation.
          </p>
          <p class="text-links-color text-[15px] font-normal">
            3.Front desk staff will greet guests on arrival
          </p>
          <p class="text-links-color text-[15px] font-normal">
            4.No refunds will be issued for late check-in or early check-out.
          </p>
        </div>
        <p class="text-place-holder mb-6 text-sm leading-[140%]">
          By clicking the button below, I acknowledge that I have reviewed the
          <span class="text-button-color">Privacy Statement</span> and have
          reviewd and accept the
          <span class="text-button-color">Rules and Restrictions</span> and
          <span>Terms of Use</span>.
        </p>
        <Button value="Complete Booking" class="w-fit"/>
        <div class="flex mt-[21px]">
          <img src="../../assets/img/Payment/lock-circle 1.png" />
          <p class="text-place-holder text-sm font-normal">
            We use secure transmission and encrypted storage to protect your
            personal information
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from "../Button.vue";
import {useSearchStore} from '@/stores/UserStore'
import {useRouter} from 'vue-router'
const router = useRouter()
const searchStore = useSearchStore()
const redirectToTrips = ()=>{
  searchStore.allTrips()
  router.push({name:'trips'})
}
</script>

<style scoped></style>
