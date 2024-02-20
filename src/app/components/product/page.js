"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

function FruityCarousel() {
  // Data for the sections
  const h1Texts = ["Pear", "Apple", "Exotic"];
  const logoColors = [
    "var(--pear-logo)",
    "var(--apple-logo)",
    "var(--exotic-logo)",
  ];
  const keyframes = [
    "wave-pear-effect",
    "wave-apple-effect",
    "wave-exotic-effect",
  ];

  // State for current index and position
  let currentIndex = 0;
  let currentPosition = 0;

  const handleNextClick = () => {
    // Decrease the current position by 100% (to the left)
    if (currentPosition > -200) {
      currentPosition -= 100;
      // Update the left position of the cane-labels
      caneLabels.style.left = `${currentPosition}%`;
      sectionContainer.style.left = `${currentPosition}%`;
    }
    // Increment index and currentIndex
    currentIndex++;
    // Update the h1 text if currentIndex is less than the length of h1Texts
    if (currentIndex < h1Texts.length) {
      document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
    }
    // GSAP animation for next section components
    gsap.to(".logo", {
      opacity: 1,
      duration: 1,
      color: logoColors[currentIndex],
    });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
    gsap.from(".fruit-image ", { y: "-100vh", delay: 0.4, duration: 0.4 });

    // Disable the nextButton if the last section is active
    if (currentIndex === h1Texts.length - 1) {
      nextButton.style.display = "none";
    }
    // Enable the prevButton if it's not the first section
    if (currentIndex > 0) {
      prevButton.style.display = "block";
    }
    // Button colors and animations
    nextButton.style.color = logoColors[currentIndex + 1];
    prevButton.style.color = logoColors[currentIndex - 1];
    nextButton.style.animationName = keyframes[currentIndex + 1];
    prevButton.style.animationName = keyframes[currentIndex - 1];
  };

  const handlePrevClick = () => {
    if (currentPosition < 0) {
      currentPosition += 100;
      // Update the left position of the cane-labels
      caneLabels.style.left = `${currentPosition}%`;
      sectionContainer.style.left = `${currentPosition}%`;
      sectionContainer.style.transition = `all 0.5s ease-in-out`;
    }
    // Decrement index and currentIndex
    currentIndex--;
    if (currentIndex >= 0) {
      document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
    }
    // GSAP animation for previous section components
    gsap.to(".logo", { color: logoColors[currentIndex], duration: 1 });
    gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
    gsap.from(".fruit-image ", { y: "100vh", delay: 0.5 });
    // Enable the nextButton if it was disabled
    nextButton.style.display = "block";
    // Disable the prevButton if it's the first section
    if (currentIndex === 0) {
      prevButton.style.display = "none";
    }
    // Button colors and animations
    nextButton.style.color = logoColors[currentIndex + 1];
    prevButton.style.color = logoColors[currentIndex - 1];
    nextButton.style.animationName = keyframes[currentIndex + 1];
    prevButton.style.animationName = keyframes[currentIndex - 1];
  };

  useEffect(() => {
    // Initial GSAP animation
    gsap.from(".fruit-image", { y: "-100vh", delay: 0.5 });
    gsap.to(".fruit-image img", {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      zIndex: 22,
      duration: 2,
      ease: "none",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div>
      <header>
        <h2 className="logo">Fruity</h2>
      </header>

      <main>
        <div>
          <button id="prevButton" className="wave" onClick={handlePrevClick}>
            &lt; {/* Left arrow icon */}
          </button>
          <button id="nextButton" className="wave" onClick={handleNextClick}>
            &gt; {/* Right arrow icon */}
          </button>
        </div>

        <div class="text">
          <h1 class="h1">Pear</h1>
          <div class="cane-image "></div>
          <div class="text">
            <h1 class="h1">Pear</h1>
            <div class="cane-image ">
              <img src="https://www.yudiz.com/codepen/fruity/cane.svg" alt="" />
              <img
                src="https://www.yudiz.com/codepen/fruity/Labels.jpg"
                alt=""
                class="cane-labels"
              />
            </div>
          </div>

          <div class="section-container-main">
            <div class="section-container">
              <section class="section" id="section1">
                <div class="fruit-images">
                  <div class="image-one fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/pear-one.png"
                      alt="pear-image"
                    />
                  </div>
                  <div class="image-two fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/pear-two.png"
                      alt="pear-image"
                    />
                  </div>
                  <div class="image-three fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/pear-three.png"
                      alt="pear-image"
                    />
                  </div>
                  <div class="image-four fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/pear-four.png"
                      alt="pear-image"
                    />
                  </div>
                </div>
              </section>
              <section class="section" id="section2">
                <div class="fruit-images">
                  <div class="image-one fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/apple-one.png"
                      alt="apple-image"
                    />
                  </div>
                  <div class="image-two fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/apple-two.png"
                      alt="apple-image"
                    />
                  </div>
                  <div class="image-three fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/apple-three.png"
                      alt="apple-image"
                    />
                  </div>
                  <div class="image-four fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/apple-four.png"
                      alt="apple-image"
                    />
                  </div>
                </div>
              </section>
              <section class="section" id="section3">
                <div class="fruit-images">
                  <div class="image-one fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/exotic-one.png"
                      alt="exotic-image"
                    />
                  </div>
                  <div class="image-two fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/exotic-two.png"
                      alt="exotic-image"
                    />
                  </div>
                  <div class="image-three fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/exotic-three.png"
                      alt="exotic-image"
                    />
                  </div>
                  <div class="image-four fruit-image">
                    <img
                      src="https://www.yudiz.com/codepen/fruity/exotic-four.png"
                      alt="exotic-image"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FruityCarousel;
