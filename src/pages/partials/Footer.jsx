import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-20">
      <div className="container mx-auto ">
        {/* Inspiration Section */}
        <div className="border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Inspiration for future getaways</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium mb-2">Popular</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Canmore - Apartment rentals</li>
                <li>Benalmádena - Beach house rentals</li>
                <li>Marbella - Beach house rentals</li>
                <li>Mijas - Flat rentals</li>
                <li>Prescott - Cabin rentals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Outdoors</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Jasper - Cabin rentals</li>
                <li>Mountain View - Cabin rentals</li>
                <li>Tucson - Pet-friendly rentals</li>
                <li>Devonport - Cottage rentals</li>
                <li>Mallacoota - Beach house rentals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Family</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Anaheim - Family-friendly rentals</li>
                <li>Monterey - Cottage rentals</li>
                <li>Paso Robles - House rentals</li>
                <li>Santa Barbara - Beachfront rentals</li>
                <li>Sonoma - House rentals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Find a co-host</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Airbnb</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <p>© 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span>English (IN)</span>
            <span>₹ INR</span>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="flex h-6 aspect-square items-center justify-center text-xl bg-zinc-800 ">
              <i className="ri-facebook-fill text-zinc-100"></i>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-6 aspect-square items-center justify-center text-xl bg-zinc-800 ">
              <i className="ri-twitter-fill text-zinc-100"></i>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-6 aspect-square items-center justify-center text-xl bg-zinc-800 ">
              <i className="ri-instagram-line text-zinc-100"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
