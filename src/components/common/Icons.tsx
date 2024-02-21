export const IconArrow = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
    </svg>
  )
}

export const IconClose = ({ width = 21, height = 22 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
      />
    </svg>
  )
}

export const IconHamburger = ({ width = 25, height = 18 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
      </g>
    </svg>
  )
}
