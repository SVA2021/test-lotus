import {FC, useEffect, useState} from 'react';
import {getTimeFrom2Minute} from '../utils';
import './Timer.scss';

interface TimerProps {
  initialTime: number
  handleEndTime: () => void
}

export const Timer: FC<TimerProps> = ({initialTime, handleEndTime}) => {

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 1) {
      setTimeout(() => setTime((v) => 120), 1000)
      handleEndTime();
    } else {
      setTimeout(() => setTime((v) => time - 1), 1000)
    }
  }, [time, handleEndTime]);

  return (
    <div className='timer' >
      {getTimeFrom2Minute(time)}
    </div>
  );
};