import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// interface logoProps {
//   dark: string;
//   light: string;
// }

const Logo = () => {
   const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const light = '/logo/pipeops-dark.svg'
  const dark = '/logo/pipeops-light.svg'
  const src = theme === 'dark' ? dark : light
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Image src={src} width="120" height="120" alt="pipeops logo" />;
};

export default Logo;
