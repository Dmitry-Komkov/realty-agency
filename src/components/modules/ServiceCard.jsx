import React, { useState } from "react"
import { PropTypes } from "prop-types"
import { nanoid } from "nanoid"
import tw, { styled, css } from "twin.macro"
import Typography from "../elements/Typography"
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { showModal } from "../../redux/slices/modalSlice"
import Icon from "../../assets/icons/business-deal.svg"
import UpIcon from "../../assets/icons/up.svg"

const Wrapper = tw.div`bg-white shadow-md p-8 rounded-lg`

const Box = tw.div``
const IconBox = styled.div`
  ${tw`p-2 rounded inline-flex mb-4`};
  background: rgba(255, 63, 1, 0.15);

  svg {
    ${tw`text-accent fill-current w-8 h-8`}
  }
`

const List = styled.ul(() => [
  tw`my-4 list-none`,
  css`
    & li:not(:last-child) {
      ${tw`mb-2`}
    }
  `,
])

const StyledButton = styled.button(({opened}) => [
  tw`py-1 mb-4 rounded text-accentDarker flex items-center`,
  css`
    svg {
      ${tw`stroke-current w-[20px] h-[20px] rotate-180`}
    }
  `,
  opened && css`
    svg {
      ${tw`rotate-0`}
    }
  `
])

const ServiceCard = ({ title, list }) => {
  const defaultListItems = 3
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [moreButtonText, setMoreButtonText] = useState('Весь список услуг')
  const shortList = list.slice(0, defaultListItems)

  const handleMoreButtonClick = () => {
    setVisible(!visible)

    if (visible) {
      setMoreButtonText('Весь список услуг ')
    } else {
      setMoreButtonText('Скрыть')
    }
  }

  return (
    <Wrapper>
      <Box>
        <IconBox>
          <Icon />
        </IconBox>
        <Typography as="h4" variant="h4" tw="uppercase">
          {title}
        </Typography>
        <List>
          {!visible
            ? shortList.map(item => <li key={nanoid()}>{item}</li>)
            : list.map(item => <li key={nanoid()}>{item}</li>)}
        </List>
        {list.length > 3 &&
          <div>
            <StyledButton onClick={handleMoreButtonClick} opened={visible}>
              {moreButtonText}
              <UpIcon />
            </StyledButton>
          </div>
        }
        <Button
          color="secondary"
          onClick={() =>
            dispatch(
              showModal({
                title: "Получить консультацию по услуге",
                hiddenField: `Форма получить услугу (${title}) недвижимости`,
              })
            )
          }
        >
          Заказать услугу
        </Button>
      </Box>
    </Wrapper>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}
