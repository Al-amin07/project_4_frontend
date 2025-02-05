
const Text = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div>
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-medium text-center">{title}</h1>
            <p className="text-base text-center w-full lg:w-4/6 text-gray-700 mt-5 mb-10 mx-auto">{desc}</p>

        </div>
    );
};

export default Text;