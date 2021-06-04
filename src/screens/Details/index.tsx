import { Screen } from '@nativescript/core';
import { useRoute } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import StatusBar from '../../components/StatusBar';
import { CollectionType } from '../../data/index';
import Theme from '../../utils/theme';
import IconSet from '../../utils/fonts'

const Details: React.FC = () => {
  const route = useRoute();
  const { item } = route.params as { item: CollectionType};
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <gridLayout rows='auto, auto, *, auto' style={{
      background: 'black',
    }}>
      <StatusBar />
      <gridLayout row={1} columns='*, *, *' paddingTop={30}>
        <stackLayout col={1} style={{
          height: 3,
          borderRadius: 4,
          background: '#ddd'
        }}/>
      </gridLayout>
      <scrollView row={2} style={{
        marginTop: 4,
        background: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
      }}>
        <stackLayout style={{
          padding: 14
        }}>
          <image src={item.artworkUrl100} stretch='aspectFill' style={{
            height: Screen.mainScreen.widthDIPs - 16,
            width: Screen.mainScreen.widthDIPs - 16,
            borderRadius: 16,
            background: Theme[300],
            margin: 8,
            marginBottom: 14
          }}/>

          <progress value={50} maxValue={100} color={Theme[500]} marginBottom={4} />
          <gridLayout columns="auto, *, auto" marginBottom={8}>
            <label col={0} style={styles.time}>02:00</label>
            <label col={2} style={styles.time}>04:00</label>
          </gridLayout>
          <flexboxLayout justifyContent='center' alignItems='center' flexDirection='column'>
            <label textWrap style={styles.title}>{item.collectionCensoredName}</label>
            <label style={styles.subTitle}>{item.artistName}</label>
          </flexboxLayout>

          <gridLayout marginTop={16} columns='*, *, *, *, *'>
            <DetailIcon col={0} className='MaterialIcons' iconName={IconSet.MaterialIcons['file-upload']} />
            <DetailIcon col={1} className='MaterialIcons' iconName={IconSet.MaterialIcons['fast-rewind']} />
            <PlayDetailIcon onTap={() => setIsPlaying(!isPlaying)} col={2} size={40} className='MaterialIcons' iconName={isPlaying ? IconSet.MaterialIcons.pause : IconSet.MaterialIcons['play-arrow']} />
            <DetailIcon col={3} className='MaterialIcons' iconName={IconSet.MaterialIcons['fast-forward']} />
            <DetailIcon col={4} className='MaterialIcons' iconName={IconSet.MaterialIcons['repeat-one']} />
          </gridLayout>
        </stackLayout>
      </scrollView>
      <gridLayout row={3} columns='*, *, *, *'>

      </gridLayout>
    </gridLayout>
  )
}

interface DetailIconProps {
  size?: number;
  className: string;
  iconName: string;
  col: number;
  onTap?(): void
}

const DetailIcon = ({
  className,
  iconName,
  size = 26,
  col,
  onTap
}: DetailIconProps) => {
  return (
    <flexboxLayout onTap={onTap} col={col} style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: 70
    }}>
      <label verticalAlignment='middle' className={`${className} size${size}`}>{iconName}</label>
    </flexboxLayout>
  )
}

const PlayDetailIcon = ({
  className,
  iconName,
  size = 26,
  col,
  onTap
}: DetailIconProps) => {
  return (
    <flexboxLayout onTap={onTap}  col={col} style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: 70
    }}>
      <flexboxLayout style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        background: Theme[500],
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}>
        <label verticalAlignment='middle' className={`${className} size${size}`}>{iconName}</label>
      </flexboxLayout>
    </flexboxLayout>
  )
}

const styles = StyleSheet.create({
  time: {
    fontSize: 10
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlignment: 'center'
  },
  subTitle: {
    color: Theme[500],
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold'
  }
})

export default Details;
