import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import FilterByCategory from "./Filters/FilterByCategory";
import FIlterByPrice from "./Filters/FIlterByPrice";
import FIlterByService from "./Filters/FIlterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onchange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategory = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      // categoryId: newCategoryId,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  // const handlePrice = (value1, value2) => {
  //   if (!onChange) return;

  //   const newFilters = {
  //     ...filters,
  //     _gte: value1,
  //     _lte: value2,
  //   };
  //   onChange(newFilters);
  // };

  const handlePrice = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  const handleService = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategory}></FilterByCategory>
      <FIlterByPrice onChange={handlePrice}></FIlterByPrice>
      <FIlterByService
        filters={filters}
        onChange={handleService}
      ></FIlterByService>
    </Box>
  );
}

export default ProductFilters;
