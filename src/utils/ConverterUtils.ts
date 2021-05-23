export const convertTimeToString = (time: number) => {
    const minutes = Math.trunc(time / 60);
    const seconds = Math.trunc(time % 60);
    return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
} 