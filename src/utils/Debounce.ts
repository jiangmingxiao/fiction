
 const debounceByTimer = (fn, time) => {
    let timer
    const warpperFn = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn();
        }, time);
    }
    
    return warpperFn
}

const debounceByPromise = (fn, time) => {
    // const warpperFn = () => {
    //     Promise.resolve(() => {
    //         setTimeout(()=>{
    //             fn();
    //         }, time) 
    //     })
    // }
    // return warpperFn;

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, time)
    })
    
    const warpperFn = () => {
        return promise.then(()=>{
            fn();
        })
    }
    return warpperFn;
}

export {
    debounceByTimer,
    debounceByPromise
}