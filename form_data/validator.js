import * as Formsy from 'formsy-react';

Formsy.addValidationRule('doesExist', function (values, value) {
  return value === "" ? false : true
});

Formsy.addValidationRule('doesNumberExist',function(values,value){
  return value.match(/(\d+)/) ? false : true ;
})

Formsy.addValidationRule('isValidYear',(values,value)=>{
  return isNaN(value) ? false : value>1920 && value<2025 ? true:false;
})


export default Formsy;