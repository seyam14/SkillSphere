
// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl uppercase border-y-4 py-4 hover:text-blue-800 font-bold">{heading}</h3>
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            
        </div>
    );
};

export default SectionTitle;