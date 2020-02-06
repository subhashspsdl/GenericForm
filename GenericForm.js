import React from 'react';
import Formsy from 'formsy-react';
import InputElement from './InputElement';
import './GenericForm.scss';

 export default class GenericForm extends React.Component{
     
     constructor(props){
         super(props);
         this.state = {
            data:[],
            isSubmitted:false
         }
         this.onChange = this.onChange.bind(this);
         this.changeDataOnElementStateChange = this.changeDataOnElementStateChange.bind(this);
         this.notifyErrors = this.notifyErrors.bind(this);
     }

     componentDidMount(){
         this.setState({
             data:this.props.data
         })
     }

    onChange (name,value,idx,type){
        let data = this.state.data;
        if( type === "radio" ){
            data = this.changeDataOnElementStateChange(name,value,idx,"radio");
        }
        else if( type === "checkbox"){
            data = this.changeDataOnElementStateChange(name,value,idx,"checkbox");
        }
        else{

        }
        this.setState({
            [name]:value,
            data:data
        })
    }

    changeDataOnElementStateChange(name,value,idx,type){
        let formFields = this.props.data;
        let conditions = this.props.data[idx].conditionals;
        conditions.map((condition)=>{
            if(condition.value == value){
                condition.modifications.map((changes)=>{
                    formFields = formFields.map((formField,idx)=>{
                        if(formField.name === changes.name){
                            return changes.formField;
                        }
                        return formField;
                    })
                });
                formFields = [...formFields,...condition.addElements]
            }

        })
        return formFields
    }

    submit(model){
        
        console.log(model);
    }

    notifyErrors(e){
        console.log("err")
        this.setState({
            isSubmitted:true
        })

    }
    invalid(){
        
    }

     render(){
         return(
             <div className="generic-form-container">
                <div className="genric-form-header">
                    <img src={this.props.headerImage} alt="InsImage" />

                </div>
                <Formsy onValidSubmit={this.submit} onInvalidSubmit={this.notifyErrors} onInvalid={this.invalid} autoComplete="off">
                    {this.state.data.map((formData,idx)=>{
                        return <InputElement 
                                    key={idx}
                                    data={formData}
                                    idx = {idx}
                                    name={formData.name}
                                    validations={formData.validations}
                                    validationErrors={formData.validationErrors}
                                    onChange = {this.onChange}
                                    isSubmitted = {this.state.isSubmitted}
                                />
                    })}
                    <input type="submit" />
                </Formsy>
             </div>
             
         )
     }
 }