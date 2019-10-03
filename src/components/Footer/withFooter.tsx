import React from 'react';

import { componentUtil } from 'utils';
import { Footer } from './Footer';

interface ExternalFooterProps {
  charactersLength: number;
}

export const withFooter = <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & ExternalFooterProps>,
) => {
  const WithFooter: React.FC<OriginalProps & ExternalFooterProps> = props => {
    const {
      charactersLength,
    } = props;
    return (
      <React.Fragment>
        <Component {...props} />
        <Footer charactersLength={charactersLength}></Footer>
      </React.Fragment>
    );
  };
  WithFooter.displayName = `WithFooter(${componentUtil.getDisplayName(Component)})`;
  return WithFooter;
}
