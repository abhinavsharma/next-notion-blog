import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import Head from 'next/head'
import { DefaultSeoProps } from 'next-seo'

export interface Props extends NextSeoProps {
  title?: string
  description?: string
  image?: string
}

const title = 'Abhinav's Blog'
export const url = 'https://blog.abhinavsharma.com'
const description = 'Abhinav's Blog'
const image = 'https:/ßblog.abhinavsharma.com/og.png'

const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    site_name: title,
    images: [{ url: image }],
  },
  twitter: {
    handle: '@Railway_App',
    cardType: 'summary_large_image',
  },
}

const SEO: React.FC<Props> = ({ image, ...props }) => {
  const title = props.title ?? config.title
  const description = props.description || config.description

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }],
              },
            })}
      />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
      </Head>
    </>
  )
}

export default SEO
