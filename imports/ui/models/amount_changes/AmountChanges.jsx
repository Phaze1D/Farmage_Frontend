import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {orangeA200} from 'material-ui/styles/colors';

import TextArea from '../../structure/textarea/TextArea';



const focusColor ={
  color: orangeA200,
  borderColor: orangeA200
};




export default class AmountChanges extends React.Component{
  constructor(props){
    super(props);
    this.state = {amount: '0'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    value = event.target.value.length > 0 ? event.target.value : 0
    this.setState({amount: value})
  }


  render(){
    return null;
  }
}
