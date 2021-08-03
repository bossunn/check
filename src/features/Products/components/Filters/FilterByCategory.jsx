import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../api/categoryApi";
import { Box, makeStyles, Typography } from "@material-ui/core";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: "none",

    "& > li": {
      margin: "10px 0",

      "&:hover": {
        color: theme.palette.primary.main,
        transition: "all .25s",
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const categories = await categoryApi.getAll();
        setCategoryList(categories);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
