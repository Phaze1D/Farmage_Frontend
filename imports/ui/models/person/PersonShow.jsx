import React from 'react';
import MShow from '../../structure/mshow/MShow';
import MTabs from '../../structure/mtabs/MTabs';

import {factoryPerson} from './faker/factoryPerson';


export default class PersonShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {tabValue: 0}

    this.handleTabChange = this.handleTabChange.bind(this)

    this.person = factoryPerson();
  }

  handleTabChange(event, value){
    this.setState({tabValue: value})
  }

  render(){
    if(this.person.lastName === undefined) this.person.lastName = '';
    const title = `${this.person.firstName} ${this.person.lastName}`

    return(
      <MShow
        onFabClick={this.props.onFabClick}
        title={title}
        subTitle={this.person.company}
        hasFAB={true}
        hasAvatar={true}
        avatarURL={this.person.avatarURL}
        onRequestChange={this.props.onRequestChange}
        open={this.props.open}>

        <MTabs
          onTabChange={this.handleTabChange}
          value={this.state.tabValue}
          tabs={['Summary', 'Reports', 'Analyzes']}/>

      </MShow>
    )
  }
}
