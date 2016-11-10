import React from 'react';
import TextField from 'material-ui/TextField';
import {orangeA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ImageCameraAlt from 'material-ui/svg-icons/image/camera-alt';
import classnames from 'classnames';

import MainPanel from '../../../structure/main_panel/MainPanel';
import TextArea from '../../../structure/textarea/TextArea';
import LToggler from '../../../structure/ltoggler/LToggler';



const focusColor = {
  color: orangeA200,
  borderColor: orangeA200
};

export default class UnitsNew extends React.Component{
  constructor(props){
    super(props);
    this.state = {tracking: true, tauto: true};
    this.handleTracking = this.handleTracking.bind(this);
  }


  handleTracking(event, isChecked){
    if(isChecked){
      this.setState({tracking: isChecked});
      setTimeout(() => {this.setState({tauto: true})}, 400);
    }else{
      this.setState({tauto: false});
      setTimeout(() => {this.setState({tracking: isChecked});}, 200);
    }
  }

  render(){
    const trClasses = classnames('row row-flex track-row', {'show-track': this.state.tracking}, {'track-auto': this.state.tauto});

    return(
      <MainPanel classes='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <TextField
                name="name"
                type="text"
                className="input-lg"
                hintText=""
                floatingLabelText="Unit Name"
                floatingLabelFocusStyle={focusColor}
                underlineFocusStyle={focusColor}
                fullWidth={true}/>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12'>
            <TextArea
              name="description"
              type="text"
              className=""
              floatingLabelText="Description"
              floatingLabelFocusStyle={focusColor}
              underlineFocusStyle={focusColor}
              fullWidth={true}
              multiLine={true}
              showCount={true}
              maxCount={512}
              rows={1} />
          </div>
        </div>

        <div className={trClasses}>
          <div className='col-xs-8 sm-p-right' style={{marginBottom: '10px' }}>
            <TextArea
              name="description"
              type="text"
              defaultValue="Initial movement"
              floatingLabelText="Movement Notes"
              floatingLabelFocusStyle={focusColor}
              underlineFocusStyle={focusColor}
              fullWidth={true}
              multiLine={true}
              showCount={true}
              maxCount={512}
              rows={1} />
          </div>

          <div className='col-xs-4 sm-p-left' style={{marginBottom: '10px' }}>
            <TextField
                name="amount"
                type="number"
                defaultValue="0"
                hintText=""
                floatingLabelText="Amount"
                floatingLabelFocusStyle={focusColor}
                underlineFocusStyle={focusColor}
                fullWidth={true}/>
          </div>
        </div>

        <LToggler
          title="Tracking"
          subTitle="Track the changes in the unit's amount"
          defaultToggled={true}
          onToggle={this.handleTracking}/>

      </MainPanel>
    )
  }
}
