import styles from './Illustration.module.css'
import TeamSupport from '@assets/images/sign-in/widgetsX-team-support.svg'
import TeamWeb from '@assets/images/sign-in/widgetsX-team-web.svg'
import TeamAnalytics from '@assets/images/sign-in/widgetsX-team-analytics.svg'
import TeamPresentation from '@assets/images/sign-in/widgetsX-team-presentation.svg'
import TeamConsultig from '@assets/images/sign-in/widgetsX-team-consulting.svg'
import { BrandLogo } from "../../General/BrandLogo";

export function Illustration(){  
  const getIllustrationImages = (repeat?: number) => {
    let images = [
      <div className={styles.illustration_container}>
        <div className={styles.illustration_container_items}>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamSupport}
              alt="widgetsx"
              style={{transform: 'rotate(9deg)', right: '10%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
                src={TeamWeb}
                alt="widgetsx"
                style={{transform: 'rotate(9deg)', right: '-29%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamAnalytics}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '-40%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamPresentation}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '-80%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamConsultig}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '10%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamSupport}
              alt="widgetsx"
              style={{transform: 'rotate(9deg)', right: '-40%', position: 'absolute'}}
            />
          </div>
        </div>
        <div className={styles.illustration_container_items} style={{animationName: styles.running_team_reverse}}>
        <div style={{ position: 'relative' }}>
            <img 
              src={TeamSupport}
              alt="widgetsx"
              style={{transform: 'rotate(9deg)', right: '10%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
                src={TeamWeb}
                alt="widgetsx"
                style={{transform: 'rotate(9deg)', right: '-29%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamAnalytics}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '-40%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamPresentation}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '-80%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamConsultig}
              alt="widgetsx"
              className={styles.illustration_container_item}
              style={{transform: 'rotate(9deg)', right: '10%', position: 'absolute'}}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src={TeamSupport}
              alt="widgetsx"
              style={{transform: 'rotate(9deg)', right: '-40%', position: 'absolute'}}
            />
          </div>
        </div>
      </div>
    ]

    if(repeat){
      images = new Array(repeat)
        .fill(null)
        .map((_v, _i) => images)
        .flat()
    }
    
    return images
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome_label}>
          <BrandLogo logoWidth="300px" />
        </div>
        {getIllustrationImages(Math.round(window.innerHeight / 1000))}
      </div>
    </>
  )
}