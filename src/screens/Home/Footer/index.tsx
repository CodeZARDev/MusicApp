import * as React from 'react';
import IconSet from '../../../utils/fonts';
import Theme from '../../../utils/theme';
interface FooterIcon {
  className: string;
  iconName: string;
}

const Icons: FooterIcon[] = [
  {
    className: 'MaterialIcons',
    iconName: IconSet.MaterialIcons['library-music']
  },
  {
    className: 'MaterialCommunityIcons',
    iconName: IconSet.MaterialCommunityIcons.heart
  },
  {
    className: 'Entypo',
    iconName: IconSet.Entypo.circle
  },
  {
    className: 'FontAwesome',
    iconName: IconSet.FontAwesome['bar-chart']
  },
  {
    className: 'FontAwesome',
    iconName: IconSet.FontAwesome['user-circle-o']
  }
];

const Footer = () => {
  const [active, setActve] = React.useState<number>(1);
  return (
    <gridLayout columns='*, *, *, *, *' row={3}>
      {Icons.map((icon, index) => {
        return (
          <flexboxLayout onTap={() => setActve(index)} style={{
            alignItems: 'center',
            justifyContent: 'center',
            color: active === index ? Theme[500] : '#ddd'
          }} col={index} key={`${index}`}>
            <label className={`${icon.className} size20`}>{icon.iconName}</label>
          </flexboxLayout>
        )
      })}
    </gridLayout>
  )
}

export default Footer;
