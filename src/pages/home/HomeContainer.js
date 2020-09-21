import React, { useEffect, useState } from "react";
import Home from "./Home";
import GetResponsive from "../../hooks/getResponsive";

let HomeContainer = () => {
  const [products, setProducts] = useState({
    items: { currentProducts: [] },
    numOfItems: 8,
  });

  const [filters, setFilters] = useState({
    appliance: "None",
    sortBy: "None",
    deliveryMethod: "None",
  });

  let viewPort = GetResponsive();

  async function fetchResults() {
    const res = await fetch(`https://demo1853976.mockable.io/`);
    res.json().then((res) => {
      setProducts((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          "-appliance:None-sortBy:None-deliveryMethod:None": [...res],
          allProducts: [...res],
          currentProducts: [...res],
        },
      }));
    });
  }

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    let queryString = "";
    for (let i = 0; i < Object.keys(filters).length; i++) {
      queryString =
        queryString +
        `-${Object.keys(filters)[i]}:${filters[Object.keys(filters)[i]]}`;
    }

    if (products.items[queryString]) {
      setProducts((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          currentProducts: [...prev.items[queryString]],
        },
      }));
    } else {
      let sorted = [];
      let result =
        filters.appliance !== "None"
          ? products?.items?.allProducts?.filter((product) => {
              for (let i = 0; i < product.items.length; i++) {
                const curr = product.items[i]["~product_type"];
                if (curr === filters?.appliance) {
                  return true;
                }
              }
            })
          : products?.items?.allProducts;

      if (filters.sortBy === "Highest Price") {
        sorted.push(...result.sort((a, b) => b.prices.final - a.prices.final));
      }
      if (filters.sortBy === "Lowest Price") {
        sorted.push(...result.sort((a, b) => a.prices.final - b.prices.final));
      }
      setProducts((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          [queryString]: sorted.length > 0 ? sorted : result,
          currentProducts: sorted.length > 0 ? sorted : result,
        },
      }));
    }
  }, [filters]);

  const filterHandler = (e, item) => {
    const inputValue = e.target.value;

    setFilters((prev) => ({
      ...prev,
      [item]: inputValue,
    }));
  };

  const showMoreHelper = () => {
    if (products.numOfItems + 8 >= products.items.currentProducts.length) {
      setProducts((prev) => ({
        ...prev,
        numOfItems: products.items.currentProducts.length,
      }));
    } else {
      setProducts((prev) => ({
        ...prev,
        numOfItems: prev.numOfItems + 8,
      }));
    }
  };

  return (
    <Home
      products={products}
      filterHandler={filterHandler}
      viewPort={viewPort}
      showMoreHelper={showMoreHelper}
    />
  );
};

export default HomeContainer;
