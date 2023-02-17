import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bugAdded, getUnresolvedBugs, bugResolved } from '../store/bugs'

class Bugs extends Component {

componentDidMount() {

    const { bugAdded}=this.props;

    bugAdded({ description: "Bug1" });
    bugAdded({ description: "Bug2" });
    bugAdded({ description: "Bug3" });
}

    render() { 
        return (
            this.props.bugs?.map((bug) =>
                <ul key={bug.id}>
                    <li>{bug.description}
                        <button
                            style={{ margin: '2px' }}
                            onClick={() => this.props.bugResolved({ id: bug.id })}
                        >resolve</button>
                    </li>
                </ul>
            )
        );
    }
}


const mapStateToProps= state=>({
   // bugs:state.entities.bugss
    bugs: getUnresolvedBugs(state)
})
 
const mapDispatchToProps=dispatch=>({
    bugAdded: (description) => dispatch(bugAdded(description)),
    bugResolved: (id) => dispatch(bugResolved(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);

