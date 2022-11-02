import {format} from 'date-fns';
import Box from '@mui/material/Box';
import esLocale from 'date-fns/locale/es';
import elLocale from 'date-fns/locale/el';
import ptLocale from 'date-fns/locale/pt';
import {useTheme} from 'styled-components';
import Popover from '@mui/material/Popover';
import enLocale from 'date-fns/locale/en-US';
import DateFnsUtils from '@date-io/date-fns';
import {Theme} from '@30sas/web-ui-kit-theme';
import {FC, MouseEvent, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {DateIcon} from '@30sas/web-ui-kit-icons';
import {LocalizationProvider} from '@mui/x-date-pickers-pro';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';

import {Tag} from '../TagCustom';
import {
  AnchorEl,
  CalendarStartEnd,
  StartEnd,
  TreintaCalendarProps,
} from './types';
import {
  TextLabel,
  PopoverStyled,
  CalendarProps,
  TextFieldStyle,
  CalendarContainer,
  TagContainer,
} from './Calendar.styled';
import {
  handleShouldDisableDate,
  handleShouldDisableDays,
} from './Calendar.func';

const localeMap = {
  en: enLocale,
  el: elLocale,
  es: esLocale,
  pt: ptLocale,
};

let countTimes = 0;

export const Calendar: FC<TreintaCalendarProps> = ({
  label,
  views,
  openTo,
  locale,
  minDate,
  maxDate,
  disabled,
  dataTestId,
  disablePast,
  disableFuture,
  required = false,
  value = new Date(),
  Icon = DateIcon,
  resetCalendar = false,
  textColor = 'primary',
  textColorType = '900',
  formatDate = 'd MMM yyyy',
  bottomTag,
  onClick = () => null,
  onChange = () => null,
  disableSpecificDates,
  disableDays,
}) => {
  const [seledvalue, setValue] = useState<number | Date>(value);
  const [valueInput, setValueInput] = useState<string | null>(
    format(new Date(), formatDate, {locale: localeMap[locale]}),
  );
  const [tagDateFormatted, setTagDateFormatted] = useState<string | null>(
    format(new Date(), 'd MMM', {locale: localeMap[locale]}),
  );

  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  const theme = useTheme() as Theme;

  const popOpen = Boolean(anchorEl);
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const counter = views.length;

  const handleChange = (value: CalendarStartEnd): void => {
    countTimes++;
    setValue(value as number | Date);
    setValueInput(
      format(value as Date | number, formatDate, {
        locale: localeMap[locale],
      }),
    );
    setTagDateFormatted(
      format(value as Date, 'd MMM', {locale: localeMap[locale]}),
    );
    onChange(value);
    if (countTimes == counter) {
      countTimes = 0;
      handleClose();
    }
  };

  const openDateRangePicker = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setValueInput(
      format(value, formatDate, {
        locale: localeMap[locale],
      }),
    );
    setTagDateFormatted(
      format(value as Date, 'd MMM', {locale: localeMap[locale]}),
    );
  }, [formatDate, locale, value]);

  useEffect(() => {
    if (resetCalendar) {
      setValue(value);
      setValueInput(
        format(new Date(), formatDate, {locale: localeMap[locale]}),
      );
      setTagDateFormatted(
        format(value as Date, 'd MMM', {locale: localeMap[locale]}),
      );
    }
  }, [formatDate, locale, resetCalendar, value]);

  return (
    <LocalizationProvider
      adapterLocale={localeMap[locale]}
      utils={DateFnsUtils}
      dateAdapter={AdapterDateFns}>
      <CalendarContainer data-testid={dataTestId}>
        {label ? (
          <TextLabel variant="Smallbold" color="gray" colorType="800">
            {label}
            {required ? <span className="required">*</span> : ''}
          </TextLabel>
        ) : (
          <div />
        )}

        <TextField
          fullWidth
          sx={TextFieldStyle}
          variant="outlined"
          value={valueInput}
          data-testid="calendar-text-field"
          onClick={event => {
            onClick();
            openDateRangePicker(
              event as unknown as MouseEvent<HTMLDivElement, MouseEvent>,
            );
          }}
          InputProps={{
            endAdornment: (
              <Icon
                fill={theme.colors.secondary['700']}
                width="20px"
                height="20px"
              />
            ),
          }}
        />
        <Popover
          open={popOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={PopoverStyled}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
          <Box sx={CalendarProps(theme)} role="calendar">
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              views={views}
              label={label}
              openTo={openTo}
              minDate={minDate}
              maxDate={maxDate}
              value={seledvalue}
              disabled={disabled}
              orientation="landscape"
              disablePast={disablePast}
              disableHighlightToday={false}
              disableFuture={disableFuture}
              renderInput={params => <TextField {...params} />}
              onChange={handleChange}
              shouldDisableDate={(dateParam: Date | StartEnd) =>
                handleShouldDisableDate(dateParam, disableSpecificDates) ||
                handleShouldDisableDays(dateParam, disableDays)
              }
              InputProps={{
                endAdornment: (
                  <Icon
                    fill={theme.colors[textColor][textColorType]}
                    width="30px"
                    height="30px"
                  />
                ),
              }}
            />
          </Box>
          {bottomTag ? (
            <TagContainer>
              <Tag
                label={`${bottomTag} ${tagDateFormatted}`}
                dataTestId="tag_calendar"
                iconExitActive
                variant="info"
                size="large"
              />
            </TagContainer>
          ) : null}
        </Popover>
      </CalendarContainer>
    </LocalizationProvider>
  );
};
