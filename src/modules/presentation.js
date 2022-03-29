import * as React from "react"

export default class Presentation extends React.Component {
    render() {
        return <div className={this.props.presentation.type === 'Break' ? 'presentation schedule-pause' : this.props.index === 0 ? 'presentation first': 'presentation'}>
            <div className={'inner'}>
                <div className={'row justify-content-between align-items-center'}>
                    <div className={'col-auto'}>
                        <div className={'title'}>{this.props.presentation.title}</div>
                        <div className={'time'}>{this.props.presentation.time}</div>
                        <div className={'speakers'}><span>Speakers: </span> {this.props.presentation.speakers}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}
