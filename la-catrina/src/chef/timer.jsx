// import { useEffect, useState } from 'react';
// import './chef.scss';

// const Timer = (stateOrder) => {
//     const [diff, setDiff] = useState(null);
//     const [initial, setInitial] = useState(null);

//     const time = () => {
//         setDiff(new Date(+new Date() - initial))
//     };

//     const startTime = () => { setInitial(+new Date()) }

//     useEffect(() => {
//         if (initial) {
//             requestAnimationFrame(time);
//         }
//     }, [initial]);

//     useEffect(() => {
//         if (diff) {
//             requestAnimationFrame(time);
//         }
//     }, [diff]);
//     //console.log(stateOrder.stateOrder, 'estado orden');
//     return (
//         <div className='timer' /* onClick={startTime} */>
//             {stateOrder === 'En preparación' ? {startTime} : ''}
//             <h1>{timeFormat(diff)} </h1>
//         </div>
//     );

// }

// const timeFormat = (date) => {
//     if (!date) return '00:00';

//     let mm = date.getUTCMinutes();
//     let ss = date.getSeconds();

//     mm = mm < 10 ? '0' + mm : mm;
//     ss = ss < 10 ? '0' + ss : ss;

//     return `${mm}:${ss}`;

// }

// export default Timer;