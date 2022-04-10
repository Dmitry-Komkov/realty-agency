import tw from "twin.macro";
import Link from "gatsby-link";

const ButtonLink = tw(Link)`
  bg-primary text-white border-primary hover:bg-primaryDarker hover:border-primaryDarker rounded-lg transition duration-300 ease-in-out text-base px-6 py-1.5
`

export default ButtonLink
