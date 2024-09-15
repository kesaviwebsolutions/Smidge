import React from "react";

function Home() {
  return (
    <div className="containerkws">
      <div className="">
        <div className="tac mb5">
          <img src="/logo2.webp" className="w20  db ma" alt="" />
          <img src="/mkd.webp" className="w25  db ma" alt="" />
        </div>
        <div className="btn-group df aic g1 jcc flex-wrap">
          <a
            href="https://t.me/smidgecoin"
            class="btn primary large"
            title="Telegram"
            rel="noreferrer"
            target="_blank"
          >
            <span class="btn-circ">
              <i data-ico="tg"></i>
            </span>
            TELEGRAM
          </a>
          <a
            href="https://x.com/SmidgeCoin"
            class="btn secondary large"
            title="Twitter"
            rel="noreferrer"
            target="_blank"
          >
            <span class="btn-circ">
              <i data-ico="tw" data-theme="yellow"></i>
            </span>
            TWITTER
          </a>
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/H99U7toZ5gEuJKLANECvaXqfVq2AGFFk5SRxttN6Zyqo?t=1719239221490"
            class="btn secondary large"
            title="DEXTOOLS"
            rel="noreferrer"
            target="_blank"
          >
            <span class="btn-circ">
              <i data-ico="dextools" data-theme="yellow"></i>
            </span>
            DEXTOOLS
          </a>
        </div>{" "}
        <section class="contractCopy">
          <input
            type="text"
            value="2HjefZ23Jk4jgm8R8bW4VWrnfEURRJW1XphXeKzZjwUa"
            style={{ position: "fixed", left: "-9999px" }}
          />
          <p class="clipboard">
            <span class="reduced">
              2HjefZ23Jk4jgm8R8bW4VWrnfEURRJW1XphXeKzZjwUa
            </span>{" "}
            <i data-ico="clipboard"></i>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
