import styled from 'styled-components'
import { PlayCircleFilled, VolumeUp, VolumeOff, PauseCircleFilled } from '@material-ui/icons';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 30px;
  background: #333;
`

export const Video = styled.div`
  width: 640px;
  height: 360px;
  padding: 10px;
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
  background-color: #303030;
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
  background-color: #666;
  width: 640px;
  height: 360px;
`

export const Images = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 2px;
`
