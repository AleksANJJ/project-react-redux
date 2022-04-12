import FilterComponent from "./Filter";

const AllCAtegories = () => {
    return(    
    <div>
        <h1>What kind of food do you like?</h1>
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map(category=> <FilterComponent category={category} />)}
        
    </div>
    )}
export default AllCAtegories;