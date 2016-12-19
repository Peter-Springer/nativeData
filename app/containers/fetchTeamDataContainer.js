import { fetchTeamData }  from '../actions/fetchTeamData'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { teamData: state.teamData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeamData: (data) => {
      dispatch(fetchTeamData.fetchTeamData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
