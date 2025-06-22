import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "retailjewellerindia.com", "images.unsplash.com"], // Add the external domain here
  },
};

export default withNextIntl(nextConfig);
