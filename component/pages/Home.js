"use client";
import React from "react";
import Accordian from "./Accordian";
import { FaRegCopy, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Toasters, { notify } from "./Toaster";

function Home() {
  const copySelected = (selectedText) => {
    navigator.clipboard.writeText(selectedText).then(() => {
      notify("Copied !!!");
    });
  };

  return (
    <div className="">
      <div className="bgg">
        <Navbar />

        <div className="containerkws">
          <div className="">
            <div className="tac mb5">
              {/* <img src="/logo2.webp" className="animation w20  db ma" alt="" /> */}
              <img
                src="/sancho-logo.png"
                className="animation w20  db ma"
                alt=""
              />
            </div>
            <div className="df aic ttu jcc g1 flex-wrap mb2">
              <a href="https://t.me/sanchoSol" target="_blank">
                <div className="w23 jcc py1 br60 bg_y df aic b_s g1 cw fs15">
                  <div className="pa1 bcw br50 df aic jcc">
                    <FaTelegramPlane className="f_y bct" />
                  </div>
                  Telegram
                </div>
              </a>
              <a href="https://x.com/sanchocoin" target="_blank">
                <div className="w23 jcc py1 br60 bcw cbb df b_s aic g1 cw fs15">
                  <div className="pa1 bg_y br50 df aic jcc">
                    <FaXTwitter className="fw bct" />
                  </div>
                  Twitter
                </div>
              </a>
              <a href="" target="_blank">
                <div className="w23 jcc py1 br60 bcw cbb df b_s aic g1 cw fs15">
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
                E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B
                <FaRegCopy
                  className="fs15 bct cp"
                  onClick={() =>
                    copySelected("E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B")
                  }
                />
              </div>
              <div className="df aic jcc g1 px4 py2 fs125 br60 bglp2 b_s2 cw m-q-a-d-n">
                {String("E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B").slice(
                  0,
                  4
                ) + "..."}

                <FaRegCopy
                  className="fs15 bct cp"
                  onClick={() =>
                    copySelected("E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B")
                  }
                />
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
        <img src="/sancho-banner-final.webp" alt="" />
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
      {/* -------------------ABOUT SANCHO----------------- */}
      <div className="containerkws cw py3">
        <div className="fs4 tac fw600 mb2 cw">Sancho Services</div>

        <div className="">
          <video
            controls
            src="/final_pedro.mp4"
            type="video/mp4"
            autoplay
            loop
            width="65%"
            style={{ display: "block", margin: "0 auto" }}
          ></video>
        </div>
        <div className="">
          <div className="fs15">
            <p className="fs3 tac fw600 mt2">We got Your girl Covered!</p>
            <p className="tac">
              Don't worry, Sancho knows times are tough. But just because your
              coins are down doesn’t mean her standards should be!
            </p>
            <p className="fs3 tac fw600 mt2">Why Sancho Services?</p>
            <p className="tac">Spoil Her Without Spending:</p>
            <p className="tac">
              Your coins might be worthless, but she’s not! Sancho will handle
              the spa days, shopping sprees, and fancy dinners you can’t afford.
            </p>
            <p className="tac">Bull Market Treatment:</p>
            <p className="tac">
              While you’re HODLing, Sancho pampering. From diamond earrings to
              surprise getaways, she gets the best while you watch the market.
            </p>
            <p className="tac">
              Sancho Services: Keeping her happy so you can HODL in peace!
            </p>
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
                <div className="fs2 fw600 mb1 cb">Service</div>
                <div className="fs15 cb">
                  <ul>
                    <li className="df aic g05 cb">
                      <div className="w1 h1 br50 bgg "></div>
                      Good Morning Texts
                    </li>
                    <li className="df aic g05 cb">
                      <div className="w1 h1 br50 bgg"></div>Unlimited intimacy
                    </li>
                    <li className="df aic g05 cb">
                      <div className="w1 h1 br50 bgg"></div>2 hours venting time
                    </li>
                    <li className="df aic g05 cb">
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
                  <div className="cb">
                    <div className="fs15">www.sancho.meme</div>
                    <div className="fs15 fw600">(555) 555-SANCHO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="containerkws maxw50 pb5">
          <div className="fs3 cw  fw600 tac py4 cw">Tokenomics</div>
          <div className="b1 pa3 br30">
            <div className="dg gtc g3">
              <div className="">
                <img src="/manExcercise.png" className="w25 db ma" alt="" />
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
        </div>
      </div>
      {/* ----------------------------------- */}
      <div className="bgg">
        <div className="pt5 db ma  dg gtc maxw50 g2 containerkws ">
          <div className="">
            <div className="fs2 cw mb2 fw600 cw mqtac">
              Hire sancho now to make sure the job is done to perfection.
            </div>
            <div className="mb2">
              <img src="/mansitting.png" className="db ma br50" alt="" />
            </div>
          </div>
          <div className="">
            <Accordian />
          </div>
        </div>{" "}
      </div>
      {/* --------------------------------------------------- */}
      {/* <img src="/sancho-socials.jpg" className="w100" alt="" /> */}
      {/* ----------------------------------------------------- */}
      <div className="containerkws tac my5 lp">
        <div className="tac fs3 cw  fw600">Socials</div>
        <div className="tac fs3 cw  fw600 mb1">
          Join to find your tailored Sancho
        </div>
        <div className="df aic jcc g1 mb5">
          <a href="https://x.com/sanchocoin" target="_blank">
            <div className="pa1 fs2 cw  br50 bgg b_s cw ">
              <FaXTwitter className="bct" />
            </div>
          </a>
          <a href="https://t.me/sanchoSol" target="_blank">
            <div className="pa1 fs2 cw  br50 bgg b_s cw ">
              <FaTelegramPlane className="bct" />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs2 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/dextools-y.fc7e910a97ed6efdefae.svg"
                className="w2"
                alt=""
              />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs2 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/dexscreener.5e3aa475c6a1996f72e8.svg"
                className="w2"
                alt=""
              />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="pa1 fs2 cw  br50 bgg b_s cw ">
              <img
                src="https://Smidge.vip/static/media/solscan-y.e92bafa1a551aaa2021d.svg"
                className="w2"
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
          E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B
        </div>
        <div className="m-q-a-d-n fs15">
          {String("E33ise4T7jX4ngT5sMVEMFEumksGNgwEWvvM2EcpgV5B").slice(0, 10) +
            "..."}
        </div>
      </div>
      <Toasters />
    </div>
  );
}

export default Home;
