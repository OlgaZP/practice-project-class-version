import http from '../interceptor';
import queryString from 'query-string';

export const registerRequest = data => http.post('registration', data);
export const loginRequest = data => http.post('login', data);
export const getUser = () => http.post('getUser');

export const setNewOffer = data => http.post('setNewOffer', data);
export const setOfferStatus = data => http.post('setOfferStatus', data);
export const downloadContestFile = data =>
  http.get(`downloadFile/${data.fileName}`);

export const changeMark = data => http.post('changeMark', data);
export const getPreviewChat = () => http.post('getPreview');
export const getDialog = data => http.post('getChat', data);

export const updateUser = data => http.post('updateUser', data);
export const newMessage = data => http.post('newMessage', data);
export const changeChatFavorite = data => http.post('favorite', data);
export const changeChatBlock = data => http.post('blackList', data);
export const getCatalogList = data => http.post('getCatalogs', data);
export const addChatToCatalog = data => http.post('addNewChatToCatalog', data);
export const createCatalog = data => http.post('createCatalog', data);
export const deleteCatalog = data => http.post('deleteCatalog', data);
export const removeChatFromCatalog = data =>
  http.post('removeChatFromCatalog', data);
export const changeCatalogName = data => http.post('updateNameCatalog', data);
//contests
export const dataForContest = data =>
  http.post('/contests/dataForContest', data);

export const updateContest = data => http.post('/contests/updateContest', data);

export const getCustomersContests = data =>
  http.get(
    `/contests/customers?limit=${data.limit}&offset=${data.offset}&status=${data.contestStatus}`
  );

export const getActiveContests = data =>
  http.get(`/contests?${queryString.stringify(data)}`);
// offset,
// limit,
// typeIndex,
// contestId,
// industry,
// awardSort,
// ownEntries,

export const getContestById = ({ contestId }) =>
  http.get(`/contests/${contestId}`);

//payment for buyer
export const payMent = data => http.post('pay', data.formData);

//cashout for creative
export const cashOut = data => http.post('cashout', data);

// const transactions = [
//   {
//     id: 1,
//     date: '2021-09-01',
//     type: 'INCOME',
//     amount: 100,
//   },
//   {
//     id: 2,
//     date: '2021-08-25',
//     type: 'INCOME',
//     amount: 50,
//   },
//   {
//     id: 3,
//     date: '2021-09-03',
//     type: 'INCOME',
//     amount: 120,
//   },
//   {
//     id: 4,
//     date: '2021-08-11',
//     type: 'OUTCOME',
//     amount: 100,
//   },
//   {
//     id: 5,
//     date: '2021-08-17',
//     type: 'INCOME',
//     amount: 50,
//   },
// ];

export const getTransactions = data => http.get('/transactions', data);
