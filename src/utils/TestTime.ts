const testTime = function (target, name, descriptor) {
    const oldFn = descriptor.value;
    descriptor.value = function () {
        const time1 = Date.now();
        const returnValue = oldFn.apply(null, arguments);
        const time2 = Date.now();
        console.log("方法==========>",name);
        console.log("总耗时========>", time2 - time1);
        console.log("结果为========>", returnValue);
        return returnValue
    }
    return descriptor;


}

export {
    testTime
}