import styles from './VideoBuilder.module.css'
import { AiOutlineLayout, AiOutlineVideoCamera } from 'react-icons/ai'
import { VscSymbolColor } from 'react-icons/vsc'
import { LayoutEditor } from './ToolsEditor/Layout/LayoutEditor'
import { VideoEditor } from './ToolsEditor/Video/VideoEditor'
import { ColorEditor } from './ToolsEditor/Color/ColorEditor'
import { useState } from 'react'

const toolsEditorMap: Record<string, JSX.Element> = {
  'layout': <LayoutEditor/>,
  'video': <VideoEditor/>,
  'color': <ColorEditor/>,
}

export const VideoBuilderTools = () => {
  const [selectedTool, setSelectedTool] = useState('layout')

  return (
    <>
      <div className={styles.tools_container}>
        <div className={styles.tools_menu}>
          <div 
            className={`${styles.tools_menu_item} ${selectedTool === 'layout' ? styles.selected : ""}`}
            onClick={() => setSelectedTool('layout')}
          >
            <AiOutlineLayout size={20}/>
            <p>Layout</p>
          </div>
          <div 
            className={`${styles.tools_menu_item} ${selectedTool === 'video' ? styles.selected : ""}`}
            onClick={() => setSelectedTool('video')}
          >
            <AiOutlineVideoCamera size={20}/>
            <p>Video</p>
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