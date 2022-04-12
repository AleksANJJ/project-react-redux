import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategory, filterCategory } from '../../redux/dishesSlice';

const FilterComponent = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>
        </div>
    )
}
export default FilterComponent;