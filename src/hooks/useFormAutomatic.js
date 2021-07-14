import { useState } from "react"

export const useFormAutomatic = (inicialState = {} ) => {
    const [values, setValues] = useState(inicialState)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange ];
}


    
