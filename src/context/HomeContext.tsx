import { createContext, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

interface HomeContextData {
    videoRef: MutableRefObject<HTMLVideoElement>;
    canvasRef: MutableRefObject<HTMLCanvasElement>;
    divRef: MutableRefObject<HTMLDivElement>;
    video: string;
    isPlaying: boolean;
    isMute: boolean;
    volume: number;
    currentTime: number;
    totalTime: number;
    images: string[];
    toonglePlayPause: ()=>void;
    configMute: ()=> void;
    configVolume: (volume: number)=> void;
    configCurrentTime: (time: number) => void;
}

export const HomeContext = createContext({} as HomeContextData);

interface HomeContextProviderProps {
    children: ReactNode;
}

export const HomeContextProvider = ({children}:HomeContextProviderProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const [video, setVideo] = useState<string>("");
    const [volume, setVolume] = useState<number>(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(1);
    const [lastVolume, setLastVolume] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isMute, setIsMute] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([]);
    //const [time, setTime] = useState<number>(0);
    
    var updatedImages = Array<string>();
    var cont = 0;

    useEffect(()=>{
        configVideo("./videos/video.mp4");
    }, []);

    /*useEffect(()=> {
        setTimeout(() => {
            setTime(time - 1);
            setImages(updatedImages);
            alert(updatedImages.length);
        }, 3000);
    }, [time]);*/

    const draw = () => {
        const playingVideo = videoRef.current;
        if (playingVideo.paused || playingVideo.ended) return;

        const x = 0;
        const y = 0;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.drawImage(playingVideo, x, y, canvas.width, canvas.height);
        const imageData = context.getImageData(x, y, canvas.width, canvas.height);
        const data = imageData.data;
        for (var i = 0; i < data.length; i+= 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];

            const media = (red + green + blue)/3;
            data[i] = media;
            data[i + 1] = media;
            data[i + 2] = media;
        }
        context.putImageData(imageData, x, y);

        if (cont++ % 30 == 0) {
            const imageUrl = canvas.toDataURL("image/png");
            updatedImages = [...updatedImages, imageUrl];
            const image = new Image();
            image.src = imageUrl;
            divRef.current.appendChild(image);
        }
        requestAnimationFrame(draw);
    }

    useEffect(()=>{
        
    }, [video]);

    const configVideo = (videoUrl:string) => {
        setVideo(videoUrl);

        const video = videoRef.current;
        
        video.onloadedmetadata = () => {
            setTotalTime(video.duration);
        }

        video.ontimeupdate = () => {
            setCurrentTime(video.currentTime);
        }
    }

    const toonglePlayPause = () => {
        const updatedIsPlaying = !isPlaying;
        if (isPlaying) {
            pause();
        }
        else {
            play();
        }
        setIsPlaying(updatedIsPlaying);
    }

    const configMute = () => {
        const updatedMute = !isMute;
        const video = videoRef.current;
        video.muted = updatedMute;
        setIsMute(updatedMute);
        if (updatedMute) {
            setLastVolume(volume);
            video.volume = 0;
            setVolume(0);
        }
        else {
            video.volume = lastVolume;
            setVolume(lastVolume);
        }
    }

    const configCurrentTime = (time: number) => {
        const video = videoRef.current;
        video.currentTime = time;
        setCurrentTime(time);
    }

    const configVolume = (value: number) => {
        const video = videoRef.current;
        video.volume = value;
        setLastVolume(volume);
        setVolume(value);
        if (value === 0) {
            video.muted = true;
            setIsMute(true);

        }
        else {
            video.muted = false;
            setIsMute(false);
        }
    }

    const play = ()=> {
        const video = videoRef.current;
        video.play();
        draw();
    }

    const pause = () => {
        const video = videoRef.current;
        video.pause();
    }

    return (
        <HomeContext.Provider value={
            {
                videoRef,
                canvasRef,
                divRef,
                video,
                isPlaying,
                isMute,
                volume,
                currentTime,
                totalTime,
                images,
                toonglePlayPause,
                configMute,
                configVolume,
                configCurrentTime
            }
        }>
        {
            children
        }
        </HomeContext.Provider>
    );
}