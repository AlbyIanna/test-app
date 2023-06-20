import { useState } from "react";

const DURATION = 2000;
const STEPS = 100
const TIMEOUT = DURATION / STEPS;


const getId = (function getId() {
  let id = 0;
  return function increaseId() {
    return id++;
  }
})()

export function useProgressBars() {
  const [progressBars, setProgressBars] = useState({});

  const addProgressBar = () => {
    const id = getId();
    const nextStep = () => {
      setProgressBars(prevProgressBars => {
        const newProgressBars = { ...prevProgressBars };
        if (!newProgressBars[id]) {
          newProgressBars[id] = { value: 0 }
        } else {
          newProgressBars[id].value++;
        }
        if (newProgressBars[id].value + 1 < STEPS) {
          setTimeout(nextStep, TIMEOUT)
        }
        return newProgressBars;
      })
    };
    nextStep()
  }
  console.log(progressBars[0]?.value);
  return [Object.values(progressBars), addProgressBar];
}
