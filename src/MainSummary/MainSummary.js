import React, {Component} from 'react';
import Summary from '../Summary/Summary';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

export default class MainSummary extends Component{
    render(){
        const summary = Object.keys(this.props.selected)
          .map(key=><Summary option={key} key={key} selected={this.props.selected} />);
        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    
        return <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <SummaryTotal total={total} />
        </section>
    }
}