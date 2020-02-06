const conditions = [
    {
        name:"loanyn",
        values:[
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
export default conditions;

