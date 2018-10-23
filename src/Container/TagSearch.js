import {connect} from 'react-redux'
import TagSearch from '../components/TagSearch'
import { taiThemHinh } from '../Actions';


function mapStateToProps(state) {
    return {
        IMAGES: state.timKiem.IMAGES,
        maxPage: state.timKiem.maxPage,
        page: state.timKiem.page,
        query: state.timKiem.query,
        showLoading: state.timKiem.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        taiThem: (page,maxPage,chuoi) => dispatch(taiThemHinh(page,maxPage,chuoi))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(TagSearch)