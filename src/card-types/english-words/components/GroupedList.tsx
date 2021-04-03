import React from 'react';
import { groupBy, toLower } from 'lodash';

interface IGroupedListChildrenOptions {
  isOnlyGroup: boolean;
}

interface IGroupedListLimitation {
  groupsOnly?: Array<string> | null; // ['verb', 'noun']
  numVisibleGroups?: number | null; // Ex: 3
  numItemsInGroup?: Array<number> | null; // Ex: [5, 3, 1]
}

interface IGroupedListProps<T> {
  items: Array<T>;
  groupBy: keyof T;
  children: (groupName: string, items: Array<T>, opts: IGroupedListChildrenOptions) => JSX.Element;
  limitation?: IGroupedListLimitation;
}

export function GroupedList<T>(props: IGroupedListProps<T>) {
  const groups = groupBy(props.items, props.groupBy);
  const groupsOnly = props.limitation?.groupsOnly ?? [];
  const groupsNames = Object.keys(groups).filter(group => {
    return !groupsOnly.length || groupsOnly.some(g => toLower(g) === toLower(group));
  });
  const groupLimit = props.limitation?.numVisibleGroups ?? groupsNames.length;
  const getGroupItems = (groupIdx: number, items: Array<T>): Array<T> => {
    const limit = (props.limitation?.numItemsInGroup || [])[groupIdx] ?? items.length;
    return items.slice(0, limit);
  };

  return (
    <React.Fragment>
      {groupsNames.slice(0, groupLimit)
        .map((group, idx) => (
          <div key={group}>
            {props.children(group, getGroupItems(idx, groups[group]), { isOnlyGroup: groupLimit === 1 })}
          </div>
        ))
      }
    </React.Fragment>
  );
}
