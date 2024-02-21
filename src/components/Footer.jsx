import {FaInstagram, FaWhatsapp , FaFacebook,FaYoutube,FaTwitter,FaLinkedin  } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import { useState, useEffect } from 'react';
function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
    const toTop =()=>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      
    };
    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []); 
    return (
      <><footer>
        <div className="md:flex flex-wrap p-5 sm:p-20 md:justify-around text-white bg-[#39393F] " >
          <div className=" p-2 ">
            <ul className="p-2 ">
              <li><b className="text-[#989898] uppercase">CONTACT US </b></li>
              
              <li>
                <p className="font-medium  w-60"> Plot 55 ABCD & 56 D,
                   Kandivali Industrial Estate,
                   Charkop, Kandivali(W), Mumbai – 400 067.</p>
               
              </li>
             
              <li> info@naturalicecreams.in</li>
              <li> 022 62691984</li>
            </ul>
          </div>
          <div>
            <div className=" sm:mb-4 p-2">
            <ul>
              <li><b className="text-[#989898] uppercase">ABOUT NATURALS </b></li>
              
              <li>Ingredient Story</li>
              <li>Our Legacy</li>
              <li>Franchise Queries</li>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <li><b className="text-[#989898] uppercase">FRANCHISE QUERIES </b></li>
              
              <li>Become a Business Partner</li>
              <li>Franchise FAQ</li>
            </ul>
          </div>
          </div>
          
            <div className="p-2 ">
            <ul>
              <li> <b className="text-[#989898] uppercase">OTHERS</b></li>
             
              <li>Store locator</li>
              <li>CSR</li>
              <li>Nutritional Info</li>
              <li>Careers</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="p-2 ">
            <ul>
                <li> <b className="text-[#989898] uppercase">Shop</b></li>
                
            <li>Round The Year</li>
            <li>Festive Special</li>
            <li>Seasonal</li>
            <li>Friday Funday</li>
            <li>No Added Sugar</li>
            <li>Berry Festival</li>
            </ul>
            
         
          </div>
          
        </div>
        <div className="flex justify-center gap-5 pb-10 bg-[#39393F] ">
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "> <FaInstagram  className="fill-white group-hover:fill-black" size={20}/> </div>
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "><FaFacebook    className="fill-white group-hover:fill-black" size={20}/></div>
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "><FaTwitter     className="fill-white group-hover:fill-black" size={20}/> </div>
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "><FaWhatsapp    className="fill-white group-hover:fill-black" size={20}/> </div>
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "><FaYoutube     className="fill-white group-hover:fill-black" size={20}/></div>
            <div className="bg-[#242429] rounded-full w-10 h-10 group flex justify-center items-center hover:bg-white "><FaLinkedin    className="fill-white group-hover:fill-black" size={20}/></div>
        </div>
      </footer>
      {showTopBtn &&
      <div className="flex fixed right-2 bottom-2  justify-center items-center w-8 h-8 rounded-full bg-slate-800">
          <button className=" p-1 pb-2" onClick={toTop}><IoIosArrowUp className="fill-white" size={25} /></button>
      </div>}
      </>
    );
  }
  export default Footer;