import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import logo from "./images/logo.png";
import userRegular from "./images/user-regular.svg";
import holdingEarbud from "./images/holding-earbud.jpg";
import whiteEarbud from "./images/blog-67.jpg";
import girlOnCycle from "./images/blog-7.jpg";
import girlSmiling from "./images/blog-5.jpg";
import footerBg from "./images/footer-bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    var mybutton: any = document.getElementById("myBtn");

    // When the user scrolls down 19px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 19 ||
        document.documentElement.scrollTop > 19
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
  });
  const handleClick = () => {
    window.scroll({
      top: -1,
      behavior: "smooth", // 👈
    });
  };

  return (
    <>
      <div className="flex absolute top-3 left-6 cust">
        <img src={logo} alt="" className="" />
      </div>
      <div className="absolute top-3 left-1/3 flex space-x-0 cust">
        <div className="font-bold text-lg p-6 underline">Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
      <div className="flex space-x-3 top-2 absolute right-2 cust">
        <img src={userRegular} className="w-6" alt="" />
        <img src={userRegular} className="w-6" alt="" />
      </div>
      {/* <!-- carousel -->
    <!-- Flickity HTML init --> */}
      <div
        className="gallery js-flickity"
        data-flickity-options='{ "pageDots": false, "wrapAround": true }'
      >
        <div className="w-full mt-17 pl-10 flex">
          <div className="flex flex-wrap max-w-xs p-6">
            <div>Beautiful Design and awesome everthing</div>
            <button className="bg-black text-white rounded-full py-4 px-3">
              shop now
            </button>
          </div>
        </div>
        <div className="w-full mt-17 pl-10 flex">
          <div className="flex flex-wrap max-w-xs p-6">
            <div>Beautiful Design and awesome everthing</div>
            <button className="bg-black text-white rounded-full py-4 px-3">
              shop now
            </button>
          </div>
        </div>
        <div className="w-full mt-17 pl-10 flex">
          <div className="flex flex-wrap max-w-xs p-6">
            <div>Beautiful Design and awesome everthing</div>
            <button className="bg-black text-white rounded-full py-4 px-3">
              shop now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-301 flex">
        lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        architecto dicta ipsam harum reiciendis, ipsa vero omnis veniam at
        us culpa eaque itaque quasi
        odit tempora. Natus expedita ullam perspiciatis totam!
      </div>
      <Carousel showThumbs={false} infiniteLoop={true}>
        {/* <div style={{ height: "200px", color: "#fff" }}>this is slide 1</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 2</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 3</div> */}
        <div >mdkfj</div>
        <div >mdkfj</div>
      </Carousel>
      <div className="flex holding-image relative">
        <img src={holdingEarbud} />
        <div className="absolute w-full text-center text-white inset-y-2/3">
          <span className="dot"> </span>
          <div className="text-lg text-primary font-semibold m-5">
            The Right Headphones
          </div>
          <div>
            In ornare quam viverra orci sagittis. Duis ultricies lacus sed
            turpis tincidunt id aliquet risus. Arcu felis bibendum ut tristique
            et.
          </div>
        </div>
      </div>
      {/* <!-- read more --> */}
      <div className="flex justify-center items-center mt-11 flex-col">
        <div className=" text-3xl "> Good Treble Performance </div>
        <div className="text-6xl text-semibold mt-5">Rythmic Music Blog</div>
      </div>

      <div className="flex m-11">
        <div className="w-2/3">
          <div className="mx-6">
            <img className="rounded-4xl" src={whiteEarbud} alt="" />
            <div className="font-bold my-6">White Wireless Earbud</div>
            <div className="font-semibold">
              <i className="far fa-user-circle"></i> By Ramamoorthi M |
              <i className="far fa-calendar-alt"></i> August 3, 2020
            </div>
            <div className="my-6">
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum
              elementum.
            </div>
            <a href="">
              <button className="signup-bg text-primary rounded-full px-11 py-3">
                Read more
              </button>
            </a>
          </div>
        </div>

        <div className="w-2/3">
          <div className="mx-6">
            <img className="rounded-4xl" src={girlOnCycle} alt="" />
            <div className="font-bold my-6">White Wireless Earbud</div>
            <div className="font-semibold">
              <i className="far fa-user-circle"></i> By Ramamoorthi M |
              <i className="far fa-calendar-alt"></i> August 3, 2020
            </div>
            <div className="my-6">
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum
              elementum.
            </div>
            <a href="">
              <button className="signup-bg text-primary rounded-full px-11 py-3">
                Read more
              </button>
            </a>
          </div>
        </div>
        <div className="w-2/3">
          <div className="mx-6">
            <img className="rounded-4xl" src={girlSmiling} alt="" />
            <div className="font-bold my-6">White Wireless Earbud</div>
            <div className="font-semibold">
              <i className="far fa-user-circle"></i> By Ramamoorthi M |
              <i className="far fa-calendar-alt"></i> August 3, 2020
            </div>
            <div className="my-6">
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum
              elementum.
            </div>
            <a href="">
              <button className="signup-bg text-primary rounded-full px-11 py-3">
                Read more
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- footer --> */}
      <div className="footer  justify-center flex-col">
        <div className="flex  justify-center py-6">
          <img src="" alt="" className="p-6" />
        </div>
        <div className="">
          <div className=" flex justify-center text-white font-bold py-6">
            Subscribe Our Newsletter
          </div>
          <div className="flex justify-center p-6">
            <form action="" className="w-2/3 mycustom my-5">
              <input
                className="w-73 rounded-full py-4 px-3"
                type="text"
                placeholder="Your email address"
              />
              <button className="signup-bg rounded-full px-6 py-3 text-primary">
                Sign Up
              </button>
            </form>
          </div>
          <div className="my-4 flex justify-center space-x-4">
            <a href="">
              <i className="fab fa-twitter icon-white"></i>{" "}
            </a>
            <a href="">
              <i className="fab fa-facebook-f icon-white"></i>{" "}
            </a>
            <a href="">
              <i className="fab fa-pinterest icon-white"></i>{" "}
            </a>
            <a href="">
              <i className="fab fa-instagram icon-white"></i>{" "}
            </a>
          </div>
          <div
            className="
          mb-13
          text-white
          flex flex-wrap
          justify-center
          font-bold
          space-x-5
        "
          >
            <a>History</a>

            <a>|</a>
            <a>Privacy Policy</a>
            <a>|</a>
            <a>News</a>
            <a>|</a>
            <a>Terms {`&`} Condition</a>
            <a>|</a>
            <a>Contact</a>
          </div>
          <span className="spnHr"></span>
          <div className="py-4 flex justify-center text-white">
            © 2020 Boom Theme Design Themes
          </div>
        </div>
      </div>

      <button
        id="myBtn"
        className="
        fixed
        signup-bg
        rounded-full
        px-6
        py-3
        bottom-5
        right-5
        text-primary
        font-bold
        text-lg
      "
        onClick={handleClick}
      >
        ↑
      </button>
      {/* {/* <script src="https://unpkg.com/flickity@1/dist/flickity.pkgd.min.js"></script> */}
    </>
  );
}

export default App;
