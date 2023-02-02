import { useState, useEffect } from "react";

const Logo: React.FC = () => {
  let isThemeDark = false;
  if (typeof window !== "undefined") {
    isThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [darkMode, setDarkMode] = useState(isThemeDark);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e: MediaQueryListEvent) =>
        setDarkMode(e.matches);

      mediaQuery.addListener(handleThemeChange);

      // clean up
      return () => mediaQuery.removeListener(handleThemeChange);
    }
  }, []);

  return (
    <img
      src={darkMode ? "/logo/pipeops-light.png" : "/logo/pipeops-dark.png"}
      alt="Logo"
      width="120"
      height="120"
    />
  );
};

export default Logo;
