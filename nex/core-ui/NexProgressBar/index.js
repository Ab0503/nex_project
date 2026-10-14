import React, { useState, useEffect, useRef } from 'react';
import { Circle, Line } from 'rc-progress';

const NexProgressBar = ({
  shape, 
  strokeWidth,
  strokeColor,
  trailColor,
  trailWidth,
  intervalSpeed,
  threshold,
  percent, 
  percentTextStyle, 
}) => {
  const [currentPercent, setCurrentPercent] = useState(percent); 
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!intervalRef.current) {
              intervalRef.current = setInterval(() => {
                setCurrentPercent((prev) => {
                  if (prev >= percent) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null; 
                    return percent;
                  }
                  return prev + 1;
                });
              }, intervalSpeed); 
            }
          } else {
            clearInterval(intervalRef.current); 
            intervalRef.current = null; 
            setCurrentPercent(0); 
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
      clearInterval(intervalRef.current); 
    };
  }, [intervalSpeed, threshold, percent]);

  
  useEffect(() => {
    setCurrentPercent(percent);
  }, [percent]);

  const renderProgressShape = () => {
    if (shape === 'Circle') {
      return (
        <div style={{ position: 'relative', width: '100%' }}>
          <Circle
            percent={currentPercent}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            trailColor={trailColor}
            trailWidth={trailWidth}
            style={{
              width: '100%', 
            }}
          />
          <p
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              ...percentTextStyle, 
            }}
          >
            {currentPercent}%
          </p>
        </div>
      );
    } else if (shape === 'Line') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <Line
              percent={currentPercent}
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              trailColor={trailColor}
              trailWidth={trailWidth}
              style={{
                width: '100%', 
              }}
            />
          </div>
          <p
            style={{
              marginLeft: '10px', 
              ...percentTextStyle, 
            }}
          >
            {currentPercent}%
          </p>
        </div>
      );
    }
    return null; 
  };

  return (
    <div ref={progressBarRef} style={{ width: '100%' }}>
      {renderProgressShape()}
    </div>
  );
};


NexProgressBar.defaultProps = {
  shape: 'Circle', 
  strokeWidth: 2,
  strokeColor: '#4caf50',
  trailColor: '#e0e0e0',
  trailWidth: 2,
  intervalSpeed: 30, 
  threshold: 0.5, 
  percent: 95, 
  percentTextStyle: {
    fontSize: '18px', 
    fontWeight: 'bold', 
    color: '#4caf50', 
  },
};

export default NexProgressBar;
