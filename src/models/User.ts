import ContactCard from './ContactCard';

export default interface User {
    name: string;
    age: number;
    bio: string;
    countryOfOrigin: string;
    contactCard?: ContactCard;
}