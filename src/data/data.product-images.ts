/**
 * ══════════════════════════════════════════════════════════════
 * i2c Product Images Map & Configuration Registry
 * 
 * Easily switch any product's thumbnail between:
 * - "human": Bright, upbeat, natural lighting real-world human usage scenes
 * - "architecture": Dark-theme 16:9 cinematic UI & subsystem architecture blueprints
 * - "legacy": Original topic illustrations, slides, or conceptual graphics
 * 
 * Switch GLOBAL_PRODUCT_IMAGE_STYLE to change all thumbnails at once,
 * or set `activeStyle: "architecture" | "human" | "legacy"` on any individual product.
 * ══════════════════════════════════════════════════════════════
 */

export type ProductImageStyle = "human" | "architecture" | "legacy";

export interface ProductImageOptions {
  human: string;
  architecture: string;
  legacy?: string;
  activeStyle?: ProductImageStyle;
}

/**
 * GLOBAL THUMBNAIL STYLE TOGGLE
 * Set to "human", "architecture", or "legacy"
 */
export const GLOBAL_PRODUCT_IMAGE_STYLE: ProductImageStyle = "human";

export const productImagesMap: Record<string, ProductImageOptions> = {
  // ══════════════════════════════════════════════════════════════
  // VERTICAL SOLUTIONS & ENTERPRISE APPS (15)
  // ══════════════════════════════════════════════════════════════
  unibi: {
    human: "/images/products-human/unibi.jpg",
    architecture: "/images/products-hd/unibi.jpg",
    legacy: "/images/product-illustrations/corporate-users-asia.jpeg"
  },
  uniqi: {
    human: "/images/products-human/uniqi.jpg",
    architecture: "/images/products-hd/uniqi.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  unifi: {
    human: "/images/products-human/unifi.jpg",
    architecture: "/images/products-hd/unifi.jpg",
    legacy: "/images/topics/Blockchain-To-Fintech.png"
  },
  webbuilder: {
    human: "/images/products-human/webbuilder.jpg",
    architecture: "/images/products-hd/webbuilder.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  tion: {
    human: "/images/products-human/tion.jpg",
    architecture: "/images/products-hd/tion.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  osee: {
    human: "/images/products-human/osee.jpg",
    architecture: "/images/products-hd/osee.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  ierp: {
    human: "/images/products-human/ierp.jpg",
    architecture: "/images/products-hd/ierp.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  ireport: {
    human: "/images/products-human/ireport.jpg",
    architecture: "/images/products-hd/ireport.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  automotiveeco: {
    human: "/images/products-human/automotiveeco.jpg",
    architecture: "/images/products-hd/automotiveeco.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  logop: {
    human: "/images/products-human/logop.jpg",
    architecture: "/images/products-hd/logop.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  cyop: {
    human: "/images/products-human/cyop.jpg",
    architecture: "/images/products-hd/cyop.jpg",
    legacy: "/images/topics/blockchain-infographic.jpg"
  },
  defikit: {
    human: "/images/products-human/defikit.jpg",
    architecture: "/images/products-hd/defikit.jpg",
    legacy: "/images/topics/Blockchain-To-Fintech.png"
  },
  myestate: {
    human: "/images/products-human/myestate.jpg",
    architecture: "/images/products-hd/myestate.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  i2chomenet: {
    human: "/images/products-human/i2chomenet.jpg",
    architecture: "/images/products-hd/i2chomenet.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  miniplatform: {
    human: "/images/products-human/miniplatform.jpg",
    architecture: "/images/products-hd/miniplatform.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },

  // ══════════════════════════════════════════════════════════════
  // CORE DATA SUBSTRATES & MIDDLEWARE (4)
  // ══════════════════════════════════════════════════════════════
  kitchen: {
    human: "/images/products-human/kitchen.jpg",
    architecture: "/images/products-hd/kitchen.jpg",
    legacy: "/images/product-illustrations/kitchen-concept.jpeg"
  },
  fractaldb: {
    human: "/images/products-human/fractaldb.jpg",
    architecture: "/images/products-hd/fractaldb.jpg",
    legacy: "/images/product-illustrations/fractaldb-concept.jpeg"
  },
  hypergraph: {
    human: "/images/products-human/hypergraph.jpg",
    architecture: "/images/products-hd/hypergraph.jpg",
    legacy: "/images/product-illustrations/hypergraph-concept.jpeg"
  },
  fluid: {
    human: "/images/products-human/fluid.jpg",
    architecture: "/images/products-hd/fluid.jpg",
    legacy: "/images/topics/blockchain-infographic.jpg"
  },

  // ══════════════════════════════════════════════════════════════
  // AI ENGINES & RUNTIMES (10)
  // ══════════════════════════════════════════════════════════════
  minhai: {
    human: "/images/products-human/minhai.jpg",
    architecture: "/images/products-hd/minhai.jpg",
    legacy: "/images/topics/chatbot.png"
  },
  hyperai: {
    human: "/images/products-human/hyperai.jpg",
    architecture: "/images/products-hd/hyperai.jpg",
    legacy: "/images/topics/chatbot2.png"
  },
  viai: {
    human: "/images/products-human/viai.jpg",
    architecture: "/images/products-hd/viai.jpg",
    legacy: "/images/topics/chatbot.png"
  },
  garden: {
    human: "/images/products-human/garden.jpg",
    architecture: "/images/products-hd/garden.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  transformerhub: {
    human: "/images/products-human/transformerhub.jpg",
    architecture: "/images/products-hd/transformerhub.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  long: {
    human: "/images/products-human/long.jpg",
    architecture: "/images/products-hd/long.jpg",
    legacy: "/images/product-illustrations/long-runtime.jpeg"
  },
  rsts: {
    human: "/images/products-human/rsts.jpg",
    architecture: "/images/products-hd/rsts.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  fly: {
    human: "/images/products-human/fly.jpg",
    architecture: "/images/products-hd/fly.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  uploop: {
    human: "/images/products-human/uploop.jpg",
    architecture: "/images/products-hd/uploop.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  lac: {
    human: "/images/products-human/lac.jpg",
    architecture: "/images/products-hd/lac.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },

  // ══════════════════════════════════════════════════════════════
  // TRUST & DEVELOPER TOOLCHAINS (7)
  // ══════════════════════════════════════════════════════════════
  jigsaw: {
    human: "/images/products-human/jigsaw.jpg",
    architecture: "/images/products-hd/jigsaw.jpg",
    legacy: "/images/topics/blockchain-infographic.jpg"
  },
  rings: {
    human: "/images/products-human/rings.jpg",
    architecture: "/images/products-hd/rings.jpg",
    legacy: "/images/topics/blockchain-infographic.jpg"
  },
  "i2c-forge": {
    human: "/images/products-human/i2c-forge.jpg",
    architecture: "/images/products-hd/i2c-forge.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  quang: {
    human: "/images/products-human/quang.jpg",
    architecture: "/images/products-hd/quang.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  shai: {
    human: "/images/products-human/shai.jpg",
    architecture: "/images/products-hd/shai.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  i2collab: {
    human: "/images/products-human/i2collab.jpg",
    architecture: "/images/products-hd/i2collab.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  },
  devplatform: {
    human: "/images/products-human/devplatform.jpg",
    architecture: "/images/products-hd/devplatform.jpg",
    legacy: "/images/topics/smart-content-marketing.png"
  }
};

/**
 * Helper to resolve the active image URL for a given product.
 */
export function getProductImage(slug: string, preferredStyle?: ProductImageStyle): string {
  const item = productImagesMap[slug];
  if (!item) return `/images/products-human/${slug}.jpg`;
  const style = preferredStyle || item.activeStyle || GLOBAL_PRODUCT_IMAGE_STYLE;
  return item[style] || item.human || item.architecture;
}

/**
 * Helper to get all available image URLs for a product in rotation order.
 */
export function getProductImageRotation(slug: string): string[] {
  const item = productImagesMap[slug];
  if (!item) return [`/images/products-human/${slug}.jpg`, `/images/products-hd/${slug}.jpg`];
  const list = [item.human, item.architecture];
  if (item.legacy && item.legacy !== item.human && item.legacy !== item.architecture) {
    list.push(item.legacy);
  }
  return list;
}

export default productImagesMap;
