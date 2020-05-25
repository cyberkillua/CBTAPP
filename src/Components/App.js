import Main from "./Main";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as actionCreators from "../redux/actions"
import {withRouter } from "react-router"

function mapStateToProps(state) {
  return {
    Questions: state.Questions,
    Timer: state.Timer
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const App =withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
export default App;
