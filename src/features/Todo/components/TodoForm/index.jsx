import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Please enter the title")
    .min(5, "Title is too short"),
});

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const submitForm = (values) => {
    //console.log("Todo form:", values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(submitForm)}>
      <InputField form={form} name="title" label="TodoForm" />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
