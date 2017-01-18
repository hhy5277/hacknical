import moment from 'moment';
// moment.locale('zh-cn');

const formatDate = (date) => (format) => moment(date).format(format);
const getSeconds = (date) => parseInt(formatDate(new Date(date))('X'));

/**
 * [getValidateDate]
 * @method getValidateDate
 * @param  {[string]}        formatDate [2017-01-18T09:23:42+08:00]
 * @return {[string]}                   [2017-01-18 09:00]
 */
export const getValidateDate = (formatDate) => {
  const [date, time] = formatDate.split('T');
  if (!time) {
    return date
  }
  return `${date} ${time.split(':').slice(0, 1)[0]}:00`;
};

export default {
  getSeconds,
  getFormatData: () => formatDate()(),
  getDateNow: () => formatDate()('l'),
  getHourNow: () => formatDate()('H'),
  getDateAfterDays: (days) => moment().add(parseInt(days), 'days').format('L'),
  getDateBeforeYears: (years) => moment().add(-parseInt(years), 'years').format('L')
}
