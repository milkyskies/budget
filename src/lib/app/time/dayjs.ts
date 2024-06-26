// eslint-disable-next-line no-restricted-imports
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import minMax from 'dayjs/plugin/minMax';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);
dayjs.locale('ja');
dayjs.tz.setDefault('Asia/Tokyo');

export default dayjs;
