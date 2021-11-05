import { useState, useEffect } from "react";

export const Info = () => {

  const [ minutes, setMinutes ] = useState(30);
  const [ seconds, setSeconds ] = useState(0);

  const formatTime = (time) => {
    const formattedData = time.toString();
    return (formattedData.length === 2) ? formattedData : `0${formattedData}`;
  };

  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
    }, 1000);
    return ()=> clearInterval(myInterval);
  });

  return (
    <>
      <p className="body-text uppercase">Регистрация ООО, ЗАО, НКО</p>
      <p className="body-text small-size">В Москве и Московской Области</p>
      <p className="body-text guarantee">Регистрация ООО с Гарантией</p>
      <div className="body-text-offer small-size">
        <p>
          Отправьте заявку в течение пяти минут, <br/> 
          и получите месяц бесплатного юридического сопровождения!
        </p>
        <p className="offer-time">
          Оставшееся время: 
          <span className="timer">
            {(minutes === 0 && seconds === 0) 
              ? `  Время вышло!`
              : `  ${formatTime(minutes)}:${formatTime(seconds)}`}
          </span>
        </p>
      </div>
    </>
  );
};