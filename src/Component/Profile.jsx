import { Card } from "flowbite-react";
import picture from '../assets/fotoku.png';

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="180"
                        src={picture}
                        width="180"
                        className="mb-0 rounded-full shadow-lg flex justify-end"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Lutfi Yuda Pratama</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">UI/UX software</span>
                </div>
                <div className="column py-4 sm:text-center md:text-center">
                    <ul className="text-center">
                        <li><b>إِنَّمَا الْأَعْمَالُ بِالنِّيَّةِ</b></li>
                        <li>sesungguhnya segala perbuatan itu tergantung pada niatnya</li>
                    </ul>
                </div>
                <div className="column py-4 sm:text-center md:text-left">
                    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2">

                        <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone: +62 888-0234-7761</h4>
                        <h5>Email: Lutfiyudapratama125@gmail.com</h5>
                        <h5>Github: https://github.com/Lutfiyudapratama</h5>
                        <h5>LinkedIn: -</h5>
                        <h5>Instagram: https://www.instagram.com/fiiiiiiilfi</h5>
                        <h5>LinkedIn: -</h5>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Profile