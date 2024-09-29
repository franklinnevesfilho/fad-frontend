import {AboutUs, IAboutUsCard} from "./aboutUs.tsx";
import FelixPic from '../assets/images/felixpic.jpg';
import franklinPic from '../assets/images/franklin.jpg';
import anthonyPic from '../assets/images/anthony.png';
import dat from '../assets/images/dat.png';
export const Fortheboys = () => {
    const teamMembers: IAboutUsCard[] = [

        {
            userFirstName: 'Felix',
            userLastName: 'Arbucias',
            userSubtext: 'Full-Stack Developer / AI Engineer',
            userGitHub: 'https://github.com/felixArbucias',
            userLinkedIn: 'https://www.linkedin.com/in/felixarbucias/',
            imageSrc: FelixPic,
        },
        {
            userFirstName: 'Franklin',
            userLastName: 'Neves',
            userSubtext: 'Full-Stack Developer / AI Engineer',
            userGitHub: 'https://github.com/franklinnevesfilho',
            userLinkedIn: 'https://www.linkedin.com/in/franklinnevesfilho/',
            imageSrc: franklinPic,
        },
        {
            userFirstName: 'Anthony',
            userLastName: 'Magdaleno',
            userSubtext: 'Full-Stack Developer / AI Engineer',
            userGitHub: 'https://github.com/ajmag',
            userLinkedIn: 'https://www.linkedin.com/in/anthonyj-magdaleno/',
            imageSrc: anthonyPic,
        },
        {
            userFirstName: 'Thanh',
            userLastName: 'Do',
            userSubtext: 'Full-Stack Developer / AI Engineer',
            userGitHub: 'https://github.com/casualprogram',
            userLinkedIn: 'https://www.linkedin.com/in/thanhdo03/',
            imageSrc: dat,
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


