import { IoWalletOutline } from "react-icons/io5"
import MaxWrapper from "../shared/MaxWrapper"
import { Text } from "../atom/Text"


const UserActivity = () => {
    return (
        <MaxWrapper>
            <section className="w-full flex flex-col md:px-20 lg:px-28">
                {/* first section */}
                <div className="w-full bg-navBg py-4 px-5 my-6 flex flex-col rounded-md">
                    <div className="flex flex-col gap-3">
                        <Text as="span" className="flex items-center gap-2 text-gray-400">
                            <IoWalletOutline />
                            Address
                        </Text>
                    </div>
                </div>
            </section>
        </MaxWrapper>
    )
}

export default UserActivity