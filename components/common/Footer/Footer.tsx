import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <p className="mb-6 text-sm text-slate-50 font-bold">
              © {new Date().getFullYear()} Resz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
