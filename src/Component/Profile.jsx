import { Card } from "flowbite-react";

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">


                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="profile image"
                        height="96"
                        //src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                <div className="flex flex-between items-center pb-10">
                    
                    <div className="column py-4">
                        <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">lutfi</h3>
                        <h4>junior dev</h4>
                        <div className="mt-4 flex space-x-3 lg:mt-6">

                        </div>
                    </div>
                    <div className="flex flex-between items-center pb-10">
                
                    <div>
                        <div inline className="column">
                            <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">phone +62 88802347761</h3>
                            <h3>@gmail lutfi</h3>
                            <h3>github lutfi</h3>
                        </div>
                    </div>



                </div>
                <div className="flex flex-col items-center pb-10">
                    {/* <Image
                        alt="Bonnie image"
                        height={96}
                        src="/images/people/profile-picture-3.jpg"
                        width={96}
                        className="mb-3 rounded-full shadow-lg"
                    /> */}
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        {/* <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            Message
                        </a> */}
                    </div>
                </div>
            </div>
            </div>
            </div>
        </Card>
    )
}

export default Profile