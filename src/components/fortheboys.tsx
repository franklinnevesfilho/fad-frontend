import {AboutUs, IAboutUsCard} from "./aboutUs.tsx";


export const Fortheboys = () => {
    const teamMembers: IAboutUsCard[] = [

        {
            userFirstName: 'Felix',
            userLastName: 'Arbucias ',
            userSubtext: '',
            userGitHub: '',
            userLinkedIn: '',
            imageSrc: '',
        },
        {
            userFirstName: 'Franklin',
            userLastName: '',
            userSubtext: '',
            userGitHub: '',
            userLinkedIn: '',
            imageSrc: '',
        },
        {
            userFirstName: '',
            userLastName: '',
            userSubtext: '',
            userGitHub: '',
            userLinkedIn: '',
            imageSrc: '',
        },
        {
            userFirstName: '',
            userLastName: '',
            userSubtext: '',
            userGitHub: '',
            userLinkedIn: '',
            imageSrc: '',
        }
    ]
    return (
        <div className={'container mx-auto mt-10'}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {teamMembers.map((member, index) => (
                    <AboutUs
                        key={index}
                        userFirstName={member.userFirstName}
                        userLastName={member.userLastName}
                        userSubtext={member.userSubtext}
                        userGitHub={member.userGitHub}
                        userLinkedIn={member.userLinkedIn}
                        imageSrc={member.imageSrc}
                    />
                ))}
            </div>
        </div>
    )
}


