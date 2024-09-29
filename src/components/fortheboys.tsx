import {AboutUs, IAboutUsCard} from "./aboutUs.tsx";
import FelixPic from '../assets/images/felixpic.jpg';

export const Fortheboys = () => {
    const teamMembers: IAboutUsCard[] = [

        {
            userFirstName: 'Felix',
            userLastName: 'Arbucias',
            userSubtext: '',
            userGitHub: 'https://github.com/felixArbucias',
            userLinkedIn: 'https://www.linkedin.com/in/felixarbucias/',
            imageSrc: FelixPic,
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
            userFirstName: 'Anthony',
            userLastName: '',
            userSubtext: '',
            userGitHub: '',
            userLinkedIn: '',
            imageSrc: '',
        },
        {
            userFirstName: 'Thanh',
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


