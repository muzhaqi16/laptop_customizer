import React, {Component} from 'react';
import Feature from '../Feature/Feature';

export default class MainForm extends Component{

    render(){
        const features = Object.keys(this.props.features)
        .map(key=> <Feature item={key} key={key} selected={this.props.selected} features={this.props.features} handleUpdate={this.props.handleUpdateFeature}/> );
        return (<section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
        )}
}