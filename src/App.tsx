import React, { useState } from 'react';
import Logo from './img/logo.svg';
import IllustrationIntro from './img/illustration-intro.svg';
import AvatarAnisha from './img/avatar-anisha.png';
import AvatarRichard from './img/avatar-richard.png';
import AvatarShanai from './img/avatar-shanai.png';
import AvatarAli from './img/avatar-ali.png';
import LogoWhite from './img/logo-white.svg';
import FacebookIcon from './img/icon-facebook.svg';
import YoutubeIcon from './img/icon-youtube.svg';
import TwitterIcon from './img/icon-twitter.svg';
import PinterestIcon from './img/icon-pinterest.svg';
import InstagramIcon from './img/icon-instagram.svg';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="container relative mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={Logo} alt="" />
          </div>

          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>

          {/* Button */}
          <a
            href="#"
            className="hidden rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            onClick={() => setOpenMenu((prev) => !prev)}
            className={`hamburger block focus:outline-none md:hidden ${openMenu ? 'open' : ''}`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute left-6 right-6 mt-10 flex-col items-center space-y-6 self-end bg-white
            py-8 font-bold drop-shadow-md  sm:w-auto sm:self-center ${
              openMenu ? 'flex' : 'hidden'
            }`}
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}
        <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-y-0 ">
          {/* Left Item */}
          <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
            <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
              Bring Everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the
              larger tam goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img src={IllustrationIntro} alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        {/* Flex Container */}
        <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
          {/* What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the complexity. Our
              software is tailor-made for modern digital product teams
            </p>
          </div>

          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">01</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go from tracking progress
                  at the milestone level all the way done to the smallest of details. Never lose
                  sight of the bigger picture again.
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">02</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go from tracking progress
                  at the milestone level all the way done to the smallest of details. Never lose
                  sight of the bigger picture again.
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">03</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go from tracking progress
                  at the milestone level all the way done to the smallest of details. Never lose
                  sight of the bigger picture again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section id="testimonials">
        {/* Container to heading and testm blocks */}
        <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold">What's Different About Manage?</h2>

          {/* Testimonials Container */}
          <div className="mt-24 flex flex-col space-y-16 md:flex-row md:space-x-6 md:space-y-0">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
              <img src={AvatarAnisha} className="-mt-14 w-16" alt="" />
              <h5 className="text-lg font-bold ">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Manage has supercharged our team's workflow. The ability to maintain visibility on
                larger milestones at all times keeps everyone motivated."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
              <img src={AvatarAli} className="-mt-14 w-16" alt="" />
              <h5 className="text-lg font-bold ">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since using Manage. There
                is no more cross-channel confusion and everyone is much more focused.”
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
              <img src={AvatarRichard} className="-mt-14 w-16" alt="" />
              <h5 className="text-lg font-bold ">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to maintain visibility on
                larger milestones at all times keeps everyone motivated.”
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="my-16">
            <a
              href="#"
              className="rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-brightRed">
        {/* Flex Container */}
        <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
          {/* Heading */}
          <h2 className="text-center text-5xl font-bold leading-tight text-white md:max-w-xl md:text-left md:text-4xl">
            Simplify how your team works today
          </h2>
          {/* Button */}
          <a
            href="#"
            className="rounded-full bg-white p-3 px-6 pt-2 text-brightRedLight shadow-2xl hover:bg-gray-500"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
          {/* Logo and Social Links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>

            {/* Logo */}
            <div>
              <img src={LogoWhite} className="h-8" alt="" />
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center space-x-4">
              {/* Link1 */}
              <a href="#">
                <img src={FacebookIcon} className="h-8" alt="" />
              </a>
              {/* Link1 */}
              <a href="#">
                <img src={YoutubeIcon} className="h-8" alt="" />
              </a>
              {/* Link1 */}
              <a href="#">
                <img src={TwitterIcon} className="h-8" alt="" />
              </a>
              {/* Link1 */}
              <a href="#">
                <img src={PinterestIcon} className="h-8" alt="" />
              </a>
              {/* Link1 */}
              <a href="#">
                <img src={InstagramIcon} className="h-8" alt="" />
              </a>
            </div>
          </div>

          {/* List Container */}
          <div className="flex justify-around space-x-32  ">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Product
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Input Container */}
          <div className="flex flex-col justify-between ">
            <form>
              <div className="flex space-x-3">
                <input
                  className="flex-1 rounded-full px-4 focus:outline-none"
                  type="text"
                  placeholder="Updated in your inbox"
                />
                <button className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>

            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
