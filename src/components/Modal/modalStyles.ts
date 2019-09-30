import { theme } from 'theme';

interface ModalStylesObject {
  maxWidth?: string;
  height?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
}

export const getModalStyles = (
  {
    maxWidth = '900px',
    height = 'auto',
    backgroundColor,
    fullScreen,
  }: ModalStylesObject = {}
) => ({
  overlay: {
    position: 'fixed',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: backgroundColor || theme.transparentWhiteColor,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    padding: fullScreen ? '10px 0' : '30px 20px',
    maxWidth,
    height,
    minWidth: '280px',
    width: fullScreen ? '100%' : '90%',
    border: fullScreen ? 'none' : `1px solid ${theme.grayColor}`,
    backgroundColor: 'white',
    outline: 'none',
    borderRadius: 4,
    maxHeight: fullScreen ? 'auto' : 'calc(100vh - 90px)',
  },
});
