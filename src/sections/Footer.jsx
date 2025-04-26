const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
          <a href="https://github.com/vedantsp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/github.svg" alt="github" className="w-5 h-5" />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
          <a href="https://www.instagram.com/vedant_s_p/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5" />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
          <a href="https://www.linkedin.com/in/vedantsp/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Vedant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
