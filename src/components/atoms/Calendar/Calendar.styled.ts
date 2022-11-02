/* eslint-disable max-lines */
import {Theme, TreintaTheme} from '@30sas/web-ui-kit-theme';
import MuiDateRangePickerDay, {
  DateRangePickerDayProps,
} from '@mui/lab/DateRangePickerDay';
import PickersDay, {PickersDayProps} from '@mui/lab/PickersDay';
import {SxProps} from '@mui/system';
import styled from 'styled-components';
import {Typography} from '../Text';

export const CalendarContainer = styled.div`
  & .required {
    color: ${({theme}) => theme.colors.danger[500]};
  }
`;

export const TextLabel = styled(Typography)`
  margin: 0 0 4px 0;
`;

export const TextFieldStyle: SxProps = () => ({
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Nunito Sans,Helvetica,sans-serif,Arial',
    padding: TreintaTheme.utils.spacing(2.13, 4),
    '& fieldset': {
      borderRadius: TreintaTheme.corners.md,
      border: `0.5px solid ${TreintaTheme.colors.gray[600]}`,
    },
    '&:hover fieldset': {
      borderRadius: TreintaTheme.corners.md,
      border: `0.5px solid ${TreintaTheme.colors.gray[600]}`,
    },

    '&.Mui-focused fieldset': {
      border: `1px solid ${TreintaTheme.colors.secondary[700]}`,
      borderRadius: TreintaTheme.corners.md,
    },
    '& .MuiInputBase-input': {
      padding: '0px',
    },
  },
  '& .required': {
    color: TreintaTheme.colors.danger[500],
  },
});

export const CalendarProps = (theme: Theme): SxProps => ({
  '& > div': {
    color: theme.colors.primary[900],
  },
  '& > div > div, & > div > div > div, & .MuiCalendarPicker-root': {
    color: theme.colors.primary[900],
  },

  '& .MuiTypography-caption': {
    color: theme.colors.gray[800],
    height: theme.utils.spacing(8),
  },
  '& .MuiCalendarPicker-root': {
    width: '324px',
    maxHeight: '270px',
  },
  '& .PrivatePickersMonth-root': {
    borderRadius: theme.corners.sm,
    color: theme.colors.gray[700],
    margin: theme.utils.spacing(1, 0),
    height: theme.utils.spacing(8),
    width: '78px',
  },
  '& .MuiTypography-h5.PrivatePickersMonth-root.Mui-selected': {
    color: theme.colors.primary[900],
    backgroundColor: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& .MuiTypography-h5.PrivatePickersMonth-root.Mui-selected:hover': {
    color: theme.colors.primary[900],
    backgroundColor: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& PrivatePickersMonth-root.Mui-selected': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& PrivatePickersMonth-root.Mui-selected:hover': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },

  '& .PrivatePickersSlideTransition-root': {
    borderRadius: theme.corners.sm,
    minHeight: '180px',
  },
  '& .PrivatePickersSlideTransition-root [role="row"]': {
    margin: 0,
    color: theme.colors.primary[900],
    borderRadius: theme.corners.sm,
  },
  '& .PrivatePickersYear-root': {
    borderRadius: theme.corners.sm,
    color: theme.colors.gray[700],
  },
  '& .PrivatePickersYear-yearButton': {
    color: theme.colors.gray[700],
    borderRadius: theme.corners.sm,
    margin: '8px 0 0 0',
    height: theme.utils.spacing(8),
    width: '78px',
  },
  '& .PrivatePickersYear-yearButton.Mui-selected': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& .PrivatePickersYear-yearButton.Mui-selected:hover': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& .PrivatePickersYear-yearButton.Mui-selected:focus': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& .MuiPickersDay-dayWithMargin': {
    borderRadius: theme.corners.sm,
    color: theme.colors.gray[700],
    height: theme.utils.spacing(8),
  },
  '& .MuiPickersDay-root, .MuiTypography-root, .PrivatePickersFadeTransitionGroup-root ':
    {
      fontFamily: 'Nunito Sans',
    },
  '& .MuiPickersDay-root.Mui-selected': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
    borderRadius: theme.corners.sm,
  },
  '& .MuiPickersDay-root.Mui-selected:hover': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
  },
  '& .MuiPickersDay-root.Mui-selected:focus': {
    color: theme.colors.primary[900],
    background: theme.colors.primary[500],
  },

  '& .MuiPickersDay-root.MuiPickersDay-today': {
    color: theme.colors.primary[900],
    border: 0,
    fontWeight: 'bold',
  },
  '& .css-11tf71q-MuiButtonBase-root-MuiPickersDay-root': {
    height: '30px',
    width: theme.utils.spacing(10),
    color: theme.colors.gray[700],
  },
  '& .css-1llwbf5-MuiPickersDay-root': {
    height: '30px',
    width: theme.utils.spacing(10),
  },
});

