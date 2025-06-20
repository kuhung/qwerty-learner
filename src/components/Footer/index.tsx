import InfoPanel from '@/components/InfoPanel'
import Tooltip from '@/components/Tooltip'
import { infoPanelStateAtom } from '@/store'
import type { InfoPanelType } from '@/typings'
import { recordOpenInfoPanelAction } from '@/utils'
import { useAtom } from 'jotai'
import type React from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import IconMail from '~icons/material-symbols/mail'
import RiLinksLine from '~icons/ri/links-line'
import IconTwitter from '~icons/ri/twitter-fill'
import IconGithub from '~icons/simple-icons/github'

const Footer: React.FC = () => {
  const [infoPanelState, setInfoPanelState] = useAtom(infoPanelStateAtom)
  const navigate = useNavigate()

  const handleOpenInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      recordOpenInfoPanelAction(modalType, 'footer')
      setInfoPanelState((state) => ({ ...state, [modalType]: true }))
    },
    [setInfoPanelState],
  )

  const handleCloseInfoPanel = useCallback(
    (modalType: InfoPanelType) => {
      setInfoPanelState((state) => ({ ...state, [modalType]: false }))
    },
    [setInfoPanelState],
  )

  return (
    <>
      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/kuhung/qwerty-learner" target="_blank" rel="noreferrer" aria-label="前往 GitHub 项目主页">
          <IconGithub fontSize={15} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
        </a>

        <a href="https://twitter.com/kuhungio" target="_blank" title="x" rel="noreferrer">
          <IconTwitter fontSize={16} className="text-gray-500 hover:text-[#1DA1F2] dark:text-gray-400 dark:hover:text-[#1DA1F2]" />
        </a>

        <a
          href="mailto:kuhung@foxmail.com"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.currentTarget.blur()}
          aria-label="发送邮件到 kuhung@foxmail.com"
        >
          <IconMail fontSize={16} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>
        <a rel="noreferrer" className="cursor-pointer focus:outline-none" onClick={() => navigate('/friend-links')} aria-label="查看友链">
          <RiLinksLine fontSize={14} className="text-gray-500 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-indigo-400" />
        </a>

        <button className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" type="button">
          @ Qwerty Learner
        </button>

        <span className="select-none rounded bg-slate-200 px-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          Build <span className="select-all">{LATEST_COMMIT_HASH}</span>
        </span>
      </footer>
    </>
  )
}

export default Footer
