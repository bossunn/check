import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import ProductFeature from './features/Products';
import TodoFeature from './features/Todo';

function App() {
  //thử gọi API
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10
  //     }
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   }
  //   fetchProducts();
  // }, []);

  // const { enqueueSnackbar } = useSnackbar();
  // const showNoti = () => {
  //   enqueueSnackbar('success', {variant: 'success'})
  // }

  return (
    <div className="App">
      <Header/>
    {/* <Button onClick={showNoti}>SHoww noti</Button> */}
      {/* <div>
        <Link to='/todos'>Todo</Link>

      </div>
      <div>
        <Link to='/albums'>Album</Link>
      </div> */}
      <Switch>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        <Route path='/products' component={ProductFeature}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
