import {connect} from 'react-redux'

import { timKiemHinh,capNhatChuoi } from '../Actions';
import MyNavbar from '../components/Navbar';

function mapStateToProps(state) {
    return {
        query: state.timKiem.query,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        timKiem: (chuoi) => dispatch(timKiemHinh(chuoi)),
        capNhatChuoi: (chuoi)=> dispatch(capNhatChuoi(chuoi))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MyNavbar)
