export const POST = 'POST';
export const GET = 'GET';
export const DELETE = 'DELETE';
export const PUT = 'PUT';

//export const HOSTNAME = '172.16.1.129'
//export const HOSTNAME = '172.16.1.42';
export const HOSTNAME = 'localhost'
//export const PORT = 8881;
export const PORT = 8080
export const PATH_METHOD_AUTHENTICATE = '/authenticate';
export const PATH_METHOD_ALARM_LOAD = '/alarm/load';
export const PATH_METHOD_POST_LOAD = '/post/load';
export const PATH_METHOD_POST_NEW = '/post/new';
export const PATH_METHOD_DEVICE_ADD = '/device/new';
export const PATH_METHOD_DEVICE_MODIFY = '/device/modify';
export const PATH_METHOD_DEVICE_LOAD = '/device/load/';
export const PATH_METHOD_DEVICE_LOAD_ALL = '/device/load/all';
export const PATH_METHOD_DEVICE_EVENTS_LOAD = '/event/load/';
export const PATH_METHOD_ALARM_TYPE_LOAD_ALL = '/alarm/type/load/all';
export const PATH_METHOD_ALARM_RESOLVE = '/alarm/resolve';
export const PATH_METHOD_LOAD_RESOLVED_ALARM = '/alarm/resolve/load/';
export const PATH_METHOD_EVENT_LOAD_ALARM = '/event/load/alarm/';
export const PATH_METHOD_PATIENT_LOAD = '/patient/load';
export const PATH_METHOD_AUTH_AUTHENTICATE = '/auth/authenticate';
export const HTTPS = 'HTTPS://';
export const HTTP = 'HTTP://';
export const WS = '/ws';
export const DELIMITER = ':';
export const ALARM_MAIN_TOPIC = '/alarm/new';

export const PAGE_STATUS_200 = 200;
export const PAGE_STATUS_500 = 500;
export const PAGE_STATUS_UNDEFINED = 'undefined';

export const APPLICATION_JSON = 'application/json';
export const JSON = 'json';
export const BEARER = 'Bearer ';

export const ENCODING_UTF8 = 'utf8';
export const SESSION_TIME_IN_SECONDS = 8;
export const SECONDS_IN_MINUTE = 60;
export const MILLISECONDS_IN_SECOND = 1000;

export const TIME_OF_LOG_IN_POP_UP = 3500;
export const TIME_OF_ASKING_QUESTION_POP_UP = 3500;
export const TIME_OF_SHOWING_UP_ADDED_COMMENTS = 1500;
export const TIME_OF_WAITING_AFTER_ASKING = 1500;
export const TIME_OF_NEW_ALARM_POP_UP = 15000;
export const TIME_OF_RESOLVED_ALARM = 5000;

export const INDEX_OF_FIRST_POAGE = 0;
export const MAX_INT_SIZE = 32677;

export const UTC_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const UTC_MIN_TIME_DATA = "2001-01-01 00:00:00";
export const MINUTES = "minutes";
export const TWO_HOURS_OFFSET_IN_MINUTES = -120;
export const SIX_HOURS_OFFSET_IN_MINUTES = -360;
export const TWENY_FOUR_HOURS_OFFSET_IN_MINUTES = -1440;
export const WEEK_OFFSET_IN_MINUTES = -34560;

export const JWT_TOKEN = 'jwtToken';
export const LANGUAGE_DEFAULT = 'EN';
export const RU = 'RU';
export const EN = 'EN';
export const I18 = 'i18';
export const MIN_NUMBERS_OF_CHARACTERS_IN_QUESTION = 20;
export const MIN_NUMBERS_OF_CHARACTERS_IN_COMMENT = 5;
export const EMPTY_STRING = '';
export const EMPTY_STRING_OBJECT = '{}';
export const STRING_DASH = '-';

export const POP_UP_MESSAGE_TYPE_PRIMARY = 'primary';

export const ASK_QUESTION_PAGE_PATH = '/askquestion';
export const MY_QUESTION_PAGE_PATH = '/myquestions';
export const FIND_QUESTION_PAGE_PATH = '/findquestion';
export const POST_PAGE_PATH = '/post';
export const EMPTY_PAGE_PATH = '/';
export const REGISTARATION_PAGE_PATH = 'https://golos.io/create_account';

export const TOP_QUESTIONS = 'Top quastions';
export const ASK_QUESTION = 'Ask quastion';
export const MY_QUESTIONS = 'My quastions';
export const FIND_QUESTION = 'Find question';


export const DEFAULT_ORDERING_PARAMETERS = {
    'page': 0,
    'size': 10,
    'orders' : [
        {
            'property' : 'resolved',
            'priority' : 1,
            'direction' : 'ASC'
        },
        {
            'property' : 'alarmDate',
            'priority' : 2,
            'direction' : 'DESC'
        }
    ]
};

export const DEFAULT_COORDINATES = {
    latitude: 39,
    longitude: -100
};

export const DEFAULT_FILTERING_PARAMETERS = {
    page: 0,
    size: 5,

    iso8601FromFilter: '',
    dateFromFilter: null,
    timeFromFilter: '00:00:00',
    iso8601ToFilter: '',
    dateToFilter: null,
    timeToFilter: '00:00:00',
    patientNameFilter: '',
    deviceIdFilter: null,
    alarmTypeFilter: null,
    batteryVoltageFromFilter: '',
    batteryVoltageToFilter: '',
    speedFromFilter: '',
    speedToFilter: '',
    resolvedFilter: null
};

export const FILTERS_OF_NAME = {
    PatientName:'PatientName',
    DeviceId:'DeviceId',
    AlarmType:'AlarmType',
    DateTimeAll:'DateTimeAll',
    BatterryVoltageAll:'BatterryVoltageAll',
    SpeedAll:'SpeedAll',
    ResolveAlarm:'ResolveAlarm',
};

export const DEVICE_DEFAULT_ORDERING_PARAMETERS = {
    'page': 0,
    'size': 10,
    'orders' : [
        {
            'property' : 'deviceId',
            'priority' : 1,
            'direction' : 'ASC'
        },

    ]
};

export const PATIENT_DEFAULT_ORDERING_PARAMETERS = {
    'page': 0,
    'size': 2,
    'orders' : [
        {
            'property' : 'city',
            'priority' : 1,
            'direction' : 'ASC'
        },

    ]
};
