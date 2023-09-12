import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

import Logo from "./components/logo";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/PipeOpsHQ/pipeops-documentation",
  },
  docsRepositoryBase: "https://github.com/PipeOpsHQ/pipeops-documentation",
  chat: {
    link: "https://discord.com/invite/PQscGtfFD2",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – PipeOps",
        description:
          "PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management",
      };
    }
  },
  logo: () => <Logo />,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
//    const socialCard =
//      route === "/" || !title
//        ? "https://docs.pipeops.io/og.jpeg"
//        : `https://docs.pipeops.io/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/favicon-192x192.png"
          sizes="192x192"
        />
        <meta itemProp="name" content="Pipeops Docs" />
        <meta
          name="description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
        <meta
          name="og:description"
          content="PipeOps: the No-code Tool for Cloud Deployments & Infrastructure Management"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site:domain" content="pipeops.io" />
        <meta name="twitter:url" content="https://pipeops.io" />
        <meta
          name="og:title"
          content={title ? title + ' – PipeOps' : 'PipeOps'}
        />
        <meta name="og:image" content="" />
        <meta name="apple-mobile-web-app-title" content="PipeOps" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
//   banner: {
//     key: '2.0-release',
//     text: (
//       <a href="https://pipeops.io" target="_blank" rel="noreferrer">
//         🎉 PipeOps product update is released. Read more →
//       </a>
//     )
//   },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} PipeOps Inc.
        </p>
      </div>
    ),
  },
};

export default config;
