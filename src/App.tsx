import './App.css';
import React, { useCallback, useState } from 'react';
import { SortableJsComponent, DraggableJsComponent } from './components';
import { IItem, ISortEvent } from './types';

let uniqueId = 0;

function createItem(): IItem {
  const id = uniqueId++;
  return {
    key: '' + id,
    displayName: `Item ${id}`,
  };
}

type Views = 'SortableJS' | 'DraggableJS';
const views: Views[] = ['SortableJS', 'DraggableJS'];

function App() {
  const [currentView, setCurrentView] = useState<'SortableJS' | 'DraggableJS'>(
    views[0]
  );
  const [items, setItems] = useState<IItem[]>(() => {
    const initialItems: IItem[] = [];
    for (let i = 0; i < 5; i++) {
      initialItems.push(createItem());
    }
    return initialItems;
  });

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }: ISortEvent) => {
      console.log(`Old index: ${oldIndex}, New index: ${newIndex}`);
      if (oldIndex !== newIndex) {
        // Update items order
        const itemToMove = items[oldIndex];
        if (!itemToMove) {
          console.warn("Can't find item to move at old index ", oldIndex);
          return;
        }

        const newItems = [...items];
        newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, itemToMove);
        setItems(newItems);
      }
    },
    [items, setItems]
  );

  const onAddItem = useCallback(() => {
    setItems([...items, createItem()]);
  }, [items, setItems]);

  const onSwitchView = useCallback(() => {
    const currentViewIndex = views.indexOf(currentView);
    if (currentViewIndex === -1) {
      console.warn(
        `Unknown currentView '${currentView}'. Defaulting to first view.`
      );
      setCurrentView(views[0]);
      return;
    }

    const newIndex = (currentViewIndex + 1) % views.length;
    setCurrentView(views[newIndex]);
  }, [currentView]);

  console.log(items);

  return (
    <div className="App">
      <header className="app-header">{currentView}</header>
      {currentView === 'SortableJS' && (
        <SortableJsComponent items={items} onSortEnd={onSortEnd} />
      )}
      {currentView === 'DraggableJS' && (
        <DraggableJsComponent items={items} onSortEnd={onSortEnd} />
      )}
      <div className="footer">
        <button className="footer-button" onClick={onSwitchView}>
          Switch view
        </button>
        <button className="footer-button" onClick={onAddItem}>
          Add item
        </button>
      </div>
    </div>
  );
}

export default App;
