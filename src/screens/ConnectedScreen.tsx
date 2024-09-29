import { Messaging } from '../components/Messaging.tsx';  // Assuming you have these components
import { MoreInfo } from '../components/MoreInfo';
import {useState} from "react";
import {Professional} from "../components/LawyerView.tsx";   // imported from their respective files

interface CaseInfo{
    user_topic: string;
    language: string,
    city: string;
}


export function ConnectedScreen() {
    // const [profLists, setProfList] = useState<Professional[] | null>(null)
    //
    // const getProfs = (caseInfo: CaseInfo) => {
    //     // API request
    // }


    return (
        <div className="flex w-full min-h-[83vh] p-3">
            {/*MoreInfo Component - 60% width*/}
            <div className="w-4/6 bg-white">
                <MoreInfo />
            </div>

            {/*Messaging Component - 40% width*/}
            <div className="w-2/6 border-2 rounded-2xl overflow-hidden border-gray-500">
                <Messaging />
            </div>
        </div>
    );
}
