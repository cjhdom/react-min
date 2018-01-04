import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Test extends Component {
    render() {

        return (
            <div>
                <Link to={'/Home'}>홈으로</Link>
            </div>
        );
    }
}

export default Test;