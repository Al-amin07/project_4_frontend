import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

const MainInput = ({ label, name, type = 'text' }: { label?: string; name: string, type?: string }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <label className='text-sm font-bold mb-2 inline-block'>{label}</label>
            <Input type={type} {...register(name, type === "number" ? { valueAsNumber: true } : {})} />
            {errors[name] && <p className='text-sm ' style={{ color: 'red' }}>
                {typeof errors[name]?.message === 'string' && errors[name]?.message}
            </p>}
        </div>
    );
};

export default MainInput;
