
export const generateQueryParameter = (params) => {
  let query='';
  for(let key in params){
      const value = params[key];
      if(value===null || value===''){
          continue;
      }
      query = query.concat('&');
      if(Array.isArray(value)){
          query = query.concat(spreadListParameter(key, value));
      }else{
          query = query.concat(`${key}=${encodeURI(value)}`)
      }
  }
  return query.substr(1);
};

/**
 *
 * @param paramName = cdNo
 * @param arr [1,2,3,4,5]
 * @returns cdNo=1&cdNo=2&cdNo=3&cdNo=4&cdNo=5
 */

export const spreadListParameter = (paramName, arr) => {
    if(Array.isArray(arr)){
        let params = '';
        for(let idx = 0; idx < arr.length; idx++ ){
            params = params.concat(`${paramName}=${arr[idx]}`);
            if(idx != (arr.length-1)){
                params = params.concat("&")
            }
        }
        return params;
    }
    return '';
};