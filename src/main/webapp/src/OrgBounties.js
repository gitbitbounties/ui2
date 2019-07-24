import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import AddressList from './AddressList'
import GenerateAddress from "./GenerateAddress";
import IssueTable from './IssueTable'

class OrgBounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            balance: 0,
            addresses: [111, 222],
            activeBounties: "",
            completedBounties: ""
        }
    }

    // On startup, fetch user balance, etc.
    componentDidMount() {
        this.getInfo();
    }

    getInfo =() => {
        let request = fetch("fetchURL");
        request.then(res => res.json())
            .then(resText => {
                    this.setState({
                        balance: resText.balance,
                        addresses: resText.addresses,
                        activeBounties: resText.activeBounties,
                        completedBounties: resText.completedBounties
                    });
                }
            ).catch(error => {
                alert("Data did not load properly");
        });
    };

    render() {
        return (
            <div className="field">
                <h1> Balance </h1>
                <p> {this.state.balance} sat </p>
                <Divider />
                <br />
                <h1> Deposit </h1>
                <GenerateAddress />
                <AddressList addresses={this.state.addresses}/>
                <Divider />
                <br />
                <IssueTable />
            </div>
        );
    }
}

export default OrgBounties;