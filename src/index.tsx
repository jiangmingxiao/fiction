import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.PureComponent<any, any> {
    render() {
        return(<div>
            1234
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));