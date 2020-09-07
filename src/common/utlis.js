function debounce(func, delay = 50) {
    let timer = null;
    return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}


function throttle(func, delay = 50) {
    let timer = null;
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay);
        }

    }
}

export {
    debounce,
    throttle
}