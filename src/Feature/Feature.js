import React, {Component} from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
   
   export default class Feature extends Component{
       render(){
        const key = this.props.item;

        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <FeatureItem key={index} feature={key} featureClass={featureClass} item={item} handleUpdate={this.props.handleUpdate}/>
        });

        return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                  {options}
                </ul>
              </div> 
       }
   }
