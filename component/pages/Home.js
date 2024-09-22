import React from "react";
import Accordian from "./Accordian";
import { FaRegCopy, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="">
      <div className="bgg">
        <Navbar />

        <div className="containerkws">
          <div className="">
            <div className="tac mb5">
              <p className="cw">EL SANCHO</p>
              {/* <img src="/logo2.webp" className="animation w20  db ma" alt="" /> */}
              <img
                src="/sancho-logo.jpg"
                className="animation w25  db ma"
                alt=""
              />
            </div>
            <div className="df aic ttu jcc g1 flex-wrap mb2">
              <a href="" target="_blank">
                <div className="w23 jcc py2 br60 bg_y df aic b_s g1 cw fs2">
                  <div className="pa1 bcw br50 df aic jcc">
                    <FaTelegramPlane className="f_y bct" />
                  </div>
                  Telegram
                </div>
              </a>
              <a href="" target="_blank">
                <div className="w23 jcc py2 br60 bcw cbb df b_s aic g1 cw fs2">
                  <div className="pa1 bg_y br50 df aic jcc">
                    <FaXTwitter className="fw bct" />
                  </div>
                  Twitter
                </div>
              </a>
              <a href="" target="_blank">
                <div className="w23 jcc py2 br60 bcw cbb df b_s aic g1 cw fs2">
                  <div className="pa1 bg_y br50 df aic jcc">
                    <img
                      src="https://smidge.vip/static/media/dextools-y.fc7e910a97ed6efdefae.svg"
                      alt=""
                      className="w2"
                    />
                  </div>
                  Dextool
                </div>
              </a>
            </div>
            <div className=" pb4 maxw75 db ma">
              <div className="df aic jcc g1 px4 py1 fs25 br60 bg_y b_s2 cw m-q-b-d-n">
                1111111111111111111111111111111111111111111111
                <FaRegCopy className="fs15 bct" />
              </div>
              <div className="df aic jcc g1 px4 py2 fs125 br60 bglp2 b_s2 cw m-q-a-d-n">
                {String("1111111111111111111111111111111111111111111111").slice(
                  0,
                  4
                ) + "..."}

                <FaRegCopy className="fs15 bct" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //---------------------SLIDER------------------- */}
      <div className="">
        <div class="note fw">
          <div class="marquee bordered marquee-left">
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
        {/* //---------------------------------------- */}
      </div>
      {/* -------------------------------------------------- */}
      <div className="">
        <img src="/sancho-banner.png" alt="" />
      </div>
      {/* -------------------SLIDER------------------ */}
      <div className="">
        <div class="note fw">
          <div class="marquee bordered marquee-left">
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------- */}
      <div className="bgg">
        <div className="containerkws py5 maxw50 ">
          <div className="mb1 w100 df aic  fs15 bgb br20 jcsb ttu cw">
            <div className="bcw cb py05 px4 br20">Professional</div>
            <div className="py05 pr3">sancho</div>
          </div>
          <div className="fs4 tac fw600 mb2 cw">GOOD TIMES</div>
          <div className="dg gtc g2">
            <div className="">
              <img src="/sancho.jpg" className="mb1 br10" alt="" />
              <button className="px3 py05 br10 fs15 bgb cw w100">SANCHO</button>
            </div>
            <div className="">
              <div className="bcw pa1 br10 mb05">
                <div className="fs2 fw600 mb1">Service</div>
                <div className="fs15">
                  <ul>
                    <li className="df aic g05">
                      <div className="w1 h1 br50 bgg"></div>
                      Good Mourning Texts
                    </li>
                    <li className="df aic g05">
                      <div className="w1 h1 br50 bgg"></div>Unlimited intimecy
                    </li>
                    <li className="df aic g05">
                      <div className="w1 h1 br50 bgg"></div>2 hours venting time
                    </li>
                    <li className="df aic g05">
                      <div className="w1 h1 br50 bgg"></div>Smoking drinking
                      optional
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bcw pa1 br10 ">
                <button className="bgb py05 fs15 br10 cw w100">Book now</button>
                <div className="df aic g1 mt1">
                  <BsFillTelephoneFill className="f_b bct fs2" />
                  <div className="">
                    <div className="fs15">www.sancho.vipi</div>
                    <div className="fs15 fw600">(555) 555-SANCHO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="containerkws my5">
        <div className="dg gtc g3">
          <div className="">
            <div className="fs3 cw  fw600 mb1 lp">Who is $SANCHO?</div>
            <div className="mb05 fs15 cw">
              Meet Sancho, a smoller, cuter version of Pepe from the 5th
              generation of the frog kingdom. Known for his exaggerated
              expressions, he gained popularity on 4chan and Reddit, becoming
              viral. Join Sancho's journey to become the ultimate KOP (King of
              the Pond) and reign over the kingdom.
            </div>
          </div>
          <div className="">
            <img src="/Sancho.webp" className="w30 db ma" alt="" />
          </div>
        </div>
      </div> */}
      {/* ---------------SLIDER--------------------- */}
      <div className="">
        <div class="note fw">
          <div class="marquee bordered marquee-left">
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------TOKENOMICS----------------------- */}
      <div className="bglp">
        <div className="containerkws">
          <div className="fs3 cw  fw600 tac py4 cw">Tokenomics</div>
          <div className="b1 pa3 br30">
            <div className="dg gtc g3">
              <div className="">
                <img src="/manExcercise.jpg" className="w25 db ma" alt="" />
              </div>
              <div className="">
                <div className="fs3 cw  fw600 mb1 ">Supply Breakdown</div>
                <div className="cw fs15 mb05"> Token supply: 999 999 999</div>
                <ul className="cw">
                  <li className="df aic g05">
                    <div className="w1 h1 br50 bcw"></div>LP LOCKED
                  </li>
                  <li className="df aic g05">
                    <div className="w1 h1 br50 bcw"></div>MINT REVOKED
                  </li>
                  <li className="df aic g05">
                    <div className="w1 h1 br50 bcw"></div>CONTRACT RENOUNCED
                  </li>
                </ul>
                <hr className="cw mt2" />
                <div className="fs3 cw  fw600 ">Token Holders</div>
                <div className="cw">
                  Token Holders SANCHO tokens holders can use these tokens to
                  participate in project governance, voting, obtaining rewards
                </div>
              </div>
            </div>
          </div>
          <div className="my5 pb7 dg gtc g2 ">
            <div className="fs3 cw  fw600 cw">
              Buy Sancho now and join us in the Frog Kingdom takeover!
            </div>
            <div className="">
              <Accordian />
            </div>
          </div>{" "}
        </div>
      </div>
      {/* --------------------------------------------------- */}
      {/* <img src="/sancho-socials.jpg" className="w100" alt="" /> */}
      {/* ----------------------------------------------------- */}
      <div className="containerkws tac my5 lp">
        <div className="tac fs3 cw  fw600">Socials</div>
        <div className="tac fs3 cw  fw600 mb1">Join the Sancho Culture</div>
        <div className="df aic jcc g1 mb5">
          <a href="" target="_blank">
            <div className="pa1 fs3 cw  br50 bgg b_s cw ">
              <FaXTwitter className="bct" />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs3 cw  br50 bgg b_s cw ">
              <FaTelegramPlane className="bct" />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs3 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/dextools-y.fc7e910a97ed6efdefae.svg"
                className="w3"
                alt=""
              />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs3 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/dexscreener.5e3aa475c6a1996f72e8.svg"
                className="w3"
                alt=""
              />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs3 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/solscan-y.e92bafa1a551aaa2021d.svg"
                className="w3"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
      {/* -----------------------SLIDER-------------------------------- */}
      <div className="">
        <div class="note fw">
          <div class="marquee bordered marquee-left">
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
            <div class="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                $SANCHO $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;$SANCHO
                $SANCHO&nbsp;&nbsp;$SANCHO $SANCHO&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}
      <div className="py3 df aic jcsb cw containerkws">
        <div className="">&copy; $SANCHO 2024</div>
        <div className="m-q-b-d-n fs15">
          1111111111111111111111111111111111111111111111
        </div>
        <div className="m-q-a-d-n fs15">
          {String("1111111111111111111111111111111111111111111111").slice(
            0,
            10
          ) + "..."}
        </div>
      </div>
    </div>
  );
}

export default Home;
