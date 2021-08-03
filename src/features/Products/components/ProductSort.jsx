import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";

ProductSort.propTypes = {
  activeIndex: PropTypes.string.isRequired,
};

function ProductSort({ currentSort, onChange }) {
  const onSort = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      onChange={onSort}
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Giá tăng dần" value="salePrice:ASC" />
      <Tab label="Giả giảm dần" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
