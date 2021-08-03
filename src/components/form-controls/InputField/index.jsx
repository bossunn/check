import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    //const {errors} = form; thay vi dung nhu vậy 
    const { formState: { errors } } = form;
    
    const hasError = errors[name];
    // const hasError = formState.touched[name] && errors[name];
    // console.log(errors[name]);
    
    return (
        <Controller
            name={name}
            control={form.control}    
            render={({
                field: { onChange, onBlur, value, name, ref }
            }) => (
                <TextField
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    //inputRef={ref}
                    margin='normal'
                    variant='outlined'
                    name={name}
                    label={label}
                    disabled={disabled}
                    fullWidth
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
            // <TextField fullWidth></TextField>      
    );
}

export default InputField;