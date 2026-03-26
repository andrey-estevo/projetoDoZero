import { View } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export function User(){
    return(
        <View className="items-center">
            <Avatar>
                <AvatarImage />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>

        </View>
    )
}