const CardApi = ({ api, index }) => {
  const renderDetail = (text, field) => (
    <p>
      {text}: <span className="font-semibold">{api[field] || "-"}</span>
    </p>
  );
  return (
    <a href={api.Link} target="_blank">
      <div className="border-2 border-blue-500 bg-blue-100 hover:bg-blue-300 rounded-md text-gray-600 p-2 cursor-pointer h-full ">
        {renderDetail("Title", "API")}
        {renderDetail("Description", "Description")}
        {renderDetail("Auth", "Auth")}
        {renderDetail("Cors", "Cors")}
        {renderDetail("Category", "Category")}
      </div>
    </a>
  );
};

export default CardApi;
