import { fetchPositionData }  from '../actions/fetchPositionData'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { positionData: state.positionData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPositionData: (data) => {
      dispatch(fetchPositionData.fetchPositionData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
