import logo from "../assets/natural-logo-test.png";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import RoundTheYear from "../assets/list-img/Year-Round.png";
import FestiveSpecial from "../assets/list-img/Festive-1.png";
import Seasonal from "../assets/list-img/Seasonal-2.png";
import FridayFunday from "../assets/list-img/FFF-1.png";
import NoAddedSugar from "../assets/list-img/Supernaturals-1.png";
import BerryFestival from "../assets/list-img/Berry-1.png";
import NaturalsLogo from "../assets/natural-logo-test.png";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const Burger = () => {
    setIsOpen(!isOpen);
  };
  const [MobileMenu, setMobileMenu] = useState(false);
  const MobileBurger = () => {
    setMobileMenu(!MobileMenu);
  };
  const [ProductMenu, setProductMenu] = useState(false);
  const ProductBurger = () => {
    setProductMenu(!ProductMenu);


  };
  return (
    <>
      <header>
        <nav className="  flex flex-wrap flex-row md:mx-24 mx-5 h-28 items-center justify-between ">
          <div className="md:flex ">
            <div className="mr-[20px] items-center">
              <img className="h-14" src={logo} alt="Naturals Icecream" />
            </div>
            <div className="md:flex items-center hidden">
              <button className=" p-1.5 px-4 bg-[#00AC4E] text-white rounded-lg">
                Order Now
              </button>
            </div>
          </div>
          <div>
            <div className="lg:flex lg:flex-row bg-[#E6E7E9] hidden ">
              <form>
                <input
                  className="bg-[#E6E7E9] h-full w-[400px] placeholder: pl-4 "
                  type="text"
                  placeholder="I'm looking for..."
                />
              </form>

              <div className="w-12 m-1 bg-[#00AC4E] rounded-sm">
                <button
                  className=" sm:flex sm:items-center p-2 pl-2 hidden relative  bg-transparent "
                  type="button"
                  id="button-addon3"
                >
                  <IoSearch color="white" size={28} />
                </button>
              </div>
            </div>
            <button onClick={MobileBurger} className="flex lg:hidden ">
              <IoMenu color="#00AC4E" size={28} />
            </button>
          </div>
        </nav>
        <nav>
          {MobileMenu &&(<div className="flex justify-between fixed top-0 left-0 h-full w-full z-[998] backdrop-brightness-50">
            
             <div className="flex">
              <ul className="flex flex-col p-5 h-full w-60 gap-5 pt-3 bg-white">
              <div> 
                
                  <img  src={NaturalsLogo} alt="Naturals Logo" />
              </div>
              <li>Ingredient Story</li>
              <li
                onClick={ProductBurger}
                className="product flex h-auto relative  gap-2 "
              >
                Products
                <div className="flex items-center">
                  
                  <IoIosArrowDown />
                </div>
            
              </li>
                  {(ProductMenu&&<ul className="flex flex-col gap-5 m-5 text-left  text-black ">
                    <li>
                      <div>Round The Year</div>
                    </li>
                    <li>
                      <div>Festive Special</div>
                    </li>
                    <li>
                      <div>Seasonal</div>
                    </li>
                    <li>
                      <div>Friday Funday</div>
                    </li>
                    <li>
                      <div>No Added Sugar</div>
                    </li>
                    <li>
                      <div>Berry Festival</div>
                    </li>
                  </ul>)}
              <li>Our Legacy</li>
              <li>Malai Magic</li>
              <li>Franchise Queries</li>
              <li>Store Locator</li>
              <li>Blogs</li>
            </ul>
             </div>
             <div className=" p-5 ">
              <button onClick={MobileBurger}  ><IoCloseOutline  color="white" size={42} /></button>
               
             </div>
          </div>)}
          <div className="bg-[#39393F] text-white lg:block hidden h-12 w-full">
            <ul className="flex flex-row justify-center gap-5 pt-3">
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Ingredient Story
              </li>
              <li
                onClick={Burger}
                className="flex overflow-hidden  gap-2 hover:cursor-pointer group hover:text-[#00AC4E]"
              >
                Products
                <div className="flex items-center">
                  <IoIosArrowDown
                    className="group-hover:fill-[#00AC4E]"
                    color="white"
                  />
                </div>
                {isOpen && (
                  <div className="absolute top-[10rem] duration-700 left-[22rem] bg-white z-[999] ">
                    <ul className="duration-700 grid grid-cols-3 delay-700 p-8 gap-5 text-black text-center">
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={RoundTheYear}
                            alt="Round The Year"
                          />
                        </a>
                        <div>Round The Year</div>
                      </li>
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={FestiveSpecial}
                            alt="Festive Special"
                          />
                        </a>
                        <div>Festive Special</div>
                      </li>
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={Seasonal}
                            alt="Seasonal"
                          />
                        </a>
                        <div>Seasonal</div>
                      </li>
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={FridayFunday}
                            alt="Friday Funday"
                          />
                        </a>
                        <div>Friday Funday</div>
                      </li>
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={NoAddedSugar}
                            alt="No Added Sugar"
                          />
                        </a>
                        <div>No Added Sugar</div>
                      </li>
                      <li>
                        <a className="flex justify-center" href="#">
                          <img
                            className="hover:cursor-pointer duration-700 hover:scale-125"
                            src={BerryFestival}
                            alt="Berry Festival"
                          />
                        </a>
                        <div>Berry Festival</div>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Our Legacy
              </li>
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Malai Magic
              </li>
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Franchise Queries
              </li>
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Store Locator
              </li>
              <li className="hover:cursor-pointer hover:text-[#00AC4E]">
                Blogs
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
