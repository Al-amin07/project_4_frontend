import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

type MainFileInputProps = {
    label: string;
    name: string;
    accept?: string; // File types the input will accept
};

const MainFileInput = ({ label, name, accept }: MainFileInputProps) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-4">
            <label className="text-sm font-bold mb-2 inline-block">{label}</label>
            <Input
                type="file"
                accept={accept}
                {...register(name)}

                className="w-full py-1.5 px-2 text-sm border rounded"
            />
            {errors[name] && (
                <p className='text-sm' style={{ color: 'red' }}>
                    {typeof errors[name]?.message === 'string' && errors[name]?.message}
                </p>
            )}
        </div>
    );
};

export default MainFileInput;
