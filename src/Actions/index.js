
export const YEU_CAU_HINH = 'YEU_CAU_HINH'
export const NHAN_HINH = 'NHAN_HINH'
export const CAP_NHAT_CHUOI ="CAP_NHAT_CHUOI"
export const NHAN_THEM_HINH = 'NHAN_THEM_HINH'

export function yeuCauHinh() {
    return {
        type: YEU_CAU_HINH,
    }
}

export function nhanHinh(data) {
    return {
        type: NHAN_HINH,
        data
    }
}

export function capNhatChuoi(chuoi) {
    return {
        type: CAP_NHAT_CHUOI,
        chuoi
    }
}

export function timKiemHinh(chuoi) {
    return dispatch => {
        dispatch(yeuCauHinh())
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8808c69017e5203bff0d704643c98a50&tags=${chuoi}&extras=owner_name%2C+views%2Curl_n&per_page=20&page=1&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(json => dispatch(nhanHinh(json.photos)))
    }
}

export function taiThemHinh(page,maxPage,chuoi) {
    if(page > maxPage)
        return {
            type: 'NONE'
        }
    return dispatch => {
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8808c69017e5203bff0d704643c98a50&tags=${chuoi}&extras=owner_name%2C+views%2Curl_n&per_page=20&page=${page}&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(json => dispatch(nhanThemHinh(json.photos)))
    }
}

export function nhanThemHinh(data) {
    return {
        type: NHAN_THEM_HINH,
        data
    }
}