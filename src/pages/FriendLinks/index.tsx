import Layout from '../../components/Layout'
import ezbdc from '@/assets/friendlinks/ezbdc.jpg'
import kk from '@/assets/friendlinks/kk.jpg'
import web_worker from '@/assets/friendlinks/web-worker.png'
import type React from 'react'

export const FriendLinks: React.FC = () => {
  const links = [
    {
      title: 'Kai',
      href: 'https://kaiyi.cool/',
      imgSrc: kk,
      description: '原作者的个人博客，记录了一些技术文章，生活感悟，以及一些有趣的小项目',
    },
    {
      title: 'kuhung.me',
      href: 'https://kuhung.me',
      imgSrc: kk,
      description: 'kuhung 的个人博客，记录了一些技术文章，生活感悟，以及一些有趣的小项目',
    },
  ]

  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center px-4 pt-20">
        <div className="flex w-full max-w-md flex-grow flex-col items-center">
          <div className="mt-5 text-center text-lg font-bold dark:text-gray-50">友情链接</div>
          <div className="links flex w-full flex-col items-center gap-y-8 py-5">
            {links.map((link, index) => (
              <a
                key={index}
                title={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="linkItem flex w-full items-center overflow-hidden dark:text-gray-50"
              >
                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-gray-200">
                  <img src={link.imgSrc} alt={link.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="pb-1 text-sm font-bold">{link.title}</div>
                  <div className="text-xs text-gray-500">{link.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-auto pb-5 text-center text-sm text-gray-500">
          想要添加友链？请联系邮箱：
          <a href="mailto:hi@kuhung.me" className="text-blue-500">
            hi@kuhung.me
          </a>
        </div>
      </div>
    </Layout>
  )
}
