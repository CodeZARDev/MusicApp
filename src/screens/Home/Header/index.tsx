import { TapGestureEventData } from "@nativescript/core";
import * as React from "react";
import Theme from '../../../utils/theme';

type HeaderTitle = 'For You' | 'Trending' | 'Popular';
const headers: HeaderTitle[] = [
  'For You',
  'Trending',
  'Popular'
]

const Header = () => {
  const [active, setActive] = React.useState<HeaderTitle>('For You');
  return (
    <gridLayout columns='*, *, *' row={1} padding='16 8 8'>
      {headers.map((item, index) => {
        return (
          <flexboxLayout onTap={(args: TapGestureEventData) => {
            setActive(item);
          }} col={index} key={item} style={{
            padding: 8,
            color: active === item ? 'white' : 'black',
            background: active === item ? Theme[500] : 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8
          }}>
            <label>{item}</label>
          </flexboxLayout>
        )
      })}
    </gridLayout>
  )
}

export default Header;
