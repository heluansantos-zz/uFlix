import { useContext } from 'react'
import { HomeContext } from '../context/HomeContext';
import styles from '../styles/Home.module.css';
import {convertTimeToString} from '../utils/ConverterUtils';

import {
 Container,
 Video,
 Canvas,
 Conteudo,
 Controls,
 PlayControls,
 PlayIcon,
 PauseIcon,
 VolumeOffIcon,
 VolumeUpIcon,
 Time,
 TimeContainer,
 TimeTotal,
 Images,
 VolumeControl
} from '../styles/Home/styles'

export default function Home() {
  const {
    videoRef,
    canvasRef,
    divRef,
    video,
    isPlaying,
    isMute,
    volume,
    currentTime,
    totalTime,
    toonglePlayPause,
    configMute,
    configVolume,
    configCurrentTime
  } = useContext(HomeContext);
  return (
    <Container>
        <Canvas className={styles.canvas} ref={canvasRef}></Canvas>
        <Video>
          <video className={styles.conteudo} src={video} ref={videoRef} hidden></video>
           
          <TimeContainer>
            <Time
              className={styles.time}
              type="range"
              min={0}
              max={totalTime}
              value={currentTime}
              onChange={e => configCurrentTime(Number(e.target.value))}
              />
          </TimeContainer>
          
          <PlayControls className={styles.playControls}>
                { isPlaying ?
                  <PauseIcon onClick={toonglePlayPause} />
                  :
                  <PlayIcon onClick={toonglePlayPause} />
                } 
                { isMute ?
                  <VolumeOffIcon onClick={configMute} />
                  :
                  <VolumeUpIcon onClick={configMute} />
                }
                <VolumeControl
                  value={volume}
                  onChange={e => configVolume(Number(e.target.value))}
                  >
                </VolumeControl>
                <div className={styles.timeTotal}>
                  <span>{convertTimeToString(currentTime)}</span> / <span>{convertTimeToString(totalTime)}</span>
                </div>
          </PlayControls>
          <Images className={styles.images} ref={divRef}>
          </Images>
        </Video>
    </Container>
  )
}
