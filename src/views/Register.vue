<template>
  <div class="login justify-center items-center">
    <div class="mx-auto max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
        <h1 class="text-xl font-semibold mb-4">Register</h1>
        <div class="flex">
          <div class="mb-4 mr-2">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">First Name</legend>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Tim"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">Last Name</legend>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Burton"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">EMAIL</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">PASSWORD</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password_confirmation"
          >CONFIRM PASSWORD</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="******************"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >Register</button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2020 Event Booking. All rights reserved.</p>
    </div>
  </div>
</template>
