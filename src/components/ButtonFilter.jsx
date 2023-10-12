import { useEffect } from "react";
import useAxios from "../hooks/useAxios";

const ButtonFilter = ({ fetchData: fetchApi }) => {
  const {
    fetchData,
    response: { categories },
    isLoading,
  } = useAxios("categories");

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="animate-pulse my-5  inline-block text-center ">
        {[...Array(35).keys()].map((num) => (
          <div
            key={num}
            className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block"
          ></div>
        ))}
      </div>
    );
  }
  const handleFilter = (e) => {
    fetchApi({ params: { category: e.target.value } });
  };

  return (
    <div className="text-center my-5">
      {categories &&
        categories.map((button, index) => (
          <button
            className="bg-blue-400 text-white m-1 py-1 px-2 rounded-sm hover:bg-blue-500"
            key={index}
            onClick={handleFilter}
            value={button}
          >
            {button}
          </button>
        ))}
    </div>
  );
};

export default ButtonFilter;
