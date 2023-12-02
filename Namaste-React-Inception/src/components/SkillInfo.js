import React from "react";

class SkillInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
   
  }
  
  render() {
    const { skill, excellency } = this.props;
    const { count } = this.state;
    function incCount() {
        this.setState({
            count: count+1
        })
    }
    return (
      <>
        <div>
          <h1>
            {skill} : {excellency}
            
          </h1>
          <button onClick={()=>{
            this.setState({
                count: count+1
            })
          }}> Increase Count</button>  : {count}
        </div>
      </>
    );
  }
}

export default SkillInfo;
