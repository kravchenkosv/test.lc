import React from 'react';

class Lighter extends React.Component {
    constructor() {
        super();
        this.state = {
            speed: this.getRandomInt(1000,2000),
            step: 5,
            top: this.getRandomInt(10,90),
            left: this.getRandomInt(10,90)
        };
        this.getRandomInt = this.getRandomInt.bind(this);
        this.step = this.step.bind(this);
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    step(){
        let lng = this.getRandomInt(1, 89),
            rand = this.getRandomInt(1, 4),
            y = this.state.step*Math.cos(lng),
            x = this.state.step*Math.sin(lng),
            top = this.state.top,
            left = this.state.left;

        if(x < 0) {
            x = x*(-1);
        }

        if(y < 0) {
            y = y*(-1);
        }

        switch (rand){
            case 1:
                top = top - y;
                left = left - x;
                break;
            case 2:
                top = top - y;
                left = left + x;
                break;
            case 3:
                top = top + y;
                left = left - x;
                break;
            case 4:
                top = top + y;
                left = left + x;
        }

        if(top > 100) {
            top = top - 2*y;
        } else if (top < 0) {
            top = top + 2*y;
        }

        if(left > 100) {
            left = left - 2*x;
        } else if (left < 0) {
            left = left + 2*x;
        }

        this.setState({
            top: top,
            left: left
        });
    }
    componentDidMount(){
        let self = this;
        setInterval(function () {
            self.step();
        }, self.state.speed)
    }
    render() {
        return (
            <div className="lighter" style={{top: this.state.top + '%', left: this.state.left + '%'}}></div>
        )
    }
}

export default Lighter;