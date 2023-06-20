import { StyleSheet } from 'react-native';

const styles = {
  container: 'bg-white rounded-sm m-2',
  imgContainer: 'relative',
  image: 'h-48 w-48 rounded-sm',
  businessInfoWrapper: 'w-full pb-1 absolute left-0 bottom-0',
  businessName: 'font-bold text-white text-lg px-1',
  distance: 'text-white text-md px-1',
  shadow: StyleSheet.create({
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3,

    elevation: 6,
  }),
}

export default styles;