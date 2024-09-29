import { Messaging } from '../components/Messaging.tsx';  // Assuming you have these components
import { MoreInfo } from '../components/MoreInfo';   // imported from their respective files

export function ConnectedScreen() {
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
