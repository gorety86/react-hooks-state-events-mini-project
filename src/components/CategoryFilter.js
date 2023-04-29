import React from "react";

function CategoryFilter({categories, selectedategory, handleSelectedCategory}) {

  const categoryButtons=categories.map(category=>(
    <button
    key={category}
    onClick={(e) => handleSelectedCategory(categories)}
    className={category === selectedategory ? "selected" : ''}
    >
      {category}
    </button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
