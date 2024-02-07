function Filter(props) {
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(cate) {
    setCategory(cate);
  }

  return (
    <div className="filter">
      {props.filterData.map((data) => {
        return (
          <button
            className={`bg-black  text-white p-1 rounded text-base font-semibold hover:text-red-100  ${
              category === data.title ? " border-2 bg-opacity-25" : ""
            } `}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
