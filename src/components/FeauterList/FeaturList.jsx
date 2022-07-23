import PropTypes from 'prop-types'
import { List, Title, Li } from './FeauterList.styled'
export default function FeauterList({ feauter }) {
     
    return (
       <List>
            {feauter.map(({ id, title, text, isRed }) => {
                return <Li key={id} isRed={isRed }>
                <Title> {title}</Title>
                <p>{text }</p>
                </Li>
            })}
        </List>
    )
}

FeauterList.protoTypes = {
    feauter: PropTypes.arrayOf(
        PropTypes.shape({
         id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          isRed: PropTypes.bool.isRequired
        })
    ),
}