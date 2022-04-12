
import './App.css';
import Cart from './Component/Cart/Cart';
import Dishes from './Component/DishesComponents/Dishes';
import AllCAtegories from './Component/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <AllCAtegories />
      <Cart />
      </div>
      <div className='block'>
      <Dishes />
      </div>
    </div>
  );
}

export default App;
