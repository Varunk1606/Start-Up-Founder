import React from 'react';

const page = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto py-12 px-6">
      
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        About Startup Funder 
        <span><img width={80} src="icons/logo.png" alt="" /></span>
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        <strong>Startup Funder</strong> is a platform built to empower creators, innovators, and entrepreneurs. 
        We help people with great ideas receive financial support from a community that believes in their work.
        Whether you&apos;re a creator, developer, student, or founder, Startup Funder gives you the freedom to build 
        without limits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white flex items-center">
        Our Mission 
        <span><img width={80} src="icons/coin.gif" alt="" /></span>
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Our mission is to make funding accessible, transparent, and effortless. We aim to provide a seamless 
        platform where supporters can back creators safely, and creators can showcase their work, receive 
        payments, and grow with the support of their audience — all in one place.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
        Why We Built Startup Funder
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Many creators struggle with limited financial support, complicated payment systems, high fees, and poor 
        visibility. Startup Funder solves these problems by giving creators personalized funding pages, instant 
        Razorpay-powered payments, easy sharing features, and complete control over their revenue.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white flex items-center">
        What Makes Us Different 
        <span><img width={80} src="icons/group.gif" alt="" /></span>
      </h2>

      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6 space-y-2">
        <li>Creator-first design focused on ease and speed</li>
        <li>Fast and secure Razorpay integration</li>
        <li>Simple, no-hassle setup</li>
        <li>Transparent and trustworthy platform</li>
        <li>Community-driven growth</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white flex items-center">
        Who Can Use Startup Funder? 
        <span><img width={80} src="icons/man.gif" alt="" /></span>
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Startup Funder is perfect for creators of all kinds — YouTubers, developers, designers, students, artists, 
        writers, educators, and anyone with a meaningful idea to build.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
        Our Vision
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        We envision a world where funding barriers never stop innovation. A world where creators can work 
        independently, grow sustainably, and bring their ideas to life.
      </p>

      <p className="mt-10 text-gray-700 dark:text-gray-300 font-bold text-center">
        Thank you for being a part of this journey. Together, we can help build the future — one idea at a time.
      </p>

    </div>
    </>
  );
};

export default page;

export const metadata = {
    title: "About - Startup Funder",
}
