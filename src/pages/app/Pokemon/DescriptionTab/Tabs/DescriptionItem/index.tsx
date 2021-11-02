import React from 'react';

import {
  DescriptionTitle,
  DescriptionTitleView,
  DescriptionValue,
  DescriptionValueView,
  DescriptionView,
} from './styles';

interface DescriptionItemProps {
  title: string;
  value: string;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({title, value}) => {
  return (
    <DescriptionView>
      <DescriptionTitleView>
        <DescriptionTitle>{title}</DescriptionTitle>
      </DescriptionTitleView>
      <DescriptionValueView>
        <DescriptionValue>{value}</DescriptionValue>
      </DescriptionValueView>
    </DescriptionView>
  );
};

export default DescriptionItem;
