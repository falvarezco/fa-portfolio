type ButtonProps = {
  label: string,
  onClick: () => void ,
}

const BUTTON_CLASSES = 'border border-yellow-300 py-[10px] px-[23px] rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-fullBlack transition ease-in-out duration-300'

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  onClick,
}) => {
  return <button className={BUTTON_CLASSES} onClick={onClick}>{label}</button>
}

export default Button;