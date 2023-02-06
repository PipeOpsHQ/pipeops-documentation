import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/PipeOpsHQ/pipeops-documentation",
  },
  docsRepositoryBase: "https://github.com/PipeOpsHQ/pipeops-documentation",
  logo: (
    <>
      <Logo dark="/logo/pipeops-dark.svg" light="/logo/pipeops-light.svg" />
    </>
  ),

  useNextSeoProps() {
    const { route } = useRouter();
    const { frontMatter } = useConfig();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Pipeops",
        description:
          frontMatter.description ||
          "PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management",
      };
    }
  },

  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        <meta property="og:url" content={`https://docs.pipeops.io${asPath}`} />
        <meta property="og:title" content={`${frontMatter.title} — Pipeops`} />
        <meta
          property="og:description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" sizes="192x192" />
        <meta itemProp="name" content="Pipeops Docs" />
        <meta
          itemProp="description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
        <meta itemProp="image" content="preview img will be here" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta
          name="twitter:description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
        <meta name="twitter:site" content="docs.pipeops.io" />
        <meta
          name="twitter:image"
          content="twitter preview image will be here"
        />
      </>
    );
  },

  editLink: {
    text: "",
  },

  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },

  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">© {new Date().getFullYear()} PipeOps.</p>
      </div>
    ),
  },
};

export default config;
