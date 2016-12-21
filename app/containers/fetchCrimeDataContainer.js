import { fetchCrimeData }  from '../actions/fetchCrimeData'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { crimeData: state.crimeData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrimeData: (data) => {
      dispatch(fetchCrimeData.fetchCrimeData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
