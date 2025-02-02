import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="mt-1 flex flex-col items-center">
        <div className="mb-2 flex justify-between space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="text-xs md:text-base">{`© 2019 - ${new Date().getFullYear()}`}</div>
          <div className="hidden md:block">{` - `}</div>
          <div className="hidden text-xs md:block md:text-base">{` Built with TailwindCSS && NextJS `}</div>
          <div className="hidden md:block">{` - `}</div>
          <p className="text-xs md:text-base">Made with 🏳️‍🌈 by</p>
          <Link href={siteMetadata.siteRepo} target="_blank" rel="noreferrer">
            <p className="px-1 text-xs text-purple-900 underline underline-offset-4 hover:rounded-lg hover:bg-purple-900 hover:text-white dark:text-primary-600 md:text-base">
              {siteMetadata.title}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
