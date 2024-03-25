import React,{Component} from 'react';

class Counter extends Component{
	state={
		count:0,
		formatcount(){
			return this.count===0?<h1>Zero</h1>:this.count;
		},
		
	};
	styles={
		fontWeight:"bold"
	}
	getbadges(){
		let classes="btn m-2 btn-"
		 classes+=(this.count===0)?"warning":"primary";
		 return classes;
	}
	render(){
		// let classes="btn m-2 btn-"
		//  classes+=(this.count===0)?"warning":"primary";
		// console.log(classes);
		return (<React.Fragment><span style={this.styles} className={this.getbadges()}>{this.state.formatcount()}</span>
		<button className="btn btn-secondary btn-sm">Increement</button>
</React.Fragment>);//we cannot add the another element in this since jsx cannot compiled
	};
};
export default Counter;
