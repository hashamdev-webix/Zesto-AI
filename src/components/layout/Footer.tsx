import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Mail } from "lucide-react";

export function Footer() {
  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/ZestoAi.png"
                alt="Zesto AI Logo"
                className="h-10 md:h-12 w-auto"
                style={{ transform: "scale(1.75)" }}
              />
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Zesto AI – AI-Powered Restaurant Order Management Software in Canada
            </p>
          </div>

          {/* Navigate Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm md:text-base text-white/70">
              <li>
                <Link
                  to="/solutions"
                  onClick={handleLinkClick}
                  className="hover:text-brand transition-colors duration-200 inline-block"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  onClick={handleLinkClick}
                  className="hover:text-brand transition-colors duration-200 inline-block"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  onClick={handleLinkClick}
                  className="hover:text-brand transition-colors duration-200 inline-block"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  onClick={handleLinkClick}
                  className="hover:text-brand transition-colors duration-200 inline-block"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="hover:text-brand transition-colors duration-200 inline-block"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-white/70">
              <li className="flex gap-2 md:gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-brand shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  30 Eglinton Ave W #405, Mississauga, ON, Canada, L5R 3E7
                </span>
              </li>
              <li className="flex gap-2 md:gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-brand shrink-0 mt-0.5" />
                <a
                  href="mailto:zestoai@mail.com"
                  className="hover:text-brand transition-colors duration-200"
                >
                  zestoai@mail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">Follow</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/zesto_ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-brand transition-colors duration-200 flex items-center justify-center"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590471445499"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-brand transition-colors duration-200 flex items-center justify-center"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <Link
                to="/"
                onClick={handleLinkClick}
                aria-label="Twitter"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-brand transition-colors duration-200 flex items-center justify-center"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-5 md:py-6 text-center text-xs md:text-sm text-white/50">
          © 2024 Zesto AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
