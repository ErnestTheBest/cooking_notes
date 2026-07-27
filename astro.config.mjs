import { defineConfig } from "astro/config";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" && Boolean(owner && repository);
const isUserSite = repository === `${owner}.github.io`;

export default defineConfig({
  output: "static",
  site:
    process.env.SITE_URL ??
    (isGitHubPagesBuild
      ? `https://${owner}.github.io`
      : "http://localhost:4321"),
  base:
    process.env.BASE_PATH ??
    (isGitHubPagesBuild && !isUserSite ? `/${repository}` : "/"),
});
