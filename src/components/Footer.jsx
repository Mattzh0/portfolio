const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 relative">
      <div className="text-white-500 flex gap-2">
        <p>Matthew's Portfolio</p>
        <p>|</p>
        <p>Go to Top</p>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3">
        <div className="social-icon">
          <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">© 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
