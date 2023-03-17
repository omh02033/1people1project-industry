import React, { useEffect, useRef, useState } from 'react';
import { Sounds } from '@/contants';
import { Button, Hexile, Point } from '@/components';
import {
  Container,
  KitText,
  KitTextWrapper,
  Line,
  PointContainer,
  PointWrapper,
} from './style';

export const Main: React.FC = () => {
  const [bpm, setBpm] = useState<number>(200);
  const [beats, setBeats] = useState<number>(4);
  const [words, setWords] = useState<number>(4);
  const [activePoint, setActivePoint] = useState<{
    [key: string]: Array<{
      word: number;
      beat: number;
    }>;
  }>(Sounds.reduce((prev, { label }) => ({ ...prev, [label]: [] }), {}));
  const [nowPlaying, setNowPlaying] = useState<{
    word: number;
    beat: number;
  }>({ word: -1, beat: -1 });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timer>();

  const active = (label: string, beat: number, word: number) => {
    if (
      activePoint[label].findIndex(
        (points) => points.word === word && points.beat === beat
      ) === -1
    ) {
      setActivePoint((prev) => {
        if (prev[label]) {
          return {
            ...prev,
            [label]: [...prev[label], { beat, word }],
          };
        } else {
          prev[label] = [{ beat, word }];
          return prev;
        }
      });
    } else {
      setActivePoint((prev) => {
        prev[label].splice(
          prev[label].findIndex(
            (points) => points.word === word && points.beat === beat
          ),
          1
        );
        return prev;
      });
    }
  };

  useEffect(() => {
    if (isPlaying) {
      setNowPlaying({ word: 0, beat: 0 });
      timer.current = setInterval(() => {
        setNowPlaying((prev) => ({
          word:
            prev.word === words - 1 && prev.beat === beats - 1
              ? 0
              : prev.beat === beats - 1
              ? prev.word + 1
              : prev.word,
          beat:
            (prev.word === words - 1 && prev.beat === beats - 1) ||
            prev.beat === beats - 1
              ? 0
              : prev.beat + 1,
        }));
      }, (60 / bpm) * 1000);
      return () => {
        clearInterval(timer.current);
      };
    } else {
      setNowPlaying({ word: -1, beat: -1 });
      clearTimeout(timer.current);
    }
  }, [isPlaying]);

  return (
    <Container fillx filly y="center" x="center">
      <Hexile gap={3} fillx x="right" y="center">
        <KitTextWrapper y='center'>
          {Sounds.map(({ label }, idx) => (
            <KitText key={`t${idx}`}>{label}</KitText>
          ))}
        </KitTextWrapper>
        <PointContainer>
          {Sounds.map(({ label, mp3 }, idx) => (
            <PointWrapper gap={2} y='center' key={`sound${idx}`}>
              {new Array(words)
                .fill(null)
                .map((_, wordIdx) =>
                  <React.Fragment key={`box${idx}${wordIdx}`}>
                    {new Array(beats)
                      .fill(null)
                      .map((_, beatIdx) => (
                        <Point
                          active={
                            activePoint[label].findIndex(
                              (points) =>
                                points.word === wordIdx && points.beat === beatIdx
                            ) !== -1
                          }
                          mp3={mp3}
                          playing={
                            nowPlaying.word === wordIdx &&
                            nowPlaying.beat === beatIdx
                          }
                          key={`${idx}${wordIdx}${beatIdx}`}
                          onClick={() => active(label, beatIdx, wordIdx)}
                        />
                      ))}
                      <Line filly key={`line${idx}${wordIdx}`} />
                  </React.Fragment>
                )}
            </PointWrapper>
          ))}
        </PointContainer>
      </Hexile>
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        text={isPlaying ? 'STOP' : 'START'}
      />
    </Container>
  );
};
