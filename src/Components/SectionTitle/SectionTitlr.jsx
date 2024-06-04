/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const SectionTitlr = ({heading, subHeading, title}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 py-10">
            <p className="text-yellow-500 mb-5 italic">---{subHeading}---</p>
            <h3 className="uppercase text-4xl border-y-4 py-4 ">{heading}</h3>
            {/* <h3 className="uppercase text-4xl border-y-4 py-4 text-white">{title}</h3> */}
        </div>
    );
};

export default SectionTitlr;