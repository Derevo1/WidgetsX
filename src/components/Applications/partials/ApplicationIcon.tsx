import { ReactElement } from "react"
import { IconType } from "react-icons"
import { BsInstagram, BsCameraVideo } from "react-icons/bs"

interface IAppIconProps {
  type: string
  className: string
  size: number
}

function getApplicationIcon(type: string){
  const iconsMap: Record<string, (className: string, size: number) => ReactElement<IconType>> = {
    'Instagram': (className, size) => <BsInstagram className={className} size={size}/>,
    'Video': (className, size) => <BsCameraVideo className={className} size={size} />
  }

  return iconsMap[type]
}

export const ApplicationIcon = ({ type, className, size }: IAppIconProps) => {
  const renderIcon = getApplicationIcon(type)

  return (
    <>
      {renderIcon(className, size)}
    </>
  )
}