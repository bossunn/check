import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { closeDialog } = props;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // console.log("Form Submit: ", values);
    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const user = await dispatch(action).unwrap();

      //close dialog
      if (closeDialog) {
        closeDialog();
      }

      //do something when register success
      console.log("New user", user);
      enqueueSnackbar("Register successfully", { variant: "success" });
    } catch (error) {
      console.log("Fail to register: ", error.message);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
