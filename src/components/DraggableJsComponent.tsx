import { Sortable, Plugins, SortableStopEvent } from '@shopify/draggable';
import React, { useEffect, useRef } from 'react';
import { ISortableListParams } from '../types';

export const DraggableJsComponent: React.FC<ISortableListParams> = ({
  items,
  onSortEnd,
}: ISortableListParams) => {
  const listRef = useRef<HTMLOListElement>(null);

  // Save ref for use with Sortable callback
  const onSortEndRef = useRef(onSortEnd);
  useEffect(() => {
    onSortEndRef.current = onSortEnd;
  }, [onSortEnd]);

  useEffect(() => {
    const listRefCurrent = listRef.current;
    if (listRefCurrent) {
      const sortable = new Sortable(listRefCurrent, {
        draggable: '.list-item',
        sortAnimation: {
          duration: 150,
        },
        plugins: [Plugins.SortAnimation],
      });
      sortable.on(
        'sortable:stop',
        ({ oldIndex, newIndex }: SortableStopEvent) => {
          const callback = onSortEndRef.current;
          if (!callback) {
            console.warn('No onSortEnd callback defined');
            return;
          }

          callback({
            oldIndex,
            newIndex,
          });
        }
      );
      return () => {
        sortable.destroy();
      };
    }
  }, []);

  return (
    <ol className="list" ref={listRef}>
      {items.map(({ displayName, key }) => (
        <li className="list-item" key={key}>
          <div className="item draggablejs-item">{displayName}</div>
        </li>
      ))}
    </ol>
  );
};
