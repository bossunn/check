import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

FIlterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    flexFlow: "row nowrap",
    alignItems: "center",

    "& > span": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

function FIlterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const classes = useStyles();

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // console.log(values);
    if (onChange) {
      onChange(values);
      setValues({
        salePrice_gte: 0,
        salePrice_lte: 0,
      });
    }
  };

  // const handleReset = () => {
  //   setValues({
  //     salePrice_gte: 0,
  //     salePrice_lte: 0,
  //   });
  // };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Giá</Typography>

      <Box className={classes.range}>
        <TextField
          //label="Giá min"
          variant="outlined"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        ></TextField>
        <span>-</span>
        <TextField
          //label="Giá max"
          variant="outlined"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        ></TextField>
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>

      {/* <Button
        variant="outlined"
        color="primary"
        onClick={handleReset}
        className={classes.button}
      >
        Reset
      </Button> */}
    </Box>
  );
}

export default FIlterByPrice;
