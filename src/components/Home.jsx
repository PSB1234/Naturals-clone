import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Banner1 from "../assets/banners/Banner-01.jpg";
import Banner2 from "../assets/banners/Banner-02.jpg";
import Banner3 from "../assets/banners/Banner-03.jpg";
import Mobilebanner1 from "../assets/mobile-banner/Mobile-banner-01-new.jpeg";
import Mobilebanner2 from "../assets/mobile-banner/Mobile-banner-02.jpeg";
import Mobilebanner3 from "../assets/mobile-banner/Mobile-banner-03-new.jpeg";
import TenderCoconut from "../assets/Tender-coconut-1600-X-674-new.jpg";
import ChocolateIcecream from "../assets/Choco-almond-1600-X-674-new.jpeg";
import KesarPista from "../assets/Kesar-Pista-1600-X-674-new.jpg";
import StrawberryIcecream from "../assets/Strawberry-1600-X-674-new.jpeg";
import MangoIcecream from "../assets/bestSellers/500GM_Ice-Cream-Container_Mango_Lid-1-300x300.jpg";
import SitaphelIcecream from "../assets/bestSellers/500GM_Ice-Cream-Container_Sitaphal_Lid-300x300.jpg"
import StrawberryIcecream1 from "../assets/bestSellers/500GM_Ice-Cream-Container_Strawberry_Lid-300x300.jpg";
import BlackGrapesIcecream from "../assets/bestSellers/Tubshot-Black-Grapes-300x300.jpg";
import PapayaPineappleIcecream from "../assets/bestSellers/500GM_Ice-Cream-Container_Papaya-Pineapple_Lid-300x300.jpg";
import MuskmelonIcecream from "../assets/bestSellers/500GM_Ice-Cream-Container_Muskmelon_Lid-300x300.jpg";
import WatermelonIcecream from "../assets/bestSellers/500g_Tub-Label_Watermelon_Lid-300x300.jpg";
import ChickooIcecream from "../assets/bestSellers/500g_Tub-Label_Chickoo_Lid-300x300 - Copy.jpg";
import Banner4 from "../assets/banner-2/Damn.jpg";
import Sundae from "../assets/banner-2/JS-new.jpeg";
import NaturalNow from "../assets/banner-2/NOW-new.jpeg";
import BondaFactory from "../assets/banner-2/BF.jpeg";
import fruits from "../assets/Icons/fruit_icon-1.png";
import milk from "../assets/Icons/milk_icon-1.png";
import Sugar from "../assets/Icons/sugar_icon-1.png";
import MilkFlow from "../assets/banner-2/milk-flow.png";
import FranchiseQueries from "../assets/banner-2/franchise-queries-new.jpeg";
import TuttiFruity from"../assets/insta-imgs/403865712_745123144115739_7285755030545671946_n.jpeg";
import RoseWalnut from "../assets/insta-imgs/361604407_672308344923557_325625159241283577_n.jpeg";
import Nuts from "../assets/insta-imgs/404267122_3760165314269147_1568076763091379753_n.jpeg";
import KajuKesar from "../assets/insta-imgs/400103718_741690041318720_7647994338791296283_n.jpeg";
import RoseWalnut2 from "../assets/insta-imgs/378982332_706200351534356_5959758064681588481_n.jpeg";
import Altbanner1 from "../assets/insta-imgs/403865712_745123144115739_7285755030545671946_n.jpeg" ;
import Altbanner2 from "../assets/insta-imgs/361604407_672308344923557_325625159241283577_n.jpeg";
import Altbanner3 from "../assets/insta-imgs/404267122_3760165314269147_1568076763091379753_n.jpeg";
import Altbanner4 from "../assets/insta-imgs/400103718_741690041318720_7647994338791296283_n.jpeg";
import Altbanner5 from "../assets/insta-imgs/378982332_706200351534356_5959758064681588481_n.jpeg";
import ConeLogo from "../assets/Icons/logo_element.png";
import Thrive from "../assets/Icons/logo_thrive-1.png";
import Zamato from "../assets/Icons/logo_zomato-1.png";
import Swiggy from "../assets/Icons/logo_swiggy-1.png";
function Home() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <div className="bg-[#E6E7E9]">
        <div className="md:block hidden">
          <Splide
            data-splide='{"type":"loop","perPage":1}'
            aria-label="Icecream-Slides"
          >
            <SplideSlide>
              <img src={Banner1} alt="banner1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Banner2} alt="banner2" />
            </SplideSlide>
            <SplideSlide>
              <img src={Banner3} alt="banner3" />
            </SplideSlide>
          </Splide>
        </div>
        <div>
          <div className="md:hidden block">
            <Splide
              data-splide='{"type":"loop","perPage":1}'
              aria-label="Icecream-Slides"
            >
              <SplideSlide>
                <img
                  src={Mobilebanner1}
                  alt="mobile-banner-1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Mobilebanner2}
                  alt="mobile-banner-2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Mobilebanner3}
                  alt="mobile-banner-3"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-5 m-5 flex flex-col gap-5">
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={TenderCoconut}
              alt="Tender Coconut"
            />
          </div>
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={ChocolateIcecream}
              alt="Chocolate icecream"
            />
          </div>
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={KesarPista}
              alt="Kesar Pista"
            />
          </div>
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={StrawberryIcecream}
              alt="Strawberry icecream"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center font-Comfortaa pt-20 text-3xl">
            BEST SELLERS
          </div>
          <div className="md:grid md:grid-row-2 md:grid-cols-4 md:gap-8 md:m-24 m-2 gap-2 text-center grid grid-cols-2">
            <div>
              <div>
                <img
                  className="w-full"
                  src={MangoIcecream}
                  alt="Mango Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Mango Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={SitaphelIcecream}
                  alt="Sitaphel Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Sitaphel Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={StrawberryIcecream1}
                  alt="Strawberry Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Strawberry Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={BlackGrapesIcecream}
                  alt="Black Grapes Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Black Grapes Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={PapayaPineappleIcecream}
                  alt="Papaya Pineapple Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Papaya Pineapple Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={MuskmelonIcecream}
                  alt="Muskmelon Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Muskmelon Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={WatermelonIcecream}
                  alt="Watermelon Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Watermelon Icecream
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-full"
                  src={ChickooIcecream}
                  alt="Chickoo Icecream"
                />
              </div>
              <div className="flex items-center justify-center h-20 font-extrabold bg-white">
                Chickoo Icecream
              </div>
            </div>
          </div>
        </div>
        <div className="md:m-28 md:mb-40 hidden md:block">
          <img src={Banner4} alt="Banner" />
        </div>
        <div className="flex md:hidden flex-col m-10 gap-5">
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={Sundae}
              alt="Sundae"
            />
          </div>
          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={NaturalNow}
              alt="Natural Now"
            />
          </div>

          <div className="rounded relative overflow-hidden">
            <img
              className="hover:cursor-pointer duration-700 hover:scale-125"
              src={BondaFactory}
              alt="Bonda Factory"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-center uppercase text-4xl mb-10">
              <strong>Ingredient Story</strong>
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 md:justify-items-center md:gap-10 mx-12 flex  flex-col ">
            <div>
              <div className="m-10 mt-22 flex justify-center rounded relative overflow-hidden">
                <img
                  className="hover:cursor-pointer duration-700 hover:scale-75"
                  src={fruits}
                  alt="fruits"
                />
              </div>
              <strong className="flex  justify-center uppercase m-10  text-4xl">
                1. Fruits
              </strong>
              <p className="text-center mx-7">
                Fruit is in the DNA of Naturals ice cream. It’s what makes our
                ice creams unique and original. We go to great lengths to source
                fresh fruits only from their most popular locations. Fruits that
                are freshly plucked from farms which eventually end up into
                freshly served scoops of delicious Naturals ice cream.
              </p>
            </div>
            <div>
              <div className=" m-10 mt-22 flex justify-center rounded relative overflow-hidden">
                <img
                  className="hover:cursor-pointer duration-700 hover:scale-75"
                  src={milk}
                  alt="milk"
                />
              </div>
              <strong className="flex justify-center uppercase m-10  text-4xl">
                2. Milk
              </strong>
              <p className="text-center mx-7">
                Milk is a key ingredient in ice cream. And the milk that goes
                into Naturals ice cream comes from the same vendor that we
                started doing business with, around three decades ago. This
                makes our ice creams rich, creamy and most importantly,
                consistent
              </p>
            </div>
            <div>
              <div className=" m-10 mt-22 flex justify-center rounded relative overflow-hidden">
                <img
                  className="hover:cursor-pointer duration-700 hover:scale-75"
                  src={Sugar}
                  alt="sugar"
                />
              </div>
              <strong className="flex justify-center uppercase mt-10  text-4xl">
                3. Sugar
              </strong>
              <p className="text-center mx-7">
                We use pharma sugar, which is so fine and pure that it’s
                certified to be used even in medicines. Because we make sure
                only the best makes its way into our scoops
              </p>
            </div>
          </div>
          <div className="block">
            <img src={MilkFlow} alt="milk-flow" />
          </div>
        </div>
        <div className="md:flex md:justify-center md:m-12 rounded relative md:overflow-hidden mt-20">
          <img
            className="md:hover:cursor-pointer md:duration-700 md:hover:scale-105"
            src={FranchiseQueries}
            alt="franchise Queries"
          />
        </div>
        <div className="mt-40">
          <div className="flex justify-center font-bold text-4xl">
            FOLLOW
            <div className="md:flex hidden text-[#00AC4D] mx-2">
              @naturalicecream
            </div>
            <div className="md:flex hidden">ON INSTAGRAM</div>
            <div className="md:hidden flex pl-3">US</div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-5 md:m-2 md:mt-12 md:gap-2 hidden ">
          <img
            className="rounded "
            src={TuttiFruity}
            alt="TuttiFruity"
          />
          <img
            className="rounded"
            src={RoseWalnut}
            alt="RoseWalnut"
          />
          <img
            className="rounded"
            src={Nuts}
            alt="Nuts"
          />
          <img
            className="rounded"
            src={KajuKesar}
            alt="KajuKesar"
          />

          <img
            className="rounded"
            src={RoseWalnut2}
            alt="RoseWalnut2"
          />
        </div>
        <div className="md:hidden block m-5">
          <Splide data-splide='{"type":"loop","perPage":1}'>
            <SplideSlide>
              <img src={Altbanner1}/>
            </SplideSlide>
            <SplideSlide>
              <img src={Altbanner2} />
            </SplideSlide>
            <SplideSlide>
              <img src={Altbanner3} />
            </SplideSlide>
            <SplideSlide>
              <img src={Altbanner4} />
            </SplideSlide>
            <SplideSlide>
              <img src={Altbanner5}/>
            </SplideSlide>
          </Splide>
        </div>
        <div>
          <div className="bg-white rounded-xl  m-10 md:mx-32 md:p-16 p-5 text-center shadow-lg shadow-[#7F8081]">
            <div className="pb-10 px-1">
              <strong className="text-2xl">
                From Humble Beginnings to Ice Cream Excellence: The Story of
                Naturals Ice Cream
              </strong>
            </div>
            <div>
              <p className="text-left pb-4 text-sm">
                In the sizzling streets of 1984 Mumbai, amid the tantalizing
                scent of Pav Bhaji and scorching sun, a young visionary named
                Mr. Raghunandan Srinivas Kamath embarked on a daring journey.
                Little did he know that his simple idea would transform into an
                exhilarating Indian sensation – Naturals Ice Cream, making him
                the pioneer of handcrafted icecream from quintessential
                fruit-based flavors such as Sitaphal, Tender Coconut, Jackfruit,
                Muskmelon and Kala Jamun, amongst many more.
              </p>
            </div>
            {isShowMore && (
              <div>
                <p className="text-left pb-4 text-sm ">
                  Hailing from a modest background, Mr. Raghunandan Kamath
                  learned the art of selecting the finest fruits from his
                  father. At 14, he left his academic path to join his brother’s
                  eatery, ‘Gokul Refreshments,’ where he dreamt of creating
                  handcrafted icecream filled with real fruit pulp.
                  <br />
                  <br />
                  When the brothers parted ways, Mr. Raghunandan seized an
                  opportunity with a modest sum of Rs 3, 50,000. With unwavering
                  determination and just six staff members, he embarked on a
                  journey that would redefine the ice cream industry with the
                  onset of Naturals Ice Cream where one can taste the original
                  icecream. The first icecream parlor was set in the suburbs of
                  Juhu scheme, Mumbai where they launched with only 12 flavors
                  to begin with, and over the period added many more flavors!{" "}
                  <br />
                  <br />
                  Mr. Raghunandan focused on the core elements of fruit, sugar,
                  and milk as ingredients, crafting unique flavors that danced
                  on the taste buds of his patrons for the last 39 years. The
                  brand’s slogan, “Taste the Original,” embodied its dedication
                  to authenticity yet with quality.
                  <br />
                  <br />
                  Over the years, Naturals Ice Cream expanded its menu to offer
                  an array of unconventional flavors, from cucumber to prasadam,
                  gajar halwa to tilgul, and a delightful assortment of fruit
                  flavors. While not every flavor became a best-seller, they all
                  contributed to the brand’s reputation as a fruit enthusiast.
                  <br />
                  <br />
                  Each batch of ice cream was a labour of love, crafted with
                  precision and care. Inspired by his mother’s techniques, Mr.
                  Raghunandan Srinivas Kamath even developed innovative machines
                  to streamline production and ensure unwavering consistency.
                  <br />
                  <br />
                  As Naturals Ice Cream expanded, Mr. Raghunandan remained
                  rooted in the essence of his brand – fruit, sugar, and milk.
                  He sourced milk from a trusted dairy in Nashik and fruits from
                  reliable suppliers across India, ensuring the ingredients
                  remained true to their origins to give its patrons the best
                  ice cream.
                  <br />
                  <br />
                  For Naturals, marketing wasn’t about gimmicks but about
                  forging connections with customers. Mr. Raghunandan and his
                  team treasured customer feedback, even renaming a flavor based
                  on a single customer’s suggestion. They transformed their ice
                  cream parlours into vibrant storytelling spaces, sharing the
                  brand’s history and daily operations through captivating
                  themes. With a vision to evolve and experiment at every level,
                  its ‘Friday Funday Flavour’ property reflects the brand’s
                  adherence to providing span-new and unique flavors each week,
                  even today. For more information, visit Naturals’ social media
                  pages at
                  <br />
                  <br />
                  Facebook:
                  <strong>https://www.facebook.com/Naturalicecream/</strong>
                  <br />
                  <br />
                  Instagram:
                  <strong>
                    https://www.instagram.com/naturalicecream/?hl=en
                  </strong>
                  <br />
                  <br />
                  Twitter:
                  <strong className="break-words">
                    https://twitter.com/Naturalicecream?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
                  </strong>
                  <br />
                  <br />
                  Today, Naturals Ice Cream boasts of Rs. 300+ crore turnover,
                  165+ outlets across various cities in 15 different states in
                  India, offering over 20 flavors at any given time and being
                  one of the best in customer service. Not only this, their
                  famous Tender Coconut flavor is listed in the TOP 100 most
                  iconic icecreams in the world by Taste Atlas. Naturals
                  Icecream was also included in India’s top 10 most trusted
                  brands in a survey conducted by KPMG in 2018.
                  <br />
                  <br /> Mr. Raghunandan Kamath’s story is a beacon of hope, a
                  reminder that greatness can be built one small idea at a time
                  and that the most remarkable journeys often begin with a
                  humble scoop of ice cream.
                  <br />
                  <br /> So to order your favorite ice cream, click on ‘Naturals
                  ice cream near me’ on our website to find the nearest outlet
                  and order for yourself one! <br />
                  <br />
                  <strong>
                    Discover the Symphony of Flavors at Naturals Ice Cream
                  </strong>
                  <br /> Welcome to Naturals Ice Cream, where indulgence knows
                  no bounds! Join us on a delectable journey through the
                  captivating world of Naturals Ice Cream, where flavors reign
                  supreme.
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10">
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Savour Nature’s Best</strong>
                      </div>
                    </div>
                    <div className="p-5 text-sm">
                      <p>
                        Craving the finest ice cream near you? Naturals Ice
                        Cream outlets span the country, ensuring you’re never
                        far from a taste of pure bliss. Type ‘Naturals ice cream
                        near me’ into your preferred search engine, and let the
                        adventure begin. We’re on a mission to bring ice cream
                        joy right to your neighborhood.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Tender Coconut Bliss</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        Imagine lounging on a sun-kissed beach, swaying palm
                        trees, and a gentle sea breeze. Now, add to this idyllic
                        scene a scoop of Naturals Tender Coconut Ice Cream. This
                        tropical delight whisks you away to a beachside paradise
                        with every bite.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>A Nostalgic Treat</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        For a taste of nostalgia, indulge in Naturals Sitaphal
                        Ice Cream. Crafted from ripe, luscious custard apples,
                        it’s a sweet journey down memory lane, evoking memories
                        of homegrown goodness.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>A Fusion of Flavors</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        At Naturals, we’re all about crafting unique taste
                        sensations. Our Anjeer Ice Cream melds the richness of
                        figs with creamy indulgence. It’s a dessert match made
                        in heaven, perfect for those who savor life’s finer
                        pleasures.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Timeless Elegance</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        Nothing surpasses the timeless elegance of Malai Ice
                        Cream. It’s a celebration of simplicity, where the pure
                        essence of cream shines through. Each spoonful is a
                        reminder that true pleasures often come from the purest
                        ingredients.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Mango Magic</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        Mango lovers, rejoice! Our Mango ice cream bursts with
                        tropical flavor, capturing the essence of a sun-soaked
                        summer day. Made from the juiciest Alphonso mangoes,
                        it’s a seasonal delight worth waiting for.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Cooling Refreshment</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        When the sun beats down relentlessly, seek solace in our
                        Watermelon Ice Cream. It’s like a refreshing breeze on a
                        scorching summer day, with crisp, juicy watermelon in
                        every scoop
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Unforgettable Guava</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        Our Guava Ice Cream blends the sweet and slightly tangy
                        flavor of ripe guavas. One taste and you’ll be
                        transported back to cherished childhood memories.
                        Crafted from Allahabadi pink guavas, it’s a flavor you
                        won’t forget.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Berrylicious Delight</strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        Indulge in the natural sweetness of strawberries with
                        our Strawberry Ice Cream. It’s a berrylicious treat that
                        captures the essence of summer, one delightful spoonful
                        at a time.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Blueberry Symphony </strong>
                      </div>
                    </div>{" "}
                    <div className="p-5 text-sm">
                      <p>
                        For those who crave a symphony of flavors, our Blueberry
                        ice cream is a must-try. It’s a burst of juicy
                        blueberries in every bite, a delightful medley of tart
                        and sweet that will leave you craving for more.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Crafted with Passion</strong>
                      </div>
                    </div>
                    <div className="p-5 text-sm">
                      <p>
                        What sets our ice cream apart? Our unwavering commitment
                        to using only the finest ingredients and crafting each
                        flavor with precision and passion.
                      </p>
                    </div>
                  </div>
                  <div className="shadow-md rounded text-left shadow-[#7F8081]">
                    <div className="rounded p-5 bg-[#00AC4E]">
                      <div>
                        <strong>Secret of Malai Ice Cream</strong>
                      </div>
                    </div>
                    <div className="p-5 text-sm">
                      <p>
                        Ever wondered about the secret behind our signature
                        Malai Ice Cream recipe? They are nothing but the
                        generous dose of love and a dash of magic that we load
                        our ice cream with! Crafting the perfect Malai Ice Cream
                        is an art, one that we’ve perfected over the years. Come
                        and taste the magic!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-left pb-10">
                  <strong>The Naturals’ Ice Cream Experience</strong>
                  <p>
                    At Naturals, we don’t just sell ice cream; we create
                    experiences. We believe that each scoop should be a moment
                    of pure joy, a culinary adventure of handpicked ice cream
                    ingredients that tantalizes your senses. Choose any ice
                    cream of your choice from the wide range of flavors at our
                    outlets to get a real feel of a quality rich ice cream to
                    suit your mood! <br />
                    <br />
                    So, what are you waiting for? Dive into our world of ice
                    cream excellence and embark on a journey of flavors like no
                    other. Whether you’re a fan of classics like Malai and Mango
                    or craving something more exotic like Anjeer and Blueberry,
                    Naturals Ice Cream has something for everyone. <br />
                    <br />
                    Join us in celebrating the art of ice cream making and
                    indulging in the pure pleasure of the best ice cream from
                    Naturals. Visit your nearest outlet or order online to
                    experience a taste that’s truly out of this world. Naturals’
                    Ice cream is not just a chilled dessert, but an emotion, a
                    gift of our passion and a feeling of bliss to add to your
                    sweet moments. <br />
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={toggleReadMoreLess}
              className="bg-[#13A538] text-white p-1 px-2 rounded"
            >
              {isShowMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="bg-[#13A538] relative pb-10 text-white   ">
          <div className="flex sm:p-10 p-5 justify-center  underline font-Comfortaa font-bold sm:text-4xl text-2xl">
            Order Now
          </div>
          <div className="flex   justify-center sm:h-40">
            <div className="flex absolute left-0 bottom-0  object-contain justify-start sm:w-60 sm:h-60 h-full">
              <img src={ConeLogo} alt="Cone logo" />
            </div>
            <div className="flex justify-center z-2 sm:gap-24">
              <div>
                <img
                  className="  hover: cursor-pointer "
                  src={Thrive}
                  alt="Thrive"
                />
              </div>
              <div>
                <img
                  className="  hover: cursor-pointer "
                  src={Swiggy}
                  alt="Swiggy"
                />
              </div>
              <div>
                <img
                  className="  hover: cursor-pointer "
                  src={Zamato}
                  alt="zomato"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
