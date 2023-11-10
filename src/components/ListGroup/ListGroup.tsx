import { useState } from 'react';
import styles from './ListGroup.module.css';

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className={[styles['list-group'], styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
