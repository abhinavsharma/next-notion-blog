import React from 'react'
import { GitHub, Twitter } from 'react-feather'

import Link from '@components/Link'
import Logo from '@components/Logo'

const Footer = () => (
  <footer className="py-4 bg-gray-900">
    <Link href="https://abhinavsharma.cpom">
      <div className="max-w-2xl px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="pl-4 flex items-center text-sm text-gray-500 font-medium">
            <Link href="https://twitter.com/abhinavsharma" className="pr-4">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  </footer>
)

export default Footer
