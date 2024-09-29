import {LawyerCard, Lawyerview} from './LawyerView.tsx';


const lawyer: LawyerCard[] = [

    {
        imageSrc : '',
        profession: 'Lawyer',
        language: 'Vietnamese',
        specialization: 'Lawyer again',
        Firstname: 'Some viet',
        Lastname: 'a viet lastname',
        phoneNumber: '954-305-230',
        email: 'thatviet@viet.com',
    },
    ]
export function MoreInfo() {
    return (
        <div className={'container mx-auto mt-10'}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {lawyer.map((member, index) => (
                    <Lawyerview
                        key={index}
                        profession={member.profession}
                        Firstname={member.Firstname}
                        Lastname={member.Lastname}
                        language={member.language}
                        specialization={member.specialization}
                        phoneNumber={member.phoneNumber}
                        email={member.email}
                        imageSrc={member.imageSrc}

                    />
                ))}
            </div>
        </div>

    );
}

