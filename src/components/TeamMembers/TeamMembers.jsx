import PropTypes from 'prop-types';
import TeamMembersItem from './TeamMembersItem'
import {List} from './TeamMembers.styled'
export default function TeamMembers({ teamMembers }) {
   
    return (
        <List>
            {teamMembers.map(({ id, avatar, name, profession, links }) => (
                 <TeamMembersItem
                    key={id}
                    id={id}
                    avatar={avatar}
                    name={name}
                    profession={profession}
                    links={links}
                />
            ))}
        </List>
    );
}


TeamMembers.propTypes = {
    temMembers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            links: PropTypes.shape({
                instagram: PropTypes.string.isRequired,
                twitter: PropTypes.string.isRequired,
                facebook: PropTypes.string.isRequired,
                linkedin: PropTypes.string.isRequired,
            })
        })
    ),
    
};