
import {Item, Text} from './TeamMembersItem.styled'
import SotialLink from "components/SotialLinks/SotialLink"

export default function TeamMembersItem({ avatar, name, profession, links  }) {
  return (
    <Item>
      <img src={avatar} alt={name} width="270" height="170"></img>
      <h3>{name}</h3>
      <Text>{profession}</Text>
      <SotialLink links={links} />
    </Item>
  )
}