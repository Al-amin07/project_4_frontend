import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

type TObject = {
    value: string;
    label: string;
    disabled?: boolean;
};

type IProp = {
    label: string;
    name: string;
    options: TObject[];
};

const MainSelect = ({ label, options, name }: IProp) => {
    const { register, setValue, watch, formState: { errors } } = useFormContext(); // get setValue

    // Custom onValueChange to update the form state
    const handleChange = (value: string) => {
        setValue(name, value); // Manually update the value in react-hook-form
    };

    return (
        <div>
            <label className="text-sm font-bold mb-2 inline-block">{label}</label>
            <Select onValueChange={handleChange} {...register(name)} value={watch(name)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup >
                        {options.map((el) => (
                            <SelectItem key={el.value} value={el.value}>
                                {el.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {errors[name] && typeof errors[name]?.message === 'string' && (
                <p className="text-sm" style={{ color: 'red' }}>{errors[name]?.message}</p>
            )}
        </div>
    );
};

export default MainSelect;





