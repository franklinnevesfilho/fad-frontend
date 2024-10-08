import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Avatar from './Avatar.tsx'

export interface Professional {
    imageSrc : string
    profession: string
    language: string
    specialization: string
    Firstname: string
    Lastname: string
    phoneNumber: string
    email: string
}
const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
};

export const Lawyerview = ({ imageSrc, profession, language, specialization, Firstname, Lastname, phoneNumber, email }: Professional) => {
    return (
        <div className='flex flex-col justify-between w-full rounded-lg shadow-lg bg-primary/15 dark:bg-foreground/50 h-[300px] '>
            <div className='bg-primary flex justify-center relative h-[115px] rounded-tl-lg rounded-tr-lg'>
                <div className='absolute -bottom-3 border-[5px] border-primary rounded-full'>
                    <Avatar firstName={Firstname} lastName={Lastname} src={imageSrc} size={100} className='border-[3px] border-white' />
                </div>
            </div>
            <div className='px-7 py-5 flex flex-col gap-5'>
                <div className='text-center flex flex-col'>
          <span className='font-bold'>
            {Firstname} {Lastname}
          </span>
                    <span className='text-sm text-foreground/60'>{profession}</span>
                    <span className='text-sm text-foreground/60'>{specialization}</span>
                    <span className='text-sm text-foreground/60'>{language}</span>
                </div>
                <div className='flex justify-evenly'>
                    <FaPhone size={20}
                        onClick={() => copyToClipboard(phoneNumber)}
                        style={{ cursor: 'pointer', marginRight: '8px' }}
                    />
                    <MdEmail size={24}
                        onClick={() => copyToClipboard(email)}
                        style={{ cursor: 'pointer', marginRight: '8px' }}
                    />
                </div>
            </div>
        </div>
    )
}
