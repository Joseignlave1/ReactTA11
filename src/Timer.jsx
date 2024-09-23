const { useState, useEffect } = require("react")

const Timer = () => {
    const [timer, setTimer] = useState(0);


       useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000)

        return () => {
            //Cuando el componente se ejecuta por segunda vez se limpia el intervalo, esto se hace para que el temporizador no se sigue ejecutando cuando el se siga ejecutando siempre en segundo plano
            // y se ejecute solo cuando el componente esta en la UI
            clearInterval(interval)
        }
       },[]);
    return (
        <p>{timer}</p>
    )
}

export default Timer;