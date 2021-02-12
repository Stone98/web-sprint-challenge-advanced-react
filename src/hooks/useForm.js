// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }); // setValues is only used here, and is not necessary to pass where useForm will be invoked
    };

    return ([values, handleChanges]) // passes values and handleChanges to where useForm will be invoked
}

export default useForm;