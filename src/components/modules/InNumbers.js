import React from 'react'
import tw from 'twin.macro'
import { PropTypes } from 'prop-types';

const Wrapper = tw.div`bg-primaryDark text-white p-6 grid grid-cols-2 gap-6 justify-center lg:(px-16 grid-cols-4)`
const Num = tw.span`text-2xl font-bold text-primary lg:text-3xl`

const InNumbers = ({ stats }) => {
  return (
    <Wrapper>
      {
        stats.map(stat => {
          return (
            <div key={stat.id}>
              <Num>{stat.num}</Num>
              <p>{stat.desc}</p>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

export default InNumbers

InNumbers.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}
