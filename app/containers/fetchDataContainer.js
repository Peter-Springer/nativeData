import { fetchData }  from '../actions/fetchData'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { allData: state.allData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: (data) => {
      dispatch(fetchData.fetchAllData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
