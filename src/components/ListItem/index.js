import {Item, ProjectImag, Paragraph} from './styledComponents'

const ListItem = props => {
  const {itemDetails} = props
  const {imageUrl, name} = itemDetails
  return (
    <Item>
      <ProjectImag src={imageUrl} alt={name} />
      <Paragraph>{name}</Paragraph>
    </Item>
  )
}
export default ListItem
