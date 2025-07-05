// // "use client";
// // import Image from "next/image";
// // import { useState, useEffect, useRef } from "react";
// // import { usePathname } from "next/navigation";
// // import { Twitter, Youtube, Facebook, Instagram, X } from "lucide-react";

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const menuRef = useRef<HTMLDivElement>(null);
// //   const pathname = usePathname();

// //   // Close menu when clicking outside or on a link
// //   useEffect(() => {
// //     function handleClickOutside(event: MouseEvent) {
// //       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
// //         setIsMenuOpen(false);
// //       }
// //     }

// //     // Handle scroll effect
// //     function handleScroll() {
// //       setIsScrolled(window.scrollY > 10);
// //     }

// //     document.addEventListener("mousedown", handleClickOutside);
// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   // Close menu when route changes
// //   useEffect(() => {
// //     setIsMenuOpen(false);
// //   }, [pathname]);

// //   // Prevent body scroll when menu is open
// //   useEffect(() => {
// //     if (isMenuOpen) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }

// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [isMenuOpen]);

// //   const navLinks = [
// //     { href: "#home", label: "Über Uns" },
// //     { href: "#leistungen", label: "Leistungen" },
// //     { href: "#projekte", label: "Portfolio" },
// //     { href: "#blog", label: "Blog" },
// //     { href: "#kontakt", label: "Kontakt", isButton: true },
// //   ];

// //   const socialLinks = [
// //     { icon: Twitter, href: "#", label: "Twitter" },
// //     { icon: Youtube, href: "#", label: "YouTube" },
// //     { icon: Facebook, href: "#", label: "Facebook" },
// //     { icon: Instagram, href: "#", label: "Instagram" },
// //   ];

// //   const footerLinks = {
// //     unterseiten: [
// //       { href: "#projekte", label: "Projekte" },
// //       { href: "#kunden", label: "Kunden" },
// //       { href: "#rechtliches", label: "Rechtliches" },
// //       { href: "#impressum", label: "Impressum" },
// //       { href: "#datenschutz", label: "Datenschutz" },
// //     ],
// //     leistungen: [
// //       { href: "#branding", label: "Branding" },
// //       { href: "#webdesign", label: "Webdesign" },
// //     ]
// //   };

// //   return (
// //     <>
// //       <header
// //         className={`fixed min-w-full top-0 z-40 transition-all duration-300 ${
// //           isScrolled ? "bg-white shadow-sm" : "bg-white"
// //         } backdrop-blur-sm`}
// //       >
// //         <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-3">
// //           <div className="flex items-center justify-between">
// //             {/* Logo */}
// //             <div className="flex-shrink-0">
// //               <a href="#home" className="flex items-center">
// //                 <div className="bg-black p-1 rounded">
// //                   <Image 
// //                     src="/favicon.png" 
// //                     alt="Company Logo" 
// //                     width={70} 
// //                     height={50}
// //                     className="h-10 w-auto sm:h-12"
// //                     priority
// //                   />
// //                 </div>
// //                 <span className="md:items-center ml-3 text-xl font-semibold text-black hidden sm:block">
// //                  NIDAVI
// //                 </span>
// //               </a>
// //             </div>

// //             {/* Desktop Navigation */}
// //             <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
// //               {navLinks.map((link) => (
// //                 <a
// //                   key={link.href}
// //                   href={link.href}
// //                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                     link.isButton
// //                       ? "bg-black text-white hover:bg-gray-800 px-4 py-2"
// //                       : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   {link.label}
// //                 </a>
// //               ))}
// //             </div>

// //             {/* Mobile menu button */}
// //             <div className="md:hidden flex items-center">
// //               <button
// //                 type="button"
// //                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-colors"
// //                 aria-expanded={isMenuOpen}
// //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               >
// //                 <span className="sr-only">
// //                   {isMenuOpen ? "Menü schließen" : "Menü öffnen"}
// //                 </span>
// //                 {isMenuOpen ? (
// //                   <X className="h-6 w-6" />
// //                 ) : (
// //                   <svg
// //                     className="h-6 w-6"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                     />
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </nav>
// //       </header>

// //       {/* Full-Screen Mobile Menu Overlay */}
// //       <div
// //         className={`h-fit fixed inset-0 z-50 bg-black text-white transition-all duration-500 ease-in-out   ${
// //           isMenuOpen 
// //             ? "opacity-100 visible" 
// //             : "opacity-0 invisible"
// //         } md:hidden`}
// //         ref={menuRef}
// //       >
// //         <div className="flex flex-col h-max">
// //           {/* Header Section */}
// //           <div className="flex items-center justify-between p-6 border-b border-gray-800">
// //             <div className="flex items-center">
// //               <div className="bg-white p-1 rounded">
// //                 <Image 
// //                   src="/favicon.png" 
// //                   alt="NIDAVI Logo" 
// //                   width={40} 
// //                   height={40}
// //                   className="h-8 w-auto"
// //                 />
// //               </div>
// //               <div className="ml-3">
// //                 <div className="text-xl font-bold">NIDAVI</div>
// //                 <div className="text-sm text-gray-400">Create. Impress. Stay.</div>
// //               </div>
// //             </div>
// //             <button
// //               onClick={() => setIsMenuOpen(false)}
// //               className="p-2 rounded-md hover:bg-gray-800 transition-colors"
// //               aria-label="Menü schließen"
// //             >
// //               <X className="h-6 w-6" />
// //             </button>
// //           </div>

// //           {/* Content Section */}
// //           <div className="flex-1 flex flex-col justify-between p-6">
// //             {/* Social Icons */}
// //             <div className="flex space-x-6 mb-12">
// //               {socialLinks.map((social) => {
// //                 const Icon = social.icon;
// //                 return (
// //                   <a
// //                     key={social.label}
// //                     href={social.href}
// //                     className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
// //                     aria-label={social.label}
// //                   >
// //                     <Icon className="h-6 w-6" />
// //                   </a>
// //                 );
// //               })}
// //             </div>

// //             {/* Main Navigation */}
// //             <div className="space-y-3 mb-12">
// //               {navLinks.map((link) => (
// //                 <a
// //                   key={link.href}
// //                   href={link.href}
// //                   onClick={() => setIsMenuOpen(false)}
// //                   className={`block text-3xl font-light transition-colors ${
// //                     link.isButton
// //                       ? "bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 inline-block text-2xl font-medium"
// //                       : "text-white hover:text-yellow-400"
// //                   }`}
// //                 >
// //                   {link.label}
// //                 </a>
// //               ))}
// //             </div>

// //             {/* Footer Links Section */}
// //             <div className="border-t border-gray-800 pt-8">
// //               <div className="grid grid-cols-2 gap-8">
// //                 {/* Unterseiten */}
// //                 <div>
// //                   <h3 className="text-lg font-medium mb-4 text-gray-300">Unterseiten</h3>
// //                   <div className="space-y-1">
// //                     {footerLinks.unterseiten.map((link) => (
// //                       <a
// //                         key={link.href}
// //                         href={link.href}
// //                         onClick={() => setIsMenuOpen(false)}
// //                         className="block text-sm text-gray-400 hover:text-white transition-colors"
// //                       >
// //                         {link.label}
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Leistungen & Contact */}
// //                 <div>
// //                   <h3 className="text-lg font-medium mb-4 text-gray-300">Leistungen</h3>
// //                   <div className="space-y-1 mb-6">
// //                     {footerLinks.leistungen.map((link) => (
// //                       <a
// //                         key={link.href}
// //                         href={link.href}
// //                         onClick={() => setIsMenuOpen(false)}
// //                         className="block text-sm text-gray-400 hover:text-white transition-colors"
// //                       >
// //                         {link.label}
// //                       </a>
// //                     ))}
// //                     <div className="text-sm text-gray-400 mt-4">
// //                       <div className="font-medium text-white">Anschrift</div>
// //                       <div>Straße in Miesbach</div>
// //                       <div>83714 Miesbach</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// 'use client'

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Image from 'next/image';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm  border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <div className="p-2">
//                 <Image alt='logo' src={'/NidaviSmallBlackLogo.png'} width={50} height={10}/>
//               </div>
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a href="#home" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
//                 Home
//               </a>
//               <a href="#about" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
//                 Über Uns
//               </a>
//               <a href="#services" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
//                 Leistungen
//               </a>
//               <a href="#customers" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
//                 Kunden
//               </a>
//               <a href="#projects" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
//                 Projekte
//               </a>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-500 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#home" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
//               Home
//             </a>
//             <a href="#about" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
//               Über Uns
//             </a>
//             <a href="#services" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
//               Leistungen
//             </a>
//             <a href="#customers" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
//               Kunden
//             </a>
//             <a href="#projects" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
//               Projekte
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
// Header.js
import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-16 py-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image alt='logo' src={'/NidaviSmallBlackLogo.png'} width={60} height={80} />
        </div>
        <div className="flex items-center space-x-12">
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-lg">Über Uns</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-lg">Leistungen</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-lg">Projekte</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-lg">Kunden</a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-lg">Blog</a>
        </div>
        <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors text-lg">
          Kontakt
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center">
          <Image alt='logo' src={'/NidaviSmallBlackLogo.png'} width={100} height={100} />
        </div>
        <button onClick={toggleMobileMenu} className="text-black p-2">
          {isMobileMenuOpen ? <X size={28} /> : (
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;