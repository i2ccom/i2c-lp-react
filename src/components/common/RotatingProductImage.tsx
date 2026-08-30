import React, { useState } from "react";
import productImagesMap from "../../data/data.product-images";
import "./RotatingProductImage.css";

interface RotatingProductImageProps {
  slug: string;
  alt: string;
  className?: string;
  showIndicator?: boolean;
}

export default function RotatingProductImage({
  slug,
  alt,
  className = "",
  showIndicator = true
}: RotatingProductImageProps) {
  const item = productImagesMap[slug];
  const humanImg = item?.human || `/images/products-human/${slug}.jpg`;
  const archImg = item?.architecture || `/images/products-hd/${slug}.jpg`;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`door-split-wrapper ${isHovered ? "is-hovered" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={`${alt} - Hover to inspect architecture blueprint`}
    >
      {/* 1. Underlying Inner Substrate / Architecture Layer */}
      <div className="door-underlayer">
        <img
          src={archImg}
          alt={`${alt} Architecture Blueprint`}
          loading="lazy"
          className="door-arch-img"
        />
        <div className="door-arch-overlay">
          <span className="door-arch-tag">
            <i className="fa-solid fa-layer-group"></i>
            <span>Architecture Design</span>
          </span>
        </div>
      </div>

      {/* 2. Top Split Doors (Human Usage Scenario) */}
      <div className="door-panels-container">
        {/* Left Door Half */}
        <div className="door-panel door-panel-left">
          <img
            src={humanImg}
            alt={alt}
            loading="lazy"
            className="door-human-img"
          />
        </div>

        {/* Right Door Half */}
        <div className="door-panel door-panel-right">
          <img
            src={humanImg}
            alt={alt}
            loading="lazy"
            className="door-human-img"
          />
        </div>
      </div>

      {/* 3. Resting Mode Tag */}
      {showIndicator && (
        <div className="door-usage-pill">
          <span className="pill-pulse-dot"></span>
          <span>{isHovered ? "Blueprint" : "Usage"}</span>
        </div>
      )}
    </div>
  );
}
