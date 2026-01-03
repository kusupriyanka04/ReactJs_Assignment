function App() {
  return (
    <>
      {/* Button styling */}
      <div class="text-center my-6">
        <button class="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          Click
        </button>
      </div>

      {/* Responsive Text & Image */}
      <section class="p-8 text-center">
        <h2 class="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Tailwind CSS Exploration
        </h2>

        <div class="mt-6 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"
            class="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            alt="Hero"
          />
        </div>
      </section>
      {/* List Styling */}
      <ul class="list-disc list-inside pl-5 space-y-2 max-w-md mx-auto">
        <li class="hover:text-blue-600">Tailwind Utilities</li>
        <li class="hover:text-blue-600">Responsive Design</li>
        <li class="hover:text-blue-600">Hover & Focus States</li>
      </ul>
      {/* Card Component */}
      <section class="p-8">
        <div class="bg-white rounded-lg shadow p-4 max-w-sm mx-auto">
          <img
            src="https://www.shutterstock.com/image-photo/summer-background-flowers-nature-beautiful-600nw-1038824167.jpg"
            class="rounded mb-4"
            alt="card"
          />
          <h3 class="text-xl font-semibold mb-2">Card Title</h3>
          <p class="text-gray-600 mb-4">
            This is a simple card component style with Tailwind CSS.
          </p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </section>
      {/* Table Styling */}
      <section class="p-8 overflow-x-auto">
        <table class="w-full border border-gray-300 bg-white">
          <thead class="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th class="border p-2">Name</th>
              <th class="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-cyan-50 hover:bg-blue-100">
              <td class="border p-2">1</td>
              <td class="border p-2">Item One</td>
              <td class="border p-2">Active</td>
            </tr>
            <tr class="even:bg-teal-50 hover:bg-blue-100">
              <td class="border p-2">2</td>
              <td class="border p-2">Item Two</td>
              <td class="border p-2">Inactive</td>
            </tr>
            <tr class="odd:bg-cyan-50 hover:bg-blue-100">
              <td class="border p-2">3</td>
              <td class="border p-2">Item Three</td>
              <td class="border p-2">Active</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* InputForm */}
      <section class="p-8">
        <form class="bg-white p-6 rounded shadow max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>
      {/* Navigation Bar */}
      <nav class="bg-white shadow p-4">
        <ul class="flex flex-col md:flex-row md:space-x-6">
          <li>
            <a href="#" class="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Responsive Grid Layout */}
      <section class="p-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded shadow">Card 1</div>
          <div class="bg-white p-4 rounded shadow">Card 2</div>
          <div class="bg-white p-4 rounded shadow">Card 3</div>
          <div class="bg-white p-4 rounded shadow">Card 4</div>
          <div class="bg-white p-4 rounded shadow">Card 5</div>
          <div class="bg-white p-4 rounded shadow">Card 6</div>
        </div>
      </section>
    </>
  );
}

export default App;
