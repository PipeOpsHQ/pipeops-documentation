import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// interface logoProps {
//   dark: string;
//   light: string;
// }

const Logo = () => {
   const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()
  const light = '/logo/pipeops-dark.svg'
  const dark = '/logo/pipeops-light.svg'
  let src = ''

  if (theme === 'dark' && systemTheme === 'light') {
    src = dark
  } else if (theme === 'light' && systemTheme === 'dark') {
    src = light
  } else {
    src = systemTheme === 'dark' ? dark : light
  }
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Image src={src} width="120" height="120" alt="pipeops logo" />;
};

export default Logo;
