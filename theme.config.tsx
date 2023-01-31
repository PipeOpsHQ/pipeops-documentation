import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/PipeOpsHQ/pipeops-documentation",
  },
  docsRepositoryBase: "https://github.com/PipeOpsHQ/pipeops-documentation",
  logo: (
    <>
      <img
        src="https://res.cloudinary.com/djhh4kkml/image/upload/v1665733809/Pipeops/Pipeops_bcnyeo.png"
        alt="Logo"
        width="120"
        height="120"
      />
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
      <React.Fragment>
        <meta property="og:url" content={`https://docs.pipeops.io${asPath}`} />
        <meta property="og:title" content={`${frontMatter.title} — Pipeops`} />
        <meta
          property="og:description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
      </React.Fragment>
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
