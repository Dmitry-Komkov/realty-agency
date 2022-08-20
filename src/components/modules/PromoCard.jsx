import React from 'react';
import PropTypes from 'prop-types';
import tw, {css, styled} from "twin.macro";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import Typography from "../elements/Typography";

const Wrapper = tw.div``
const Grid = tw.div`grid h-full shadow-md rounded-lg overflow-hidden`
const Box = styled.div(() => [
  tw`mt-10 z-10 w-full`,
  css`
    grid-area: 1/-1;
  `
])
const TextBox = tw.div`w-11/12 bg-whiteTransparent py-2 px-4 rounded-r-lg font-medium`

const PromoCard = ({text, link}) => {
  return (
    <Wrapper>
      <Link to={link}>
        <Grid>
          <StaticImage
            src="../../assets/images/content/promo-card-bg.jpeg"
            alt="Каталог недвижимости в чехове"
            layout="fullWidth"
            css={css`
              grid-area: 1/-1;
              ${tw`opacity-60`}
            `}
          />
          <Box>
            <TextBox>
              <Typography variant="h4" tw="font-bold">{text}</Typography>
            </TextBox>
          </Box>
        </Grid>
      </Link>
    </Wrapper>
  );
};

PromoCard.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PromoCard;
