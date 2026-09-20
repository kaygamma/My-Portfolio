import React from "react";

function Footer() {
  return (
    <div className="static bottom-0 left-0 right-0 z-10 mt-auto">
      <div className="flex flex-col md:gap-24 md:flex-row items-center  justify-center gap-1.5 p-1 md:p-4 border  border-black/15 dark:border-white/15 bg-slate-100/10 dark:bg-black/60 text-slate-800 dark:text-slate-200 shadow-lg rounded-t-4xl backdrop-blur-sm transition-all duration-150">
        <p className="md:p-4 text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p>
          Built and Designed by <span>Edmund Yahaya</span>
        </p>
        <div>
          <a
            href="https://github.com/kaygamma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shadow-gray-100 text-md hover:underline"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/edmund-yahaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shadow-gray-100 text-md hover:underline"
          >
            LinkedIn
          </a>
          <span className="mx-2">|</span>
          <a
            href="mailto:yahedmund00@gamil.com"
            rel="noopener noreferrer"
            className="text-shadow-gray-100 text-md hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
