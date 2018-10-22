const apiUrl = 'http://api.postcodes.io';

export const fetchAddressByPostCode = code => fetch(`${apiUrl}/postcodes/${code}`).then(res => res.json());
