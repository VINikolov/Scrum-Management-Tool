import apiBaseUrl from '../../../ApplicationSettings';
import urls from '../../../ApiUrls';

export function PostData(type, userData) {
    return new Promise((resolve, reject) => {
        fetch(apiBaseUrl+urls.userManagementUrls.LoginUser+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
   });
}