import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

export default function Signup() {
  return (
    <section className="w-full h-screen bg-sky-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 animate-slide-in-right">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">
          Sign Up
        </h2>

        <Link to={`/`}>
          <button className="absolute top-4 left-4 text-sky-700 hover:text-sky-900 transition">
            <FaArrowLeft size={22} />
          </button>
        </Link>

        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-700 text-white py-2 rounded-lg font-semibold hover:bg-sky-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Extra */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?
          </span>{" "}
          <Link
            to={`/login`}
            className="text-sm text-sky-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
