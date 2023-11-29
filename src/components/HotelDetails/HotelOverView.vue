<template>
  <div class="container flex items-center justify-start gap-[10px] mt-[30px]">
    <p class="py-[10px] px-[14px] border-b-[3px] border-button-color">
      Overview
    </p>
    <p class="py-[10px] px-[14px]">Rooms</p>
  </div>
  <div class="w-full bg-overview-bg pb-[100px]">
    <div class="container flex justify-between">
      <div class="w-[850px]">
        <p
          v-if="searchStore.hotelDetails"
          class="mt-[53px] text-hotel-name text-[32px] mb-3 font-semibold"
        >
          {{ searchStore.hotelDetails.hotel_name }}
        </p>
        <p class="mb-3" v-if="searchStore.hotelDetails">
          <span class="fa fa-star text-orange-400"></span>
          <span class="fa fa-star text-orange-400"></span>
          <span class="fa fa-star text-orange-400"></span>
          <span class="fa fa-star text-orange-400"></span>
          <span class="fa fa-star"></span>
          <span class="text-sm font-normal text-place-holder ml-1"
            >4.0 ({{ searchStore.hotelDetails.review_nr }} Reviews)</span
          >
        </p>
        <div class="flex items-center gap-[6px]">
          <img
            src="../../assets/img/HotelDetails/location.png"
            alt="location icon"
          />
          <p
            v-if="searchStore.hotelDetails"
            class="text-links-color text-sm font-normal"
          >
            {{ searchStore.hotelDetails.address }}
          </p>
        </div>
        <div
          class="bg-white mt-[31px] pt-6 pr-10 pb-[41px] pl-[30px] rounded-md"
        >
          <p class="text-lg font-medium text-footer-color mb-5">Overview</p>
          <p class="mb-4">
            Featuring free WiFi throughout the property, Lakeside Motel
            Waterfront offers accommodations in Lakes Entrance, 19 mi from
            Bairnsdale. Free private parking is available on site.!
          </p>
          <p class="mb-4">
            Each room at this motel is air conditioned and comes with a
            flat-screen TV. You will find a kettle, toaster and a microwave in
            the room. Each room is fitted with a private bathroom. Guests have
            access to barbecue facilities and a lovely large lawn area. Metung
            is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi
            from the property.
          </p>
          <p class="mb-[44px]">
            Couples in particular like the location – they rated it 9.2 for a
            two-person trip.
          </p>
          <hr />
          <p class="mt-[26px] mb-6 text-lg font-medium text-footer-color">
            Top facilities
          </p>
          <div
            v-if="searchStore.hotelDetails"
            class="flex flex-row flex-wrap w-[440px]"
          >
            <div
              v-for="benefit in searchStore.hotelDetails.top_ufi_benefits"
              :key="benefit.icon"
              class="flex mb-[13px] w-[220px]"
            >
              <img src="../../assets/img/HotelDetails/like-1 1.png" />
              <span class="ml-[10px] text-[15px]">{{
                benefit.translated_name
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[447px] mt-[53px]">
        <iframe
          class="w-full h-60"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185094368!2d31.340866129036776!3d30.05961134289443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1700966520281!5m2!1sar!2seg"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <!-- <iframe v-if="searchStore.hotelDetails" src="'https://maps.google.com/maps?q=' + searchStore.hotelDetails.latitude + ',' + searchStore.hotelDetails.longitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed'" /> -->
        <!-- <iframe v-if="searchStore.hotelDetails" src="'//maps.google.com/maps?q=' + searchStore.hotelDetails.latitude + ',' + searchStore.hotelDetails.longitude + '&z=15&output=embed'"></iframe> -->
        <div>
          <p class="mt-[35px] mb-[22px]">Explore the area</p>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <img src="../../assets/img/HotelDetails/bxs-plane-alt 2.png" />
              <p class="text-place-holder text-sm font-normal ml-1">
                Hotel Penselvenyia
              </p>
            </div>
            <p class="text-place-holder text-sm font-normal">2 min drive</p>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <img src="../../assets/img/HotelDetails/bxs-map 1.png" />
              <p class="text-place-holder text-sm font-normal ml-1">
                Travis Bakery store house
              </p>
            </div>
            <p class="text-place-holder text-sm font-normal">10 min drive</p>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <img src="../../assets/img/HotelDetails/bxs-map 1.png" />
              <p class="text-place-holder text-sm font-normal ml-1">
                Olivia Johnson Garden
              </p>
            </div>
            <p class="text-place-holder text-sm font-normal">15 min drive</p>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <img src="../../assets/img/HotelDetails/bxs-map 1.png" />
              <p class="text-place-holder text-sm font-normal ml-1">
                Norman Opera Circus
              </p>
            </div>
            <p class="text-place-holder text-sm font-normal">18 min drive</p>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <img src="../../assets/img/HotelDetails/bxs-map 1.png" />
              <p class="text-place-holder text-sm font-normal ml-1">
                Rockdeset hotel
              </p>
            </div>
            <p class="text-place-holder text-sm font-normal">32 min drive</p>
          </div>
        </div>
        <!-- <iframe v-if="searchStore.hotelDetails" src="'https://maps.google.com/maps?q=' + searchStore.hotelDetails.latitude + ',' + searchStore.hotelDetails.longitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed'" /> -->
        <!-- <iframe v-if="searchStore.hotelDetails" src="'//maps.google.com/maps?q=' + searchStore.hotelDetails.latitude + ',' + searchStore.hotelDetails.longitude + '&z=15&output=embed'"></iframe> -->
      </div>
    </div>
    <div class="container">
      <p class="mt-10 mb-8 text-footer-color text-2xl font-semibold">
        Available rooms
      </p>
      <div class="flex flex-row flex-wrap gap-[15px] w-full">
        <div
          class="flex w-[447px] h-[340px] p-7 rounded-md bg-gradient-to-r from-[#4796FF] to-[#2366BF]"
        >
          <div class="flex flex-col items-start justify-center">
            <h3 class="text-lg flex font-medium text-white mb-[29.5px]">
              <span class="mr-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
                    fill="#fff"
                  /></svg></span
              >My Dream Place
            </h3>
            <p class="text-2xl font-bold text-white">20% off</p>
            <p class="text-2xl font-bold text-white">
              Use Promotional Coupon Code:
            </p>
            <p class="text-2xl font-bold text-[#FFD723]">Orlando</p>
          </div>
          <div class="w-[282px]">
            <img
              src="../../assets/img/HotelDetails/pngwing.com.png"
              class="h-full"
              alt="visitor image"
            />
          </div>
        </div>
        <div v-if="searchStore.RoomsArr">
          <div
            class="w-[447px] rounded-md"
            v-for="room in searchStore.RoomsArr"
            :key="room"
          >
            <div class="w-full h-[200px]">
              <img
                :src="room.value.photos[0].url_max1280"
                loading="lazy"
                class="rounded-t-md w-full h-full"
                alt="Room image"
              />
            </div>
            <div class="p-5 bg-white rounded-b-md">
              <p class="text-hotel-name text-lg font-medium">
                Standard twin ben, Multiple beds
              </p>
              <div class="mt-[18px]">
                <div class="flex mb-[13px]">
                  <img
                    src="../../assets/img/HotelDetails/bag-tick-2 1 (1).png"
                  />
                  <span class="ml-[10px] text-sm text-place-holder"
                    >300 sq ft</span
                  >
                </div>
                <div class="flex mb-[13px]">
                  <img
                    src="../../assets/img/HotelDetails/bag-tick-2 1 (1).png"
                  />
                  <span class="ml-[10px] text-sm text-place-holder"
                    >Sleeps 3</span
                  >
                </div>
                <div class="flex mb-[13px]">
                  <img
                    src="../../assets/img/HotelDetails/bag-tick-2 1 (1).png"
                  />
                  <span class="ml-[10px] text-sm text-place-holder"
                    >1 double bed and 1 twin bed</span
                  >
                </div>
              </div>
              <router-link :to="{ name: 'payment' }">
                <Button
                  value="Reserve suite"
                  class="w-full mt-[11px]"
                  @click="handleSelectHotel()"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- <p>Sorry..!! there are no Rooms available now.!</p> -->
          <HotelSkeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from "@/stores/UserStore";
import HotelSkeleton from './HotelSkeleton.vue'
import { useRoute } from "vue-router";
import Button from "@/components/Button.vue";
import { onMounted } from "vue";
const route = useRoute();
const hotelId = route.params.hotelId;
const searchStore = useSearchStore();
onMounted(() => {
  searchStore.getHotelDetails(hotelId);
});
const handleSelectHotel = () => {
  searchStore.selectHotel(searchStore.hotelDetails);
};
</script>

<style scoped></style>
