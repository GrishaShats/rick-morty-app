import React from 'react';

import ManagerInfo from 'components/ManagerInfo';

import { ManagerCredentials, HandleGetOneManager, HandleSetOneManager } from 'store/domains';

interface CharacterManagerProps {
  managerInfo: ManagerCredentials;
  handleSetOneManager: HandleSetOneManager;
  handleGetOneManager: HandleGetOneManager;
}

const CharacterManager: React.FC<CharacterManagerProps> = ({
  managerInfo,
  handleGetOneManager,
  handleSetOneManager,
}) => {
  React.useEffect(() => {
    (handleGetOneManager());
  }, [])
  return (
    <ManagerInfo
      handleSetOneManager={handleSetOneManager}
      initialValues={managerInfo}
    />
  );
};

export default CharacterManager;
