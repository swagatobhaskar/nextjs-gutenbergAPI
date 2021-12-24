/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");

// module.exports = {
//   reactStrictMode: true,
// }

module.exports = withPlaiceholder({
  // reactStrictMode: true,
  images: {
    domains: ['www.gutenberg.org'],
  },
});