import React from "react";

function Navbar() {
  return (
    <div className="pa2">
      <div className="df ai jcsb">
        <div className="">
          <img src="/logo.webp" className="w15" alt="" />
        </div>
        <div className="">
          <div class="buttons fw800">
            <a
              href="https://raydium.io/swap/?inputCurrency=sol&amp;outputCurrency=2hjefz23jk4jgm8r8bw4vwrnfeurrjw1xphxekzzjwua&amp;fixed=in&amp;inputMint=sol&amp;outputMint=2HjefZ23Jk4jgm8R8bW4VWrnfEURRJW1XphXeKzZjwUa"
              className="btn small yellow fw800 lp px2 fs125"
              title="GET SMIDGE"
              rel="noreferrer"
              target="_blank"
            >
              GET SMIDGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
