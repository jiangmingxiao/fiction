
import {testTime} from "./TestTime";
import * as _ from 'lodash';

class Unique {
    @testTime
    public unique(array: Array<any>): Array<any> {
        if (!(array instanceof Array) || array.length === 0) {
            return [];
        }
        const set = new Set(array);
        return Array.from(set);
    }

    @testTime
    public unique1(array: Array<any>): Array<any> {
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
    public unique2(array: Array<any>): Array<any> {
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
    public unique3(array: Array<any>): Array<any> {
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

    @testTime
    public uniqueLodash(array: Array<any>): Array<any> {
        return _.uniq(array);
    }
}

export default new Unique()
