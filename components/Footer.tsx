import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-1 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© 2019 - ${new Date().getFullYear()}`}</div>
          <div>{` - `}</div>
          <div className="hidden md:block">{` Built with TailwindCSS && NextJS `}</div>
          <div className="hidden md:block">{` - `}</div>
          <a
            href="https://github.com/Isaac-Tait/tailwind-css-starter-blog"
            target="_blank"
            rel="noreferrer"
          >
            <p className="px-1 text-blue-600 underline underline-offset-4 hover:rounded-lg hover:bg-blue-600 hover:text-white">
              {siteMetadata.title}
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}
