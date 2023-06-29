import { StyleSheet } from "react-native";

const styles = {
  shadow: StyleSheet.create({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3,

    elevation: 6,
  }),
  container: 'bg-gray-200 h-full',
  contentWrapper: 'm-2 p-1 bg-gray-50 rounded-lg',
  titleWrapper: 'items-center m-2',
  title: 'text-lg font-bold',
  statement: 'm-2',
  contactInfoContainer: 'm-2',
  contactInfoWrapper: 'items-center my-2',
  email: 'text-base my-1',
  logoWrapper: 'items-center my-10',
  footer: 'items-center',
  termsConditions: 'text-sm my-1',
  copyright: 'my-2',
}

export default styles;