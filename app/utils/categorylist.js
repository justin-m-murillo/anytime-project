import FastFood from '../assets/fastfood.svg';
import Japanese from '../assets/japanese.svg';
import Mexican from '../assets/mexican.svg';
import Chinese from '../assets/chinese.svg';
import Pizza from '../assets/pizza.svg';
import Chicken from '../assets/fried-chicken.svg';
import Bars from '../assets/bars.svg';
import Dessert from '../assets/dessert.svg';
import Bowling from '../assets/bowling.svg';
import Steak from '../assets/steak.svg';

const ICON_SIZE = 48

const categoryList = [
  {
    icon: <FastFood width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Burgers'
  },
  {
    icon: <Japanese width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Japanese'
  },
  {
    icon: <Mexican width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Mexican'
  },
  {
    icon: <Chinese width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Chinese'
  },
  {
    icon: <Pizza width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Pizza'
  },
  {
    icon: <Chicken width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Chicken'
  },
  {
    icon: <Bars width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Bars'
  },
  {
    icon: <Dessert width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Dessert'
  },
  {
    icon: <Steak width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Steak'
  },
  {
    icon: <Bowling width={ICON_SIZE} height={ICON_SIZE} />,
    title: 'Bowling'
  },
]

export default categoryList;