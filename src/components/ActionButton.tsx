import { XLg, List } from 'react-bootstrap-icons';

const ACTION_BTN_CLASSES = 'w-[50px] h-[50px] bg-zinc-900 rounded-full flex items-center justify-center ease-in-out duration-300 delay-200';
const ACTION_ICON_CLASSES = 'text-neutral-100 hover:text-yellow-300 ease-in-out duration-300 delay-200';

type ActionButtonType = {
  open: boolean;
  onStateToggle: () => any,
}

const ActionButton: React.FunctionComponent<ActionButtonType> = ({
  open,
  onStateToggle,
}) => {
  return (
    <button className={ACTION_BTN_CLASSES}>
      {open ? 
        <XLg size={27} className={ACTION_ICON_CLASSES} onClick={onStateToggle}/> :
        <List size={27} className={ACTION_ICON_CLASSES} onClick={onStateToggle}/>
      }
    </button>
  )
}

export default ActionButton;