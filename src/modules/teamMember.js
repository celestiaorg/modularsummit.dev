import * as React from "react"
import TeamMemberImage from "../components/team-member-image";

export default class TeamMember extends React.Component {
    render() {
        return <div className={'member'}>
            <div className={'image mx-auto'}>
                <div className={'overlay'}/>
                <TeamMemberImage alt={this.props.member.name} filename={this.props.member.image}/>
            </div>
            <div className='name'>{this.props.member.name}</div>
            <div className='company'>{this.props.member.org}</div>
            <div className='title'>{this.props.member.title}</div>
        </div>
    }
}
