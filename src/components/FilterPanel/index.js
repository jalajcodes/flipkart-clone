import "./filterpanel.css";
import Select from "react-select";
import { useEffect, useState } from "react";

const sortOptions = [
  { value: "hightolow", label: "Price: High to Low" },
  { value: "lowtohigh", label: "Price: Low to High" }
];

const genderFilterOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

const sizeFilterOptions = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" }
];

const brandFilterOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" }
];

const FilterPanel = ({ products, setProducts }) => {
  const [allProducts, setAllProducts] = useState(() => products);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filtered, setFiltered] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    setProducts(allProducts);
  };

  useEffect(() => {
    const handleFilter = (option) => {
      if (option.value === "lowtohigh") {
        const filtered = [...products].sort((a, b) => {
          return a.price - b.price;
        });
        setFiltered(filtered);
      } else if (option.value === "hightolow") {
        const filtered = [...products].sort((a, b) => {
          return b.price - a.price;
        });
        setFiltered(filtered);
      } else if (option.value === "male") {
        const filtered = [...allProducts].filter(
          (product) => product.category.toLowerCase() === "men's clothing"
        );
        setFiltered(filtered);
      } else if (option.value === "female") {
        const filtered = [...allProducts].filter(
          (product) => product.category.toLowerCase() === "women's clothing"
        );
        setFiltered(filtered);
      } else if (option.value === "S" || "M" || "L" || "XL") {
        const filtered = [...products].filter((product) =>
          product.size.includes(option.value)
        );
        setFiltered(filtered);
      } else if (option.value === "A" || "B" || "C" || "D") {
        const filtered = [...products].filter(
          (product) => product.brand === option.value
        );
        setFiltered(filtered);
      }
    };

    if (selectedOption) {
      handleFilter(selectedOption);
    }
  }, [selectedOption, setProducts]);

  useEffect(() => {
    if (filtered) {
      setProducts(filtered);
    }
  }, [filtered, setProducts]);

  return (
    <div className="filter-panel">
      <h2>Filter & Sort</h2>
      <div className="label">Sort By:</div>
      <Select isClearable onChange={handleChange} options={sortOptions} />
      <div className="label">Filter by Gender:</div>
      <Select onChange={handleChange} options={genderFilterOptions} />
      <div className="label">Filter by Size:</div>
      <Select onChange={handleChange} options={sizeFilterOptions} />
      <div className="label">Filter by Brand:</div>
      <Select
        defaultValue={null}
        onChange={handleChange}
        options={brandFilterOptions}
      />
      <div className="reset">
        <button onClick={handleReset}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterPanel;
