import './App.css';
import Sortable from 'sortablejs';
import { useCallback, useEffect, useRef, useState } from 'react';

let initialItems = [];
for (let i = 0; i < 5; i++) {
  initialItems.push(`Item ${i}`);
}

function App() {
  const listRef = useRef(null);
  const [items, setItems] = useState(initialItems);

  const itemsRef = useRef({
    items,
    setItems,
  });
  useEffect(() => {
    itemsRef.current = {
      items,
      setItems,
    };
  }, [items, setItems]);

  useEffect(() => {
    const listRefCurrent = listRef.current;
    if (listRefCurrent) {
      Sortable.create(listRefCurrent, {
        animation: 150,
        onEnd: ({ oldIndex, newIndex }) => {
          console.log(`Old index: ${oldIndex}, New index: ${newIndex}`);

          if (oldIndex !== newIndex) {
            // Update items order
            const { items, setItems } = itemsRef.current;
            const movedItem = items[oldIndex];
            if (!movedItem) {
              console.warn("Can't find moved item at index ", oldIndex);
              return;
            }

            const itemToSwapWith = items[newIndex];
            if (!itemToSwapWith) {
              console.warn('Ended on out of bounds index: ', newIndex);
              return;
            }

            const newItems = [...items];
            newItems[oldIndex] = itemToSwapWith;
            newItems[newIndex] = movedItem;

            setItems(newItems);
          }
        },
      });
    }
  });

  const onAddItem = useCallback(() => {
    setItems([...items, `Item ${items.length}`]);
  }, [items, setItems]);

  console.log(items);

  return (
    <div className="App">
      <ol className="list" ref={listRef}>
        {items.map((item) => (
          <li className="list-item" key={item}>
            <div className="item">{item}</div>
          </li>
        ))}
      </ol>
      <div className="footer">
        <button onClick={onAddItem}>Add item</button>
      </div>
    </div>
  );
}

export default App;