export const CalendarRangeStyled: SxProps = () => ({
  '& .PrivatePickersSlideTransition-root': {
    minHeight: '195px',
  },
  '& .css-mvmu1r': {
    height: '30px !important',
    margin: '0 !important',
  },
  '& .css-1tape97': {
    borderRight: 'none !important',
  },
  '& .css-1f2kitb-MuiDateRangePickerDay-root': {
    background: `${TreintaTheme.colors.primary[100]} !important`,
  },
  '& .css-1m3meum-MuiDateRangePickerDay-root': {
    background: `${TreintaTheme.colors.primary[100]} !important`,
  },
  '& .css-1h14vs8-MuiDateRangePickerDay-root': {
    background: `${TreintaTheme.colors.primary[100]} !important`,
  },
});

export const PopoverStyled: SxProps = () => ({
  '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
    margin: TreintaTheme.utils.spacing(1, 0),
    border: `1px solid ${TreintaTheme.colors.secondary[700]}`,
  },
});

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
};

export const DatePickerDay = styled(PickersDay)<CustomPickerDayProps>(
  ({dayIsBetween, isFirstDay, isLastDay}) => ({
    ...(dayIsBetween && {
      borderRadius: 0,
      backgroundColor: `${TreintaTheme.colors.primary[100]}`,
      color: `${TreintaTheme.colors.gray[700]}`,
      '&:hover, &:focus': {
        backgroundColor: `${TreintaTheme.colors.primary[100]}`,
      },
    }),
    ...(isFirstDay && {
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      color: `${TreintaTheme.colors.primary[900]} !important`,
      '&:hover, &:focus': {
        backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      },
    }),
    ...(isLastDay && {
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      color: `${TreintaTheme.colors.primary[900]} !important`,
      '&:hover, &:focus': {
        backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      },
    }),
  }),
) as React.ComponentType<CustomPickerDayProps>;

export const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({
    isHighlighting,
    isStartOfHighlighting,
    isEndOfHighlighting,
    isEndOfPreviewing,
    isPreviewing,
    isStartOfPreviewing,
  }) => ({
    ...(isHighlighting && {
      backgroundColor: `${TreintaTheme.colors.primary[100]}`,
      color: `${TreintaTheme.colors.gray[700]}`,
      borderRadius: 'inherit !important',
      height: '30px !important',
      '&:hover, &:focus': {
        backgroundColor: `${TreintaTheme.colors.primary[100]}`,
        color: `${TreintaTheme.colors.gray[700]}`,
        height: '30px !important',
        borderRadius: 'inherit !important',
      },
    }),
    ...(isEndOfPreviewing && {
      borderRadius: 'inherit !important',
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      height: '30px !important',
    }),
    ...(isStartOfPreviewing && {
      borderRadius: 'inherit !important',
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      height: '30px !important',
    }),
    ...(isPreviewing && {
      borderRadius: 'inherit !important',
      height: '30px !important',
    }),

    ...(isStartOfHighlighting && {
      borderRadius: 'inherit !important',
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      height: '30px !important',
    }),
    ...(isEndOfHighlighting && {
      borderRadius: 'inherit !important',
      backgroundColor: `${TreintaTheme.colors.primary[500]}`,
      height: '30px !important',
    }),
  }),
  `.css-pgdzhj-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day {
	color: ${TreintaTheme.colors.secondary[700]} !important;
	background-color: ${TreintaTheme.colors.primary[500]} !important;
  height: 27px !important;
  border-radius: initial  !important;
  }
  
  .css-jwafdq-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected {
	color: ${TreintaTheme.colors.secondary[700]}  !important;
	background-color: ${TreintaTheme.colors.primary[500]} !important;
  height: 27px !important;
  border-radius: inherit;
  }

  .css-1o490ea-MuiDateRangePickerDay-rangeIntervalPreview {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 30px !important;
  }
  .css-l5pdik-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day {
    color: ${TreintaTheme.colors.gray[700]}  !important;
  }
  .css-l5pdik-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:hover {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 27px !important;
  }
  .css-qhrdzm-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day {
    color: ${TreintaTheme.colors.gray[700]}  !important;
  }
  .css-qhrdzm-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:hover {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 27px !important;
  }
  .css-18i6itm-MuiDateRangePickerDay-rangeIntervalPreview {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 30px !important;
  }
  .css-1sgr692-MuiDateRangePickerDay-rangeIntervalPreview {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 30px !important;
  }
  .css-1dheud2-MuiDateRangePickerDay-rangeIntervalPreview {
    border: 2px solid transparent !important;
    border-radius: initial  !important;
    height: 30px !important;
  }

  `,
) as React.ComponentType<DateRangePickerDayProps>;

export const TagContainer = styled.div`
  margin: ${({theme}) => theme.utils.spacing(4, 2, 4, 2)};
`;
