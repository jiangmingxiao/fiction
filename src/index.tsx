import * as React from "react";
import * as ReactDOM from "react-dom";
import unique from "./utils/Unique";


class App extends React.PureComponent<any, any> {
    private array: Array<any> = [];

    constructor(props) {
        super(props);
        for (let i = 0; i < 100000; i++) {
            this.array.push(this.getRandomNum(0, 20));
        }
        console.log(this.array);
        unique.unique(this.array);
        unique.unique1(this.array);
        unique.unique2(this.array);
        unique.unique3(this.array);
        //unique.uniqueLodash(this.array);
    }

    getRandomNum(min: number, max: number): number {
        var range = max - min;
        var rand = Math.random();
        return (min + Math.round(rand * range));
    }

    render() {
        return (<div>
            test
        </div>)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));