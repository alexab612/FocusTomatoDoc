const normalizeBasePath = (value = "") => {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
};

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "focusTomato";
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_PAGES === "true" && !isUserOrOrgPagesRepo
    ? normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? `/${repoName}`)
    : normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
