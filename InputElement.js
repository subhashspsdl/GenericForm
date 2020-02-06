import React from 'react';
import { withFormsy } from 'formsy-react';
import Select from 'react-select';
import './GenericForm.scss';
import * as Formsy from '../../EventPagesData/form_data/validator'


class InputElement extends React.Component{

    constructor(props){
        super(props);
        this.generateTextElement = this.generateTextElement.bind(this);
        this.generateSelectElement = this.generateSelectElement.bind(this);
        this.generateFileElement = this.generateFileElement.bind(this);
        this.generateRadioContent = this.generateRadioContent.bind(this);
        this.generateCheckboxContent = this.generateCheckboxContent.bind(this);
        this.onTextElementChange = this.onTextElementChange.bind(this);
        this.onSelectElementChange = this.onSelectElementChange.bind(this);
        this.onFileElementChange = this.onFileElementChange.bind(this);
        this.onCheckboxElementChange = this.onCheckboxElementChange.bind(this);
    }

    componentDidMount(){
    }

    generateTextElement (){
        console.log(this.props.isSubmitted);
        return <div className="text-input-container">
                    <label>{this.props.data.label}</label>
                    <input type={this.props.data.type} name={this.props.data.name} className="text-input" onChange={this.onTextElementChange.bind(this)} value = {this.props.getValue()} ></input>
                    <span className="error-msg">{this.props.isSubmitted && this.props.getErrorMessage()}</span>
        </div>
    }

    generateSelectElement (){
        let options = this.props.data.options.map((option)=>{
            return { value:option, label:option }
        });
        return <div className="select-input-container">
                    <label>{this.props.data.label}</label>
                    <Select options={options} name={this.props.data.name}  onChange={this.onSelectElementChange.bind(this,this.props.data.name)}></Select>
                    <span className="error-msg">{this.props.isSubmitted && this.props.getErrorMessage()}</span>
        </div>
    }

    generateFileElement (){
        return <div className="file-input-container">
                    <label>{this.props.data.label}</label>
                    <input type="file" name={this.props.data.name} onChange={this.onFileElementChange.bind(this)}></input>
                    <span className="error-msg">{this.props.isSubmitted && this.props.getErrorMessage()}</span>
        </div>
    }

    generateRadioContent (){
        return <div className="radio-input-container">
                <label>{this.props.data.label}</label>
                {
                    this.props.data.radioOptions.map((radioOption)=>{
                        return <div><input type="radio" name={this.props.data.name} onChange={this.onRadioElementChange.bind(this)} value={radioOption}
                         defaultChecked={ radioOption == this.props.data.defaultChecked?true:false} />{radioOption}</div>
                    })
                }
                <span className="error-msg">{this.props.isSubmitted && this.props.getErrorMessage()}</span>
        </div>
    }

    generateCheckboxContent (){
        return <div className="checkbox-input-container">
                    <input type="checkbox" name={this.props.data.name} onChange={this.onCheckboxElementChange}  />{this.props.data.checkboxContent}

        </div>
    }

    onTextElementChange (event){
        this.props.setValue(event.target.value);
        this.props.onChange(event.target.name,event.target.value,"text");
    }

    onSelectElementChange (name,event){
        this.props.setValue(event.value);
        this.props.onChange(name,event.value);
    }

    onFileElementChange (event){
        this.props.setValue(event.target.files[0])

    }

    onRadioElementChange(event){
        this.props.setValue(event.target.value);
        this.props.onChange(event.target.name,event.target.value,this.props.idx,"radio")

    }

    onCheckboxElementChange(event){
        this.props.setValue(event.target.checked);
        this.props.onChange(event.target.name,event.target.checked,"checkbox");
    }

    render(){

        let input = '';
        switch(this.props.data.type){
            case 'text':
            case 'date':
            case 'email':
                input = this.generateTextElement();
                break;
            case 'select':
                input = this.generateSelectElement();
                break;
            case 'file':
                input = this.generateFileElement();
                break;
            case 'radio':
                input = this.generateRadioContent();
                break;
            case 'checkbox':
                input = this.generateCheckboxContent();
                break;
        }
        return input;
    }
}

export default withFormsy(InputElement);