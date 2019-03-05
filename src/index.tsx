import * as React from 'react';
import * as ReactDOM from 'react-dom';

const testTime = function (target, name, descriptor) {
    const oldFn = descriptor.value;
    descriptor.value = function () {
        const time1 = Date.now();
        const returnValue = oldFn.apply(null, arguments);
        //oldFn(arguments[0])
        const time2 = Date.now();
        console.log("总耗时========>", time2 - time1);
        console.log("结果为========>", returnValue);
        return returnValue
    }
    return descriptor;


}


class App extends React.PureComponent<any, any> {
    private array: Array<any> = [];

    constructor(props) {
        super(props);
        for (let i = 0; i < 100000; i++) {
            this.array.push(this.getRandomNum(0, 20));
        }
        console.log(this.array);
        this.unique(this.array);
        this.unique1(this.array);
        this.unique2(this.array);
        this.unique3(this.array);
    }

    getRandomNum(min: number, max: number): number {
        var range = max - min;
        var rand = Math.random();
        return (min + Math.round(rand * range));
    }


    @testTime
    private unique(array: Array<any>): Array<any> {
        if (!(array instanceof Array) || array.length === 0) {
            return [];
        }
        const set = new Set(array);
        return Array.from(set);
    }

    @testTime
    private unique1(array: Array<any>): Array<any> {
        if (!(array instanceof Array) || array.length === 0) {
            return [];
        }
        const tempArray: Array<any> = [];
        array.forEach((item) => {
            if (tempArray.indexOf(item) === -1) {
                tempArray.push(item);
            }
        })
        return tempArray;
    }

    @testTime
    private unique2(array: Array<any>): Array<any> {
        if (!(array instanceof Array) || array.length === 0) {
            return [];
        }
        const tempArray: Array<any> = [];
        for (let i = 0; i < array.length; i++) {
            let isUnique = true;
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                tempArray.push(array[i]);
            }
        }
        return tempArray;
    }

    @testTime
    private unique3(array: Array<any>): Array<any> {
        if (!(array instanceof Array) || array.length === 0) {
            return [];
        }
        const tempArray: Array<any> = [];
        array = array.sort();
        array.forEach((item, index) => {
            if (index + 1 < array.length) {
                if (item !== array[index + 1]) {
                    tempArray.push(item);
                }
            } else {
                tempArray.push(item);
            }
        })
        return tempArray;
    }

    render() {
        return (<div>
            test
        </div>)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));