    const formFields =[
        {
            type:'text',
            name: 'email',
            label: 'Email',
            required:true,
            
            validations: {
                isExisty: true,
                isEmail:true
            },
            validationErrors: {
                isExisty: 'Email Id is required',
                isEmail: 'Email Id is not valid',
            }
        },
        {
            type:'text',
            name: 'fname',
            label: 'First Name',
            required:true,
            
            validations: {
                isExisty: true,
                
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
                
            }
        },
        {
            type:'text',
            name: 'lname',
            label: 'Last Name',
            required:true,
            validations: {
                isExisty: true,
                
    
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
                
            }
        },{
            type:'text',
            name: 'mobile',
            label: 'Mobile',
            required:true,
            
            validations: {
                isExisty: true,
                isLength:10,
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
                isLength:'Enter valid mobile number',
            }
        },
        {
            type:'select',
            name: 'spsd',
            label: 'College',
            required:true,
            optionsApi:"",
            options:["aadishankara","alahstheewara"],
            
            validations: {
                isExisty: true,
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
            }
        },
        {
            type:'date',
            name: 'dob',
            label: 'Date Of Birth',
            required:true,
            
            validations: {
                isExisty: true,
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
            }
        },
        {
            type:'text',
            name: 'degree',
            label: 'Degree',
            required:true,
            
            validations: {
                isExisty: true,
                
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
                
            }
        },
        {
            type:'text',
            name: 'yog',
            label: 'Year Of Graduation',
            required:true,
            
            validations: {
                isExisty: true,
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
            }
        },
        {
            type:'text',
            name: 'city',
            label: 'City',
            required:true,
            
            validations: {
                isExisty: true,
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
            }
        },
        {
            type:'text',
            name: 'aadhaar',
            label: 'Aadhaar Number',
            required:false,
            
            validations: {
                isNumeric:true,
                isLength:12
            },
            validationErrors: {
                isNumeric:'Enter valid Aadhaar number',
                isLength:'Enter valid Aadhaar number'
    
            }
        },
        {
            type:'text',
            name: 'pan',
            label: 'PAN Number',
            required:false,
            
            validations: {
                isLength:10
            },
            validationErrors: {
                isLength:'Enter valid PAN number'
            }
        },
        {
            type:'file',
            name: 'resume',
            label: 'Upload Resume',
            required:true,
            
            validations: {
            },
            validationErrors: {
            }
        },
        {
            type:'file',
            name: 'image',
            label: 'Upload Photo',
            required:true,
            
            validations: {
            },
            validationErrors: {
            }
        },
        {
            type:'radio',
            name: 'loanyn',
            label: 'Would you need a Loan for pursuing the program',
            required:true,
            radioOptions:["yes","no"],
            defaultChecked:"no",
            
            validations: {
            },
            validationErrors: {
                isExisty: 'This field can`t be empty',
            },
            conditionals: [
                {
                    value:"yes",
                    modifications:[],
                    addElements:[
                        {
                            type:'file',
                            name: 'aadhaardoc',
                            label: 'Upload Aadhaar',
                            required:false,
                            disable:true,
                            validations: {
                                isExisty:true
                            },
                            validationErrors: {
                                isExisty: 'This field can`t be empty',
                            }
                        },
                        {
                            type:'file',
                            name: 'panrdoc',
                            label: 'Upload Pan',
                            required:false,
                            disable:true,
                            validations: {
                                isExisty:true
                            },
                            validationErrors: {
                                isExisty: 'This field can`t be empty',
                            }
                        },
    
                    ]
                }
            ]
        },
    
    
    ]

export default formFields;