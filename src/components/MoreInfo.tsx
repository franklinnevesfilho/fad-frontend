import {Professional, Lawyerview} from './LawyerView.tsx';


const lawyer: Professional[] = [

    {
        imageSrc : '',
        profession: 'Lawyer',
        language: 'Vietnamese',
        specialization: 'Lawyer again',
        Firstname: 'Some viet',
        Lastname: 'avietn',
        phoneNumber: '954-305-230',
        email: 'thatviet@viet.com',
    },

]
export function MoreInfo() {
    return (
        <div className="container mx-auto w-full min-h-[80vh] flex items-center justify-center">
            <div className={`flex flex-row flex-wrap justify-center overflow-y-auto max-h-[80vh]`}>
                {lawyer.map((member, index) => (
                    <div key={index} className={'p-2'}>
                        <Lawyerview
                            profession={member.profession}
                            Firstname={member.Firstname}
                            Lastname={member.Lastname}
                            language={member.language}
                            specialization={member.specialization}
                            phoneNumber={member.phoneNumber}
                            email={member.email}
                            imageSrc={member.imageSrc}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
