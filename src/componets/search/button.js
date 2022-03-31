export const Button = ({ type, text, classNames }) => {
  return (
    <button type={type} className={classNames}>
      {text}
    </button>
  )
}
