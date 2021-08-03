import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

FIlterByService.propTypes = {
  filters: PropTypes.object,
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
    marginLeft: theme.spacing(4),
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "5px",
  },
}));

function FIlterByService({ filters = {}, onChange }) {
  // const [values, setValues] = useState({
  //   isFreeShip: Boolean(filters.isFreeShip),
  //   isPromotion: Boolean(filters.isPromotion),
  // });

  const classes = useStyles();

  // const handleChange = (e) => {
  //   setValues((prevValue) => ({
  //     ...prevValue,
  //     [e.target.name]: e.target.checked,
  //   }));
  //   onChange(values);
  // };

  const handleChange = (e) => {
    if (onChange) {
      onChange({ [e.target.name]: e.target.checked });
    }
  };

  // const handleSubmit = () => {
  //   // console.log(values);
  //   if (onChange) {
  //     onChange(values);
  //   }
  // };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch vụ</Typography>

      <ul className={classes.list}>
        {[
          { value: "isFreeShip", label: "Giao hàng miễn phí" },
          { value: "isPromotion", label: "Đang giảm giá" },
        ].map((service) => (
          <li key={service}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters[service.value]}
                  onChange={handleChange}
                  color="primary"
                  name={service.value}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>

      {/* <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.isFreeShip}
              onChange={handleChange}
              color="primary"
              name="isFreeShip"
            />
          }
          label="Giao hàng miễn phí"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.isPromotion}
              onChange={handleChange}
              color="primary"
              name="isPromotion"
            />
          }
          label="Đang giảm giá"
        />
      </Box> */}
    </Box>
  );
}

export default FIlterByService;
