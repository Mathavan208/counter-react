import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.handleEvent=this.handleEvent.bind(this);
    }
    state = {
        count: 0,
        image: './public/tree.jpg',
        tags:['red','green','blue']
    };

    formatcount() {
        return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
    }

    styles = {
        fontWeight: "bold"
    };


handleEvent(product)
{
    console.log(product);
    console.log("increemented",this.state.count++);
    this.setState({count:this.state.count++});
}





    getbadges() {
        let classes = "btn m-2 btn-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
renderTags(){
    if(this.state.tags.length===0) return <p>No tags are present</p>

return (<ul>
                       {this.state.tags.map(tags=> <li key={tags}>{tags}</li>  )}
                </ul>);
}




    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getbadges()}>
                    {this.formatcount()}
                </span>
                <button className="btn btn-secondary btn-sm" onClick={()=> this.handleEvent({id:1})}>Increment</button>
                {this.state.tags.length===0&&"no tags are present"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default Counter;
