import * as React from 'react';
import Data, { CollectionType } from '../../../data/index';
import Theme from '../../../utils/theme';

interface ContentsProps {
  onItemClick(item: CollectionType): void;
}
const Contents = ({
  onItemClick
}: ContentsProps) => {
  return (
    <scrollView row={2} scrollBarIndicatorVisible={false} >
      <stackLayout padding={8}>
        <ContentCard onItemClick={onItemClick} items={Data.results.filter((item, index) => index < 10)} title='YOUR PLAYLIST' />
        <ContentCard onItemClick={onItemClick}  items={Data.results.filter((item, index) => index > 10 && index < 20)} title='MOST FREQUENTLY PLAYED' />
        <ContentCard onItemClick={onItemClick}  items={Data.results.filter((item, index) => index > 20 && index < 30)} title='MOST POPULAR' />
        <ContentCard onItemClick={onItemClick}  items={Data.results.filter((item, index) => index > 30 && index < 40)} title='RECENT' />
        <ContentCard onItemClick={onItemClick}  items={Data.results.filter((item, index) => index > 25 && index < 50)} title='UPCOMING' />
      </stackLayout>
    </scrollView>
  )
}

interface ContentCardProps {
  title: string;
  items: CollectionType[];
  onItemClick(item: CollectionType): void;
}

const ContentCard = ({
  items,
  title,
  onItemClick
}: ContentCardProps) => {
  return (
    <stackLayout marginBottom={8}>
      <label style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 16
      }}>{title}</label>
      <scrollView scrollBarIndicatorVisible={false} orientation='horizontal'>
        <stackLayout orientation='horizontal'>
          {items.map((item) => {
            return (
              <stackLayout onTap={() => onItemClick(item)} key={item.collectionId} style={{
                width: 120,
                marginRight: 8
              }}>
                <image src={item.artworkUrl100} style={{
                  height: 120,
                  width: 120,
                  borderRadius: 8,
                  background: Theme[300],
                  marginBottom: 4
                }} stretch='aspectFill' />
                <label style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'black'
                }}>{item.collectionName}</label>
                <label style={{
                  fontSize: 10
                }}>{item.trackCount} Track{item.trackCount !== 1 ? 's' : ''}</label>
              </stackLayout>
            )
          })}
        </stackLayout>
      </scrollView>
    </stackLayout>
  )
}

export default Contents;
