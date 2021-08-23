// == Imports

import React, { FC } from 'react';

import './list.scss';

import { TList } from '../../../typings';

// == Component

type Props = TList;

const List: FC<Props> = ({ taskList }) => {
  return (
      <main>
        <div className="list">
          
        </div>
      </main>
  );
}

// == Export

export default List;
