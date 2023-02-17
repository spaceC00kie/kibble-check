type Props = {
  href?: string
  icon: React.ReactNode
  title: string
  onClick?: () => void
}

export const SocialLink: React.FC<Props> = ({ href, icon, title, onClick }) => {
  return (
    <>
      {href ? (
        <a
          onClick={onClick}
          title={title}
          className="color-shift grid h-8 w-8 place-content-center rounded-full border border-yellow-600 text-yellow-50 hover:border-yellow-400"
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {icon}
        </a>
      ) : (
        <button
          onClick={onClick}
          title={title}
          className="color-shift grid h-8 w-8 place-content-center rounded-full border border-yellow-600 text-yellow-50 hover:border-yellow-400"
        >
          {icon}
        </button>
      )}
    </>
  )
}
