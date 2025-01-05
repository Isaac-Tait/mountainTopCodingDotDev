import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-blue-200">
      <div className="mt-1 flex flex-col items-center">
        <div className="mb-2 flex justify-between space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="text-xs md:text-base">{`© 2019 - ${new Date().getFullYear()}`}</div>
          <div className="hidden md:block">{` - `}</div>
          <div className="hidden text-xs md:block md:text-base">{` Built with TailwindCSS && NextJS `}</div>
          <div className="hidden md:block">{` - `}</div>
          <p className="text-xs md:text-base">Made with 🏳️‍🌈 by</p>
          <Link
            href="https://github.com/Isaac-Tait/tailwind-css-starter-blog"
            target="_blank"
            rel="noreferrer"
          >
            <p className="px-1 text-xs text-blue-600 underline underline-offset-4 hover:rounded-lg hover:bg-blue-600 hover:text-white md:text-base">
              {siteMetadata.title}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
