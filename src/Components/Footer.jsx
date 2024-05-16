import React from "react";

const Footer = () => {
  const pages = ["Home", "About us", "Movies", "F&Q"];
  const socialNetworks = ["Telegram", "Instagram", "Facebook", "Youtube"];
  const forReference = ["Telegram", "Instagram", "Facebook", "Youtube"];
  return (
    <div className="xl:container xl:mx-auto text-white">
      <div className="flex flex-col space-y-4 items-center px-4 md:px-12 xl:px-24 py-12">
        <div className="w-full flex flex-col space-y-6 lg:space-y-0 pb-4 lg:pb-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="h-36  text-3xl  lg:h-48">Logo</h1>
            </div>
            <div className="max-w-lg text-center">
              MovieMint liberates Filmmakers and fans through decentralized
              funding. Our Blockchain platform seamlessly connects Independent
              Creators and Passionate Supporters.
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-row justify-between md:justify-evenly items-center">
            {/* Pages */}
            <ol className="flex flex-col space-y-1">
              <li className="text-movieText font-semibold text-sm lg:text-lg">
                Pages
              </li>
              {pages.map((page, index) => (
                <li key={index} className="flex items-center cursor-pointer">
                  {page}
                </li>
              ))}
            </ol>

            {/* Social Networks */}
            <ol className="flex flex-col space-y-1">
              <li className="text-movieText font-semibold text-sm lg:text-lg">
                Our social networks
              </li>
              {socialNetworks.map((network, index) => (
                <li key={index} className="flex items-center cursor-pointer">
                  {network}
                </li>
              ))}
            </ol>

            {/* For Reference */}
            <ul className="flex flex-col space-y-1  pl-4">
              <li className="text-movieText font-semibold text-sm lg:text-lg">
                For reference
              </li>
              {forReference.map((item, index) => (
                <li key={index} className="flex items-center cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
