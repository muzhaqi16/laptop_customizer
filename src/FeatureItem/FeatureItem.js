import React, {Component} from 'react';
   
export default class FeatureItem extends Component{
    render(){
        const key= this.props.feature;
        const item=this.props.item;
        return <li key={key} className="feature__item">
                <div className={this.props.featureClass}
                  
                  onClick={e => this.props.handleUpdate(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
    }
}