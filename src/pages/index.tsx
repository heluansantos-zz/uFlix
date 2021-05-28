import { useContext, useState } from 'react'
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
 VolumeControl,
 Title,
 ContainerExt,
 VideoItem,
 VideoThubnail,
 VideoTitle,
 VideoDesc,
 InfoVideo,
} from '../styles/Home/styles'
import { ListItemAvatar } from '@material-ui/core';

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

  const listVideo = [
    {id: 0, title: 'Homen de ferro', img: "./thubnail1.png", desc: '1h:45min'},
    {id: 1, title: 'Interestelar', img: "./thubnail2.png", desc: '2h:05min'},
    {id: 2, title: 'Oblivion', img: "./thubnail3.png", desc: '1h:50min'},
    {id: 3, title: 'No limite do amanhã', img: "./thubnail4.png", desc: '2h:00min'},
    {id: 4, title: 'O livro de eli', img: "./thubnail5.jpg", desc: '1h:10min'},
  ];

  return (
    <Container>
        <Title>u F l i x</Title>
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
        <ContainerExt>
        {listVideo.map(item => (
          <VideoItem key={item.id}>
            <VideoThubnail src={item.img}/>
            <InfoVideo>
              <VideoTitle>{item.title}</VideoTitle>
              <VideoDesc>{item.desc}</VideoDesc>
            </InfoVideo>
          </VideoItem>
        ))}
        </ContainerExt>
        
    </Container>
  )
}
