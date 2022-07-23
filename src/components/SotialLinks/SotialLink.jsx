import { ListSotial, Icon, ItemSotial, LinkSotial } from './SotialLink.styled';

import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

export default function SotialLink({
  links: { instagram, twitter, facebook, linkedin },
}) {
  return (
    <ListSotial>
      <ItemSotial>
        <LinkSotial href={instagram}>
          <Icon>
            <FaInstagramSquare size={20} />
          </Icon>
          Instagram
        </LinkSotial>
      </ItemSotial>
      <ItemSotial>
        <LinkSotial href={twitter}>
          <Icon>
            <FaTwitter size={20} />
          </Icon>
          Twitter
        </LinkSotial>
      </ItemSotial>
      <ItemSotial>
        <LinkSotial href={facebook}>
          <Icon>
            {' '}
            <FaFacebook size={20} />
          </Icon>
          Facebook
        </LinkSotial>
      </ItemSotial>
      <ItemSotial>
        <LinkSotial href={linkedin}>
          <Icon>
            {' '}
            <FaLinkedin size={20} />
          </Icon>
          LinkedIn
        </LinkSotial>
      </ItemSotial>
    </ListSotial>
  );
}
