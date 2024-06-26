import React from 'react';
import dayjs from 'dayjs';
import './Footer.css';


//Day.js code to get current year
const now = dayjs();

const currentYear = now.year();

function Footer() {

    return (
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 alignFooter">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://flowbite.com/" className="hover:underline">Weather APP™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/privacypolicy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/licensing" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    )
}

export default Footer;