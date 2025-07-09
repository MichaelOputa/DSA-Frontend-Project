import React from "react";

// You may need to import styles and scripts in your index.html or via npm packages for Tailwind and FontAwesome

const Home: React.FC = () => {
  return (
    <>
      <div className="font-sans">
        {/* Navigation Header */}
        <header className="bg-purple-600 shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
              <h1 className="text-white font-bold text-2xl">Mentify</h1>
            </div>

            <div className="flex space-x-4">
              <a
                href="/login"
                className="text-white hover:text-purple-200 px-3 py-1 rounded-md transition"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md font-medium transition"
              >
                Register
              </a>
            </div>
            <button className="md:hidden text-white text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Mentorship and Learning"
            className="w-full h-auto max-h-screen object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(109, 40, 217, 0.7)" }}
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-white text-6x1 md:text-5xl font-bold mb-1">
                Welcome to DSA Platform.
              </h1>
              <h1 className="text-white text-1 md:text-4xl font-semibold mb-6">
                Master Data Structures & Algorithms with Expert Mentorship
                Connect with Industry Professionals & Boost Your Career
              </h1>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/register"
                  className="cta-button bg-white text-purple-600 hover:bg-purple-100 px-8 py-3 rounded-md font-bold text-lg transition duration-300"
                >
                  Find a Mentor
                </a>
                <a
                  href="#"
                  className="cta-button border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-md font-bold text-lg transition duration-300"
                >
                  Be a Mentor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
              Why Choose Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                <div className="text-purple-600 text-4xl mb-4">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
                <p className="text-gray-600">
                  Learn from industry experts with years of experience in
                  teaching DSA concepts and interview preparation.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                <div className="text-purple-600 text-4xl mb-4">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Comprehensive Curriculum
                </h3>
                <p className="text-gray-600">
                  Structured learning path covering all essential data
                  structures and algorithms with real-world applications.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                <div className="text-purple-600 text-4xl mb-4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Hands-on Practice</h3>
                <p className="text-gray-600">
                  Solve hundreds of problems with our interactive coding
                  environment and get instant feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-xl">Students Enrolled</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl">Hours of Content</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-xl">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold mr-4">
                    JP
                  </div>
                  <div>
                    <h4 className="font-bold">Jared Peters</h4>
                    <p className="text-gray-500">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "This platform completely transformed my approach to problem
                  solving. The mentorship program helped me land my dream job at
                  Google!"
                </p>
                <div className="mt-3 text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Kings</h4>
                    <p className="text-gray-500">
                      Frontend Developer at Amazon
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The structured curriculum and practice problems were exactly
                  what I needed to prepare for my technical interviews. Highly
                  recommended!"
                </p>
                <div className="mt-3 text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Master Data Structures & Algorithms?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their coding
              skills and landed their dream tech jobs.
            </p>
            <a
              href="/register"
              className="inline-block bg-white text-purple-600 hover:bg-purple-100 px-8 py-4 rounded-md font-bold text-lg transition duration-300"
            >
              Start Your Journey Today
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">DSA Platform</h3>
                <p className="text-gray-400">
                  The ultimate platform to master Data Structures and Algorithms
                  and ace your technical interviews.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Stay Updated
                </h4>
                <p className="mb-4">
                  Get the latest mentorship tips, success stories, and platform
                  updates delivered to your inbox.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      Webinars
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-700 transition"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-2">
                  Email:{" "}
                  <a
                    href="mailto:info@dsaplatform.com"
                    className="hover:text-purple-700"
                  >
                    michaeloputa823@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  Phone:{" "}
                  <a href="tel:+1234567890" className="hover:text-purple-700">
                    +234 810 3038 1019
                  </a>
                </p>
                <p className="text-gray-600">Location: Lagos, Nigeria</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">
                &copy; 2025 DSA Platform. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;