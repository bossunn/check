import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";

FiltersViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    padding: 0,

    margin: theme.spacing(2, 0),
    listStyle: "none",

    "& > li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemoveable: false,
    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (filters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mãi",
    isActive: () => true,
    // isVisible: (filters) => Object.keys(filters).includes("isPromotion"),
    isVisible: (filters) => filters.isPromotion,
    isRemoveable: true,
    onRemove: (filters) => {
      // const newFilters = { ...filters };
      //newFilters.isPromotion = !newFilters.isPromotion;
      // delete newFilters.isPromotion;
      return { ...filters, isPromotion: !filters.isPromotion };
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Khoảng giá ${filters.salePrice_gte} - ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
  // {
  //   id: 4,
  //   getLabel: () => "Danh mục",
  //   isActive: () => true,
  //   isVisible: (filters) => true,
  //   isRemoveable: true,
  //   onRemove: (filters) => {},
  //   onToggle: (filters) => {},
  // },
];

function FiltersViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();

  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilter.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemoveable}
            onClick={
              x.isRemoveable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemoveable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FiltersViewer;
