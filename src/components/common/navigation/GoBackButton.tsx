import { useRouter } from 'next/router'
import { IconArrow } from '../Icons'

const GoBackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-neutral-darkGrey hover:opacity-80 dark:text-neutral-white"
      onClick={goBack}
    >
      <span>
        <i>
          <IconArrow />
        </i>
      </span>
      <span className="text-heading-4">Go back</span>
    </button>
  )
}

export default GoBackButton
