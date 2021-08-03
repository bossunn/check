import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../api/productApi";
import FiltersViewer from "../components/FiltersViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletionList from "../components/ProductSkeletionList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "15px",
    paddingBottom: "10px",
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const history = useHistory();

  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [productList, setProductList] = useState([]);
  const [paginations, setPaginations] = useState({
    count: 1,
    page: 1,
    limit: 9,
  });
  const [loading, setLoading] = useState(true);
  // Ko dùng như vậy nữa
  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   _sort: "salePrice",
  // });

  const [filters, setFilters] = useState({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || "salePrice:ASC",
  });

  useEffect(() => {
    // const fetchProduct = async () => {
    //   try {
    //     const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
    //     setProductList(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setLoading(false);
    // };
    // fetchProduct();
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPaginations(pagination);
        //console.log(data, pagination);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [filters]);

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  const handlePagination = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSort = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: value,
    }));
  };

  //gửi các filter lên th cha để xử lý
  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  //xử lí phần hiển thị lọc
  const setNewFilter = (newFilters) => {
    setFilters(newFilters);
  };

  console.log(filters);

  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>
                <ProductFilters
                  filters={filters}
                  onChange={handleFiltersChange}
                />
              </Paper>
            </Grid>

            <Grid item className={classes.right}>
              <Paper elevation={0}>
                <ProductSort
                  currentSort={filters._sort}
                  onChange={handleSort}
                />

                <FiltersViewer filters={filters} onChange={setNewFilter} />

                {loading ? (
                  <ProductSkeletionList />
                ) : (
                  <ProductList data={productList}>Produclist</ProductList>
                )}

                <Box className={classes.pagination}>
                  <Pagination
                    count={Math.ceil(paginations.total / paginations.limit)}
                    page={paginations.page}
                    shape="rounded"
                    onChange={handlePagination}
                    color="primary"
                  ></Pagination>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
