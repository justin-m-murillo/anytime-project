import { StyleSheet } from "react-native";

const style = {
  headerContainer: 'flex-row items-center mx-4 space-x-2 px-1 pb-3',
  profileImage: 'h-7 w-7 p-5 rounded-full',
  userName: 'font-bold text-gray-400 text-sm',
  location: 'font-bold text-xl underline underline-offset-4',
  mapPinIcon: StyleSheet.create({
    color: 'gray',
    size: 24,
  }),
}

export default style;