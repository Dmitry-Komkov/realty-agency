import React from 'react'
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid'
import tw, { styled, css } from 'twin.macro';
import Typography from '../elements/Typography';
import Button from '../elements/Button';

const Wrapper = tw.div`grid grid-cols-3 gap-4`

const Box = tw.div`col-start-2 col-end-4 lg:( flex flex-col justify-between items-start )`

const List = styled.ul(() => [
  tw`my-4 list-disc pl-4`,
  css`
    & li:not(:last-child) {
      ${tw`mb-2`}
    }
  `
])

const ServiceCard = ({ img, title, list }) => {
  return (
    <Wrapper>
      {img}
      <Box>
        <Typography as="h4" variant="h4" tw="uppercase">{title}</Typography>
        <List>
          {
            list.map(item => (
              <li key={nanoid()}>{item}</li>
            ))
          }
        </List>
        <Button color="secondary">Заказать услугу</Button>
      </Box>
    </Wrapper>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}
