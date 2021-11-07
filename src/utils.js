import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";

export const setStorageItem = (key, item) => {
  return AsyncStorage.setItem(key, item);
};

export const getStorageItem = (key) => {
  return AsyncStorage.getItem(key);
};

export const removeStorageItem = (key) => {
  return AsyncStorage.removeItem(key);
};

export const convertUnixTimeStampToDate = (timestamp, format) => {
    let time = timestamp * 1000;
    let formatDate = format ? format : 'MM-DD-YYYY';
    return moment(time).format(formatDate);
}

export const convertDateToTimeStamp = (date, timeOfDay) =>{
    if(!timeOfDay){
        return moment(date).unix();
    }else{
        const dateUnix = timeOfDay === 'start'?
         moment(date).startOf('day').unix() : moment(date).endOf('day').unix()
         return dateUnix
    }
}

export  const brandAmount = (number) => {
    const num = number || 0
    return num.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
}

