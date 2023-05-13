import styles from './InstagramFeedBuilder.module.css'
import { useState } from "react"
import { AiOutlineLayout } from "react-icons/ai"
import { BiPlug } from 'react-icons/bi'
import { VscSymbolColor } from "react-icons/vsc"
import { LayoutEditor } from './ToolsEditor/Layout/LayoutEditor'
import { ProfileSourceEditor } from './ToolsEditor/ProfileSource/ProfileSourceEditor'
import { ColorEditor } from './ToolsEditor/Color/ColorEditor'

const toolsEditorMap: Record<string, JSX.Element> = {
  'sources': <ProfileSourceEditor/>,
  'layout': <LayoutEditor/>,
  'color': <ColorEditor/>,
}

export const InstagranFeeTools = () => {
  const [selectedTool, setSelectedTool] = useState('sources')

  return (
    <>
      <div className={styles.tools_container}>
        <div className={styles.tools_menu}>
          <div 
            className={`${styles.tools_menu_item} ${selectedTool === 'sources' ? styles.selected : ""}`}
            onClick={() => setSelectedTool('sources')}
          >
            <BiPlug size={20}/>
            <p>Sources</p>
          </div>
          <div 
            className={`${styles.tools_menu_item} ${selectedTool === 'layout' ? styles.selected : ""}`}
            onClick={() => setSelectedTool('layout')}
          >
            <AiOutlineLayout size={20}/>
            <p>Layout</p>
          </div>
          <div 
            className={`${styles.tools_menu_item} ${selectedTool === 'color' ? styles.selected : ""}`}
            onClick={() => setSelectedTool('color')}
          >
            <VscSymbolColor size={20}/>
            <p>Color</p>
          </div>
        </div>
        <div className={styles.editor_container}>
          {toolsEditorMap[selectedTool]}
        </div>
      </div>
    </>
  )
}