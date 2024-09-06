import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'] // Add other domains if needed
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);