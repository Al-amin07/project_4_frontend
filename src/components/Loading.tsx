import { ImSpinner9 } from "react-icons/im";


const Loading = () => {
    return (
        <div className="min-h-[500px] flex items-center justify-center">
            <ImSpinner9 size={50} className="animate-spin text-cyan-500" />
        </div>
    );
};

export default Loading;