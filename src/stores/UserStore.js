import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    registeredUsers: [],
    loggedInUser: null,
    isAuth: false,
  }),
  actions: {
    registerUser(user) {
      this.registeredUsers.push(user);
      alert("User registered successfully!");
      console.log(this.registeredUsers);
    },
    loginUser(loginUser) {
      const user = this.registeredUsers.find(
        (u) =>
          u.userEmail === loginUser.email &&
          u.userPassword === loginUser.password
      );
      if (user) {
        this.loggedInUser = user;
        localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
        this.isAuth = true;
        alert("Login successful!");
      } else {
        alert(
          "Invalid email or password. Please try again Or register with new email."
        );
      }
    },
    checkLocalStorage() {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        this.loggedInUser = JSON.parse(storedUser);
        this.isAuth = true;
      }
    },
  },
});
export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    searchResults: null,
    sortByOptions: null,
    hotelDestination: null,
    hotelDestinations: null,
    checkInDate: null,
    checkOutDate: null,
    guests: null,
    rooms: null,
    sortByValue: null,
    minBudget: null,
    maxBudget: null,
    count: null,
    destName: null,
    initialPageNumber: 1,
    hotelDetails: null,
    searchNumber: null,
    RoomsArr: null,
    selectedHotel: [],
    userAllTrips: [],
  }),
  actions: {
    async getResults(
      hotelDestinations,
      checkInDate,
      checkOutDate,
      guests,
      rooms
    ) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: hotelDestinations,
          search_type: "CITY",
          arrival_date: checkInDate,
          departure_date: checkOutDate,
          adults: guests,
          room_qty: rooms,
          page_number: "1",
          languagecode: "en-us",
          currency_code: "AED",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        //   console.log(response.data);
        const arr = Object.keys(response.data).map((key) => ({
          key,
          value: response.data[key],
        }));
        this.searchResults = arr;
        console.log(arr);
        this.searchResults = this.searchResults[3].value.hotels;
        this.searchNumber = arr[3].value.meta[0].title;
        this.initialPageNumber = 1;
        // this.count = this.hotelDestination[1].hotels
        // this.destName = this.hotelDestination[1].city_name
        console.log(this.searchNumber);
      } catch (error) {
        console.error(error);
      }
    },
    getSearchFormData(
      hotelDestinations,
      checkInDate,
      checkOutDate,
      guests,
      rooms
    ) {
      this.hotelDestinations = hotelDestinations;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate;
      this.guests = guests;
      this.rooms = rooms;
    },
    // getFilterData(sortByValue){
    //   this.sortByValue = sortByValue
    // },
    async getHotelDest() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        params: { query: "egypt" },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.hotelDestination = response.data.data;
        console.log(response.data.data);
        console.log(this.hotelDestination);
      } catch (error) {
        console.error(error);
      }
    },
    async getSortByOptions() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
        params: {
          dest_id: this.hotelDestinations,
          search_type: "CITY",
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        this.sortByOptions = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async sortByAction(sortByValue, min, max) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.hotelDestinations,
          search_type: "CITY",
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
          sort_by: sortByValue,
          price_min: min,
          price_max: max,
          page_number: "1",
          languagecode: "en-us",
          currency_code: "AED",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        const arr = Object.keys(response.data).map((key) => ({
          key,
          value: response.data[key],
        }));
        this.searchResults = arr;
        this.searchResults = this.searchResults[3].value.hotels;
        console.log(this.searchResults);
      } catch (error) {
        console.error(error);
      }
    },
    async getHotelDetails(hotelId) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
        params: {
          hotel_id: hotelId,
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
          languagecode: "en-us",
          currency_code: "EUR",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data.rooms);
        const RoomsArr = Object.keys(response.data.data.rooms).map((key) => ({
          key,
          value: response.data.data.rooms[key],
        }));
        this.RoomsArr = RoomsArr;
        console.log(RoomsArr);
        this.hotelDetails = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    searchByQuery(query) {
      this.searchResults.filter((hotel) => {
        return hotel.property.name.toLowerCase().includes(query.toLowerCase());
      });
    },
    async getResultsFromPagination(sortByValue, min, max) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.hotelDestinations,
          search_type: "CITY",
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
          page_number: this.initialPageNumber,
          sort_by: sortByValue,
          price_min: min,
          price_max: max,
          languagecode: "en-us",
          currency_code: "AED",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        //   console.log(response.data);
        const arr = Object.keys(response.data).map((key) => ({
          key,
          value: response.data[key],
        }));
        this.searchResults = arr;
        this.searchResults = this.searchResults[3].value.hotels;
        ++this.initialPageNumber;
        // this.count = this.hotelDestination[1].hotels
        // this.destName = this.hotelDestination[1].city_name
        console.log(this.searchResults);
      } catch (error) {
        console.error(error);
      }
    },
    async getResultsFromPrevPagination(sortByValue, min, max) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.hotelDestinations,
          search_type: "CITY",
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
          page_number: this.initialPageNumber,
          sort_by: sortByValue,
          price_min: min,
          price_max: max,
          languagecode: "en-us",
          currency_code: "AED",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        //   console.log(response.data);
        const arr = Object.keys(response.data).map((key) => ({
          key,
          value: response.data[key],
        }));
        this.searchResults = arr;
        this.searchResults = this.searchResults[3].value.hotels;
        --this.initialPageNumber;
        // this.count = this.hotelDestination[1].hotels
        // this.destName = this.hotelDestination[1].city_name
        console.log(this.searchResults);
      } catch (error) {
        console.error(error);
      }
    },
    // filter(product => !product.category.indexOf(this.category))
    async filterByBudget(min, max, sortByValue) {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: this.hotelDestinations,
          search_type: "CITY",
          arrival_date: this.checkInDate,
          departure_date: this.checkOutDate,
          adults: this.guests,
          room_qty: this.rooms,
          sort_by: sortByValue,
          price_min: min,
          price_max: max,
          page_number: this.initialPageNumber,
          languagecode: "en-us",
          currency_code: "AED",
        },
        headers: {
          "X-RapidAPI-Key":
            "c691aeae33msh3763586ea30a644p1daf87jsn1c1462b987d9",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        const arr = Object.keys(response.data).map((key) => ({
          key,
          value: response.data[key],
        }));
        this.searchResults = arr;
        this.searchResults = this.searchResults[3].value.hotels;
        console.log(this.searchResults);
      } catch (error) {
        console.error(error);
      }
    },
    selectHotel(hotel) {
      // this.selectedHotel.push(hotel);
      this.selectedHotel = [hotel]
    },
    allTrips(){
      this.userAllTrips.push(...this.selectedHotel)
      localStorage.setItem('userTrips',JSON.stringify(this.userAllTrips))
    }
  },
});
