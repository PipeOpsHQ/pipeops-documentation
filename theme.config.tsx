import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'



const config: DocsThemeConfig = {

  logo: (
    <>
      <img src="https://res.cloudinary.com/djhh4kkml/image/upload/v1665733809/Pipeops/Pipeops_bcnyeo.png" alt="Logo" width="120" height="120" />
    </>
  ),


  
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
    labels: ''
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
        © {new Date().getFullYear()} PipeOps.
        </p>
      </div>
    )
  }
}

export default config
