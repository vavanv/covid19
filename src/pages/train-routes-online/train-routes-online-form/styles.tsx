import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    station: {
      borderRadius: '20px',
      paddingRight: '12px',
      margin: '-12px',
      // color: 'rgba(255, 255, 255, .4)',
      lineHeight: '24px',
      fontSize: '13px',
      whiteSpace: 'nowrap',
      '&:before': {
        // content: ' ',
        display: 'inline-block',
        width: '8px',
        height: '8px',
        background: 'rgb(255,0,0)',
        borderRadius: '8px',
        marginTop: '0',
        margitBottom: '0',
        marginLeft: '8px',
        margintRight: '8px',
      },
      '&:hover': {
        color: palette.common.white,
        background: palette.common.black,
        '& span': {
          display: 'inline-block',
        },
      },
      '& span': {
        display: 'none',
      },
    },
  });
};

// export default `
// .station:before {
//   content: ' ';
//   display: inline-block;
//   width: 8px;
//   height: 8px;
//   background: red;
//   border-radius: 8px;
//   margin: 0 8px;
// }
// .station {
//   border-radius: 20px;
//   padding-right: 12px;
//   margin: -12px;
//   color: transparent;
//   line-height: 24px;
//   font-size: 13px;
//   white-space: nowrap;
// }
// .station span {
//   display: none;
// }
// .station:hover {
//   background: rgba(0,0,0,0.8);
//   color: #fff;
// }
// .station:hover span {
//   display: inline-block;
// }
// `;
