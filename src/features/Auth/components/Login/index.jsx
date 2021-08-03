import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { closeDialog } = props;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    // console.log("Form Submit: ", values);
    try {
      const action = login(values);
      const user = await dispatch(action).unwrap();

      //close dialog
      if (closeDialog) {
        closeDialog();
      }

      //do something when register success
      console.log("New user", user);
      enqueueSnackbar("Login successfully", { variant: "success" });
    } catch (error) {
      console.log("Fail to login: ", error.message);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
    </div>
  );
}

export default Login;
