import './App.scss';
import React, { useCallback, useState } from 'react';
import { SortableJsComponent, DraggableJsComponent } from './components';
import { IItem, ISortEvent } from './types';

const itemCount = 50;

function createItem(id: number): IItem {
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
    for (let i = 0; i < itemCount; i++) {
      initialItems.push(createItem(i));
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
    setItems([...items, createItem(items.length)]);
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
      <header className="app-header">
        <h1 className="app-header-current-view">{currentView}</h1>
        <div className="app-header-right">
          <button className="button" onClick={onSwitchView}>
            Switch view
          </button>
          <button className="button" onClick={onAddItem}>
            Add item
          </button>
        </div>
      </header>
      {currentView === 'SortableJS' && (
        <SortableJsComponent items={items} onSortEnd={onSortEnd} />
      )}
      {currentView === 'DraggableJS' && (
        <DraggableJsComponent items={items} onSortEnd={onSortEnd} />
      )}
    </div>
  );
}

export default App;
