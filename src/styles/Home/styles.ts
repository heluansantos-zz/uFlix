import styled from 'styled-components'
import { PlayCircleFilled, VolumeUp, VolumeOff, PauseCircleFilled } from '@material-ui/icons';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
  background: #282828;
`

export const VideoTitle = styled.h3`
  color: #fff;
  margin-left: 10px;
  margin-top: -1px;
`

export const TitleVideo = styled.h3`
  color: #fff;
  margin-left: 10px;
  margin-top: 13px;
  margin-left: 10px;
`

export const VideoDesc = styled.h5`
  color: #ddd;
  margin-left: 10px;
  margin-top: -1px;
`

export const VideoThubnail = styled.img`
  height: 100px;
  width: 100px;
`

export const InfoVideo = styled.div`
  flex-direction: column;
`

export const ContainerExt = styled.div`
flex-direction: column;
position: absolute;
right: 60px;
top: 60px;
border-radius: 5px;
width: 360px;
height: 90%;
`

export const VideoItem = styled.a`
display: flex;
height: 103px;
border-radius: 5px;
width: 350px;
padding: 1px;
border: 1px solid red;
margin-bottom: 8px;
flex-direction: row;
justify-content: flex-start;
`

export const Title = styled.h2`
  color: red;
  margin-left: 10px;
  margin-top: -10px;
`

export const Video = styled.div`
  width: 800px;
  height: 560px;
`

export const Conteudo = styled.video`
  margin: 0;
  width: 100%;
  height: 100%;
`

export const Controls = styled.div`
  padding: 0;
  margin: 0;
  background-color: tomato;
  height: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export const PlayControls = styled.div`
  display: flex;
  align-items: center;
  background-color: #282828;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  transform: translateY(-10%);
`

export const TimeTotal = styled.div`
  margin-left: 10px;
`

export const PlayIcon = styled(PlayCircleFilled)`
  margin-left: 10px;
  color: red;
  margin: 10px;
`

export const PauseIcon = styled(PauseCircleFilled)`
  margin-left: 10px;
  color: red;
  margin: 10px;
`

export const VolumeUpIcon = styled(VolumeUp)`
  margin-left: 10px;
  color: red;
  margin: 10px;
`

export const VolumeOffIcon = styled(VolumeOff)`
  margin-left: 10px;
  color: red;
  margin: 10px;
`

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #303030;
  height: 10px;
  transform: translateY(-35%);
`

export const Time = styled.input`
  margin: 0;
  width: 95%;
  appearance: none;
  -webkit-appearance: none;
  background-color: #303030;
`

export const VolumeControl = styled.input.attrs({
  type: "range",
  min: "0",
  max: "1",
  step: "0.01",
})`
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background-color: red;
  height: 10px;
  margin: 10px;
`

export const Canvas = styled.canvas`
  background-color: #ddd;
  width: 800px;
  height: 560px;
  color: red;
`

export const Images = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 2px;
`
