

const CareerPath = ({ title,ways, responsibilities, requirements, relatedCompanies, salaryRange }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-xl text-indigo-500 font-bold">{title}</div>
        <div className="mt-4 flex flex-wrap gap-2 text-gray-500"> 
          <span className="text-bold">Ways</span> <br />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2">{ways[0]}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2">{ways[1]}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2">{ways[2]}</span>
        </div>
        <p className="mt-2 text-gray-500"><span className="text-bold">Responsibilities: <br /></span>{responsibilities}</p>
        <p className="mt-2 text-gray-500"><span className="text-bold">Requirements: <br /></span>{requirements}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-gray-500"> <span className="text-bold">Companies</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{relatedCompanies[0]}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{relatedCompanies[1]}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{relatedCompanies[2]}</span>
        </div>
        <div className="mt-4  text-gray-700 "><span className="text-bold">Salary: <br /></span>{salaryRange}</div>
      </div>
    </div>
  );
};

export default CareerPath;
