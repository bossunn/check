import { React, useState } from "react";
import PropTypes from "prop-types";
// import { TextField } from "@material-ui/core";
// import { Controller } from "react-hook-form";

import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  //const {errors} = form; thay vi dung nhu vậy
  const {
    formState: { errors },
  } = form;

  const hasError = !!errors[name];
  // const hasError = formState.touched[name] && errors[name];
  // console.log(errors[name]);

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      {/* <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <TextField
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            //PasswordRef={ref}
            margin="normal"
            variant="outlined"
            name={name}
            label={label}
            disabled={disabled}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
          />
        )}
      /> */}
      {/* <TextField fullWidth></TextField>    */}

      <FormControl
        error={hasError}
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <OutlinedInput
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              //PasswordRef={ref}
              margin="normal"
              variant="outlined"
              name={name}
              label={label}
              disabled={disabled}
              fullWidth
              error={!!hasError}
              // helperText={errors[name]?.message}
            />
          )}
          id="name"
          type={showPassword ? "text" : "password"}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
          // disabled={disabled}
          // error={!!hasError}
          // helperText={errors[name]?.message}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
