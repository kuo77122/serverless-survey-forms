/**
 * @module ActionTypes
 * Action constants
 **/

// loading
export const SET_LOADING = 'SET_LOADING';

// token
export const SET_TOKEN = 'SET_TOKEN';
export const EXPIRED_TOKEN = 'EXPIRED_TOKEN';

// account
export const RECIEVE_ACCOUNT_SUCCESS = 'RECIEVE_ACCOUNT_SUCCESS';
export const RECIEVE_ACCOUNT_FAILURE = 'RECIEVE_ACCOUNT_FAILURE';

// questions
export const ADD_QUESTION = 'ADD_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';
export const COPY_QUESTION = 'COPY_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const EXCHANGE_QUESTION = 'EXCHANGE_QUESTION';
export const ADD_PAGE = 'ADD_PAGE';
export const COPY_PAGE = 'COPY_PAGE';
export const EXCHANGE_PAGE = 'EXCHANGE_PAGE';
export const EDIT_PAGE_TITLE = 'EDIT_PAGE_TITLE';
export const DELETE_PAGE = 'DELETE_PAGE';
export const REQUEST_SAVE_QUESTION = 'REQUEST_SAVE_QUESTION';
export const SAVE_QUESTIONS_SUCCESS = 'SAVE_QUESTIONS_SUCCESS';
export const SAVE_QUESTIONS_FAILURE = 'SAVE_QUESTIONS_FAILURE';
export const REQUEST_GET_QUESTION = 'REQUEST_GET_QUESTION';
export const RECIEVE_QUESTIONS_SUCCESS = 'RECIEVE_QUESTIONS_SUCCESS';
export const RECIEVE_QUESTIONS_FAILURE = 'RECIEVE_QUESTIONS_FAILURE';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const SET_SURVEY_POLICY = 'SET_SURVEY_POLICY';
export const INIT_SURVEY_POLICY = 'INIT_SURVEY_POLICY';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const SET_EDITABLE = 'SET_EDITABLE';
export const SET_NOT_EDITABLE = 'SET_NOT_EDITABLE';
export const SET_SURVEY_L10N = 'SET_SURVEY_L10N';
export const SET_SURVEY_VERSION = 'SET_SURVEY_VERSION';
export const REQUEST_DELETE_L10N = 'REQUEST_DELETE_L10N';
export const RECEIVE_DELETE_L10N = 'RECEIVE_DELETE_L10N';
export const REQUEST_IMPORT_L10N = 'REQUEST_IMPORT_L10N';
export const RECEIVE_IMPORT_L10N = 'RECEIVE_IMPORT_L10N';

// dropQuestion
export const SET_DROP_QUESTION = 'SET_DROP_QUESTION';
export const STOP_DROP_QUESTION = 'STOP_DROP_QUESTION';

// edit question
export const SET_EDITQUESTION = 'SET_EDITQUESTION';
export const STOP_EDITQUESTION = 'STOP_EDITQUESTION';
export const UPDATE_EDITQUESTION = 'UPDATE_EDITQUESTION';

// edit page
export const SET_EDITPAGE = 'SET_EDITPAGE';
export const STOP_EDITPAGE = 'STOP_EDITPAGE';

// order page
export const SET_ORDERPAGE = 'SET_ORDERPAGE';

// get survey list
export const REQUEST_SURVEYS_LIST = 'REQUEST_SURVEYS_LIST';
export const RECIEVE_SURVEYS_SUCCESS = 'RECIEVE_SURVEYS_SUCCESS';
export const RECIEVE_SURVEYS_FAILURE = 'RECIEVE_SURVEYS_FAILURE';

// selected surveys
export const ADD_SELECTED_SURVEYS = 'ADD_SELECTED_SURVEYS';
export const REMOVE_SELECTED_SURVEYS = 'REMOVE_SELECTED_SURVEYS';
export const RECIEVE_DELETE_SURVEYS_SUCCESS = 'RECIEVE_DELETE_SURVEYS_SUCCESS';
export const RECIEVE_DELETE_SURVEYS_FAILURE = 'RECIEVE_DELETE_SURVEYS_FAILURE';
export const REQUEST_DELETE_SURVEYS = 'REQUEST_DELETE_SURVEYS';
export const DELETE_ALLFEEDBACKS_SUCCESS = 'DELETE_ALLFEEDBACKS_SUCCESS';
export const DELETE_ALLFEEDBACKS_FAILURE = 'DELETE_ALLFEEDBACKS_FAILURE';
export const REQUEST_DELETE_ALLFEEDBACKS = 'REQUEST_DELETE_ALLFEEDBACKS';

// edit subject
export const EDIT_SUBJECT = 'EDIT_SUBJECT';

// subject
export const SET_SUBJECT = 'SET_SUBJECT';
export const REQUEST_SET_SUBJECT = 'REQUEST_SET_SUBJECT';
export const SET_SUBJECT_SUCCESS = 'SET_SUBJECT_SUCCESS';
export const SET_SUBJECT_FAILURE = 'SET_SUBJECT_FAILURE';

// survey ID
export const SET_SURVEYID = 'SET_SURVEYID';

// preview & previewID
export const SET_PREVIEW = 'SET_PREVIEW';
export const SET_CHANGE_PREVIEW = 'SET_CHANGE_PREVIEW';
export const STOP_PREVIEW = 'STOP_PREVIEW';

// report
export const REQUEST_REPORT = 'REQUEST_REPORT';
export const RECIEVE_REPORT_SUCCESS = 'RECIEVE_REPORT_SUCCESS';
export const RECIEVE_REPORT_FAILURE = 'RECIEVE_REPORT_FAILURE';
export const REQUEST_COPY_SURVEY = 'REQUEST_COPY_SURVEY';
export const POST_COPIEDSURVEY_SUCCESS = 'POST_COPIEDSURVEY_SUCCESS';
export const POST_COPIEDSURVEY_FAILURE = 'POST_COPIEDSURVEY_FAILURE';

// users
export const REQUEST_USERS_LIST = 'REQUEST_USERS_LIST';
export const RECIEVE_USERS_SUCCESS = 'RECIEVE_USERS_SUCCESS';
export const RECIEVE_USERS_FAILURE = 'RECIEVE_USERS_FAILURE';
export const REQUEST_CHANGE_ROLE = 'REQUEST_CHANGE_ROLE';
export const RECIEVE_CHANGE_ROLE_SUCCESS = 'RECIEVE_CHANGE_ROLE_SUCCESS';
export const RECIEVE_CHANGE_ROLE_FAILURE = 'RECIEVE_CHANGE_ROLE_FAILURE';

// selected user
export const SET_SELECTED_USER = 'SET_SELECTED_USER';

// webpage
export const SET_WEBPAGE = 'SET_WEBPAGE';

// popup
export const SET_POPUP = 'SET_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

// selected l10n
export const ADD_SELECTED_L10N = 'ADD_SELECTED_L10N';
export const REMOVE_SELECTED_L10N = 'REMOVE_SELECTED_L10N';
