import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

function FooterBanner({
  footerBanner: { discount, desc, largeText, saleTime, buttonText, product, image, midText, smallText },
}) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type="button">
              {buttonText}
            </button>
          </Link>

        </div>
        <img src={urlFor(image && image)} className="footer-banner-image" />
      </div>
    </div>
  );
}

export default FooterBanner;
