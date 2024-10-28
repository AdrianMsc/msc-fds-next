"use client";
import Codeblock from "@/components/Codeblock";
import React, { useEffect, useRef, useState } from "react";

const AlphabeticalPager = () => {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0-9"];
  const pagerContainerRef = useRef(null);
  const pagerListRef = useRef(null);
  const [scrollBreakpoint, setScrollBreakpoint] = useState(750);

  useEffect(() => {
    const updateScrollBreakpoint = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024 && windowWidth >= 768) {
        setScrollBreakpoint(550);
      } else if (windowWidth <= 768 && windowWidth >= 640) {
        setScrollBreakpoint(700);
      } else if (windowWidth <= 640) {
        setScrollBreakpoint(750);
      }
    };

    updateScrollBreakpoint();
    window.addEventListener("resize", updateScrollBreakpoint);

    return () => {
      window.removeEventListener("resize", updateScrollBreakpoint);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pagerList = pagerListRef.current;
      const pagerContainer = pagerContainerRef.current;

      if (pagerList.scrollLeft >= scrollBreakpoint) {
        pagerContainer.classList.remove("msc-pager-container-after");
      } else if (pagerList.scrollLeft > 1) {
        pagerContainer.classList.add("msc-pager-container-before");
        pagerContainer.classList.add("msc-pager-container-after");
      } else if (pagerList.scrollLeft < 1) {
        pagerContainer.classList.remove("msc-pager-container-before");
      }
    };

    const pagerList = pagerListRef.current;
    pagerList.addEventListener("scroll", handleScroll);

    return () => {
      pagerList.removeEventListener("scroll", handleScroll);
    };
  }, [scrollBreakpoint]);

  return (
    <div
      id="pagerContainer"
      className="msc-pager-container msc-pager-container-after mt-10"
      ref={pagerContainerRef}
    >
      <ul id="pagerList" className="msc-pager-list" ref={pagerListRef}>
        {alphabet.map((letter, index) => (
          <li key={index}>
            <button
              className={`msc-pager-item${
                letter === "0-9" ? " msc-pager-last-item" : ""
              }`}
            >
              {letter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AlphabeticalPagerCode = () => {
  return (
    <>
      <h2 className="mt-10">Code</h2>
      <Codeblock>
        {`
  <div class="msc-pager-container msc-pager-container-after">
    <ul class="msc-pager-list">
      <li>
        <button class="msc-pager-item">A</button>
      </li>
      <li>
        <button class="msc-pager-item">B</button>
      </li>
      <li>
        <button class="msc-pager-item">C</button>
      </li>
      <li>
        <button class="msc-pager-item">D</button>
      </li>
      <li>
        <button class="msc-pager-item">E</button>
      </li>
      <li>
        <button class="msc-pager-item">F</button>
      </li>
      <li>
        <button class="msc-pager-item">G</button>
      </li>
      <li>
        <button class="msc-pager-item">H</button>
      </li>
      <li>
        <button class="msc-pager-item">I</button>
      </li>
      <li>
        <button class="msc-pager-item">J</button>
      </li>
      <li>
        <button class="msc-pager-item">K</button>
      </li>
      <li>
        <button class="msc-pager-item">L</button>
      </li>
      <li>
        <button class="msc-pager-item">M</button>
      </li>
      <li>
        <button class="msc-pager-item">N</button>
      </li>
      <li>
        <button class="msc-pager-item">O</button>
      </li>
      <li>
        <button class="msc-pager-item">P</button>
      </li>
      <li>
        <button class="msc-pager-item">Q</button>
      </li>
      <li>
        <button class="msc-pager-item">R</button>
      </li>
      <li>
        <button class="msc-pager-item">S</button>
      </li>
      <li>
        <button class="msc-pager-item">T</button>
      </li>
      <li>
        <button class="msc-pager-item">U</button>
      </li>
      <li>
        <button class="msc-pager-item">V</button>
      </li>
      <li>
        <button class="msc-pager-item">W</button>
      </li>
      <li>
        <button class="msc-pager-item">X</button>
      </li>
      <li>
        <button class="msc-pager-item">Y</button>
      </li>
      <li>
        <button class="msc-pager-item">Z</button>
      </li>
      <li>
        <button class="msc-pager-last-item">0-9</button>
      </li>
    </ul>
  </div>
  <!-- JS -->
  <script>
    let pagerContainer = document.getElementById("pagerContainer");
      let pagerList = document.getElementById("pagerList");

      let scrollBreakpoint;
      let windowWidth = window.innerWidth;

      if (windowWidth <= 1024 && windowWidth >= 768) {
        scrollBreakpoint = 550;
      } else if (windowWidth <= 768 && windowWidth >= 640) {
        scrollBreakpoint = 700;
      } else if (windowWidth <= 640) {
        scrollBreakpoint = 750;
      }

      pagerList.addEventListener("scroll", function () {
        if (pagerList.scrollLeft >= scrollBreakpoint) {
          pagerContainer.classList.remove("msc-pager-container-after");
        } else if (pagerList.scrollLeft > 1) {
          pagerContainer.classList.add("msc-pager-container-before");
          pagerContainer.classList.add("msc-pager-container-after");
        } else if (pagerList.scrollLeft < 1) {
          pagerContainer.classList.remove("msc-pager-container-before");
        }
      });
  </script>`}
      </Codeblock>
    </>
  );
};

export default AlphabeticalPager;
