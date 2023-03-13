import { useRef, useEffect, useState } from 'react';

const WIDTH = 400;
const HEIGHT = 200;

const draw = (analyzer: AnalyserNode, canvasContext: CanvasRenderingContext2D) => {
  const dataArray = new Uint8Array(analyzer.frequencyBinCount);
  analyzer.getByteFrequencyData(dataArray);
  canvasContext.clearRect(0, 0, WIDTH, HEIGHT);
  canvasContext.fillStyle = 'rgb(0, 255, 0)';
  canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
  canvasContext.beginPath();
  const sliceWidth = WIDTH * 1.0 / analyzer.frequencyBinCount;
  let x = 0;
  for (let i = 0; i < analyzer.frequencyBinCount; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * HEIGHT / 2;
    if (i === 0) {
      canvasContext.moveTo(x, y);
    } else {
      canvasContext.lineTo(x, y);
    }
    x += sliceWidth;
  }
  canvasContext.lineTo(WIDTH, HEIGHT / 2);
  canvasContext.stroke();
  requestAnimationFrame(() => draw(analyzer, canvasContext));
};

export const Main = () => {
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const audioContext = new AudioContext();
    const analyzer = audioContext.createAnalyser();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyzer);
      analyzer.connect(audioContext.destination);

      const canvas = canvasRef.current;
      const canvasContext = canvas?.getContext('2d');
      if (canvasContext) {
        setCanvasContext(canvasContext);
        canvasContext.fillStyle = 'rgb(0, 0, 0)';
        canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
        draw(analyzer, canvasContext);
      }
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
