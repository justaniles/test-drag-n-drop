import Sortable from 'sortablejs';
import React, { useEffect, useRef } from 'react';
import { ISortableListParams } from '../types';

export const SortableJsComponent: React.FC<ISortableListParams> = ({
  items,
  onSortEnd,
}: ISortableListParams) => {
  const listRef = useRef(null);

  // Save ref for use with Sortable callback
  const onSortEndRef = useRef(onSortEnd);
  useEffect(() => {
    onSortEndRef.current = onSortEnd;
  }, [onSortEnd]);

  useEffect(() => {
    const listRefCurrent = listRef.current;
    if (listRefCurrent) {
      const sortable = Sortable.create(listRefCurrent, {
        animation: 150,
        onEnd: ({ oldIndex, newIndex }) => {
          const callback = onSortEndRef.current;
          if (!callback || oldIndex === undefined || newIndex === undefined) {
            console.warn(
              `Param undefined in Sortable.onEnd. callback defined: ${!!callback}, oldIndex: ${oldIndex}, newIndex: ${newIndex}`
            );
            return;
          }

          callback({
            oldIndex,
            newIndex,
          });
        },
      });
      return () => {
        sortable.destroy();
      };
    }
  });

  return (
    <ol className="list" ref={listRef}>
      {items.map(({ displayName, key }) => (
        <li className="list-item" key={key}>
          <div className="item sortablejs-item">{displayName}</div>
        </li>
      ))}
    </ol>
  );
};
