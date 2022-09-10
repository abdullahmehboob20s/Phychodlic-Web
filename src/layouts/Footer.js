import React from "react";
import SocialIcon from "components/SocialIcon";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pb-100px">
      <div className="container">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <img src="images/logo.png" className="w-32 mb-8" alt="" />

            <p className="text-white text-base leading-[1.6] mb-8 opacity-80">
              The option eyes by something from the than a no offering a more to
              and the likely behavioural thought rhetoric of right now{" "}
            </p>

            <div className="flex items-center space-x-4">
              <SocialIcon
                href="/"
                target="_blank"
                rel="noreferrer"
                Icon={() => <FaInstagram className="text-white text-xl" />}
              />
              <SocialIcon
                href="/"
                target="_blank"
                rel="noreferrer"
                Icon={() => <FaTwitter className="text-white text-lg" />}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h4 className="text-xl text-white font-medium mb-8">Company</h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-base text-white opacity-80"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-base text-white opacity-80"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-base text-white opacity-80"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-xl text-white font-medium mb-8">Newsletter</h4>

            <p className="text-base text-white opacity-80 leading-[1.6] mb-6">
              Get the latest news, product updates and special offer from us. We
              hate spamming.
            </p>

            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 w-full h-12 px-5 outline-none bg-dark-green rounded-md"
              />
              <button
                type="submit"
                className="gradient-button h-12 px-6 rounded-md capitalize"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
