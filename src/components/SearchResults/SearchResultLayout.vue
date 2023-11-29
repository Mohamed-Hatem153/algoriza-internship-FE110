<template>
  <div class="container mt-20">
    <div class="h-full w-full flex justify-between">
      <div class="w-[295px]">
        <div class="py-5 px-5 bg-input-bg rounded-md">
          <p class="text-footer-color mb-4">Search by property name</p>
          <div
            class="p-1 pl-2 flex items-center bg-white text-sm rounded border-2"
          >
            <div class="flex">
              <span><img src="../../assets/img/search.png" /></span>
            </div>
            <input
              @change="handleSearchByQuerey()"
              v-model="searchQuery"
              type="text"
              placeholder="eg. Beach westpalm"
              class="p-2 pl-3 bg-white placeholder-place-holder rounded outline-none w-full"
            />
          </div>
        </div>
        <p class="p-5 text-lg font-semibold text-links-color">Filter by</p>
        <div class="border-2 rounded-md">
          <div class="">
            <p class="bg-input-bg py-[18px] px-[18px]">Your budget per day</p>
            <div class="py-[18px] px-[18px] pb-1">
              <div
                class="pb-[14px] flex items-center"
                v-for="budget in budgets"
                :key="budget.value"
              >
                <input
                  type="checkbox"
                  v-model="selected"
                  :value="budget.value"
                  :disabled="budgetInputesToggle"
                  class="w-5 h-5"
                />
                <label class="pl-2 text-sm font-normal">{{
                  budget.title
                }}</label>
              </div>
            </div>
          </div>
          <div class="py-[18px] px-[18px] pt-0">
            <div class="flex items-center justify-between mb-[15px]">
              <p>Set your own budget</p>
              <label
                for="toogleTwo"
                class="flex items-center cursor-pointer select-none text-dark dark:text-white"
              >
                <div class="relative">
                  <input
                    id="toogleTwo"
                    type="checkbox"
                    v-model="budgetInputesToggle"
                    @change="!budgetInputesToggle"
                    class="peer sr-only"
                  />
                  <div
                    class="h-4 rounded-full shadow-inner bg-gray-300 dark:bg-dark-2 w-10"
                  ></div>
                  <div
                    class="absolute left-0 transition bg-white shadow-xl shadow-gray-400 rounded-full dot dark:bg-dark-4 -top-1 h-6 w-6 peer-checked:translate-x-full peer-checked:bg-primary"
                  ></div>
                </div>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <input
                type="number"
                @change="handleSortByOptionsChanges()"
                placeholder="Min budget"
                v-model="minValue"
                :disabled="!budgetInputesToggle"
                class="w-28 text-xs font-normal border-[1px] rounded outline-none p-3"
              />
              <input
                type="number"
                @change="handleSortByOptionsChanges()"
                placeholder="Max budget"
                v-model="maxValue"
                :disabled="!budgetInputesToggle"
                class="w-28 text-xs font-normal border-[1px] rounded outline-none p-3"
              />
            </div>
          </div>
        </div>
        <div class="mt-5 border-2 rounded-md">
          <p class="bg-input-bg py-[18px] px-[18px]">Rating</p>
          <div class="px-[18px] pb-6">
            <p class="mt-5 mb-2">Show only ratings more than</p>
            <div class="flex justify-center items-center cursor-pointer">
              <div
                v-for="rate in rating"
                :key="rate"
                class="flex border-[1px] border-filter-input rounded p-[10px]"
              >
                <!-- <input type="checkbox" :id="rate" v-model="rateValue" :value="rate" class="hidden"/>
                    <label :for="rate">{{ rate }}<span class="fa fa-star checked cursor-pointer text-orange-400 ml-1"></span></label> -->
                <input
                  type="checkbox"
                  :id="rate"
                  v-model="rateValue"
                  :value="rate"
                  class="checkbox"
                />
                <label
                  class="flex items-center cursor-pointer justify-center"
                  :for="rate"
                >
                  <span class="mr-[3px]">{{ rate }}</span>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1002px] ml-[30px]">
        <div class="flex justify-between">
          <div>
            <p
              v-if="searchStore.searchResults"
              class="text-footer-color text-2xl font-semibold"
            >
              {{ searchStore.searchResults[0].property.wishlistName }}:
              {{ searchStore.searchNumber.split(" ")[0] }} search results found
            </p>
          </div>
          <div
            class="px-3 py-2 flex flex-col items-start bg-input-bg text-sm rounded"
          >
            <div>
              <span class="pl-1 text-xs font-medium text-place-holder"
                >Sort by</span
              >
            </div>
            <select
              v-model="sortByValue"
              @change="handleSortByOptionsChanges()"
              v-if="searchStore.sortByOptions"
              class="py-1 px-0 pe-9 outline-none w-full bg-input-bg border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            >
              <option disabled selected>Recommended</option>
              <option
                v-for="option in searchStore.sortByOptions"
                :value="option.id"
                :key="option.id"
              >
                {{ option.title }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="searchStore.searchResults">
          <div
            v-for="h in searchStore.searchResults"
            :key="h.hotel_id"
            class="h-60 mt-6"
          >
          <Suspense>
            <AsyncHotel :hotel="h" v-if="h.property.id" />
            <template #fallback>
              <HotelSkeleton />
            </template>
          </Suspense>
          </div>
        </div>
      </div>
    </div>
    <!--Pagination-->
    <nav v-if="searchStore.searchResults" aria-label="Page navigation example">
      <ul
        class="flex items-center -space-x-px h-[40px] text-sm justify-center mt-14 mb-24"
      >
        <li class="h-full" @click="handlePaginationPrev()">
          <span
            class="flex items-center justify-center cursor-pointer px-3 h-full ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </li>
        <li class="h-full">
          <span
            class="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >1</span
          >
        </li>
        <li class="h-full">
          <span
            class="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >...</span
          >
        </li>
        <li class="h-full">
          <span
            class="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >{{ searchStore.initialPageNumber }}</span
          >
        </li>
        <li class="h-full">
          <span
            class="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >...</span
          >
        </li>
        <li class="h-full">
          <span
            class="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >20</span
          >
        </li>

        <li class="h-full" @click="handlePaginationNext()">
          <span
            class="flex items-center justify-center cursor-pointer px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {defineAsyncComponent} from 'vue'
const AsyncHotel = defineAsyncComponent(() =>
  import('./Hotel.vue')
)
// import Hotel from "./Hotel.vue";
import HotelSkeleton from './HotelSkeleton.vue';
import { computed, onMounted, ref, watch } from "vue";
import { useSearchStore } from "@/stores/UserStore";
const searchStore = useSearchStore();
const sortByValue = ref("Recommended");
const budgetInputesToggle = ref(false);
const minValue = ref(null);
const maxValue = ref(null);
const searchQuery = ref("");
const rateValue = ref([]);
// const hotelDest = ref(searchStore.hotelDestination)
// const budgetRange = ref()
// const budgets = ref(["$0 - $200","$200 - $500","$500 - $1,000","$1,000 - $2,000","$2,000 - $5,000"])
const rating = [1, 2, 3, 4, 5];
const budgets = ref([
  { title: "$0 - $200", value: "0-200" },
  { title: "$200 - $500", value: "200-500" },
  { title: "$500 - $1,000", value: "500-1000" },
  { title: "$1,000 - $2,000", value: "1000-2000" },
  { title: "$2,000 - $5,000", value: "2000-5000" },
]);
const selected = ref([]);
// const minAndMaxFromCheckBox = selected.value.split("-")
// const minVal = minAndMaxFromCheckBox[0]
// const manVal = minAndMaxFromCheckBox[1]
const singleSelection = () => {
  selected.value = [];
};
watch(searchQuery, (newVal) => {
  filterByQuerey();
});
watch(rateValue, (newVal) => {
  filterByRate();
});
// watch(selected,(newVal)=>{
//     handleFilterByBudget()
// })
// searchStore.searchResults = computed(()=>{
//     return searchStore.searchResults.filter((hotel)=>{
//         return hotel.property.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//     })
// })
const filterByQuerey = () => {
  searchStore.searchResults.forEach((hotel) => {
    hotel.property.id = hotel.property.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
};
const filterByRate = () => {
  searchStore.searchResults.forEach((hotel) => {
    hotel.property.id =
      (hotel.property.reviewScore / 2).toFixed(1) >= rateValue.value;
  });
};
const handleSearchByQuerey = () => {
  searchStore.searchByQuery(searchQuery.value);
};
// const handleSearchInput = ()=>{
//     console.log('key')
//     computed(()=>{
//         searchStore.searchResults.filter((hotel)=>{
//         return hotel.property.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//     })
//     })
// }
onMounted(() => {
  searchStore.getSortByOptions();
  //   searchStore.getFilterData(sortByValue.value)
  //   searchStore.getFilterData(sortByValue)
});
const handleSortByOptionsChanges = () => {
  searchStore.sortByAction(sortByValue.value, minValue.value, maxValue.value);
};
const handleFilterByBudget = () => {
  searchStore.filterByBudget(
    sortByValue.value,
    selected.value[0].split("-")[0],
    selected.value[0].split("-")[1]
  );
};
const handlePaginationNext = () => {
  searchStore.getResultsFromPagination(
    sortByValue.value,
    minValue.value,
    maxValue.value
  );
};
const handlePaginationPrev = () => {
  searchStore.getResultsFromPrevPagination(
    sortByValue.value,
    minValue.value,
    maxValue.value
  );
};
const rate = (e) => {
  console.log(e.target.value);
};
</script>
<style scoped>
.checkbox {
  display: none;
}

label svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #000;
  stroke-width: 2px;
}

.checkbox:checked + label svg {
  fill: #ffc107;
  animation: pop_42 0.5s ease-out;
}

@keyframes pop_42 {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
