import {
    CAP_NHAT_CHUOI,
    NHAN_HINH,
    YEU_CAU_HINH,
    NHAN_THEM_HINH
} from "../Actions"

const initState = {
    IMAGES: [],
    maxPage: null,
    page: 1,
    query: "",
    isLoading: false,
}


export default function timKiem(state = initState, action) {
    switch(action.type) {
        case YEU_CAU_HINH:
            return Object.assign({},state,{
                isLoading: true,
            })
        case NHAN_HINH:
            return Object.assign({}, state, {
                IMAGES: action.data.photo,
                maxPage: action.data.pages,
                isLoading: false
            })
        case CAP_NHAT_CHUOI: 
            return Object.assign({}, state, {
                query: action.chuoi,
            })
        case NHAN_THEM_HINH:
        console.log(action)
            return Object.assign({},state,{
                IMAGES: state.IMAGES.concat(action.data.photo),
                page: action.data.page
            })
        default:
            return state
    }
}