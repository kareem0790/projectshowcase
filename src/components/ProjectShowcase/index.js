import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ListItem from '../ListItem'

import {
  AppContainer,
  HeaderContainer,
  WebsiteLogo,
  ResponsiveContainer,
  Select,
  Option,
  LoaderContainer,
  ListContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureContent,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const statusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class ProjectShowcase extends Component {
  state = {
    projectList: [],
    status: statusList.initial,
    selectOptionId: categoriesList[0].id,
  }

  componentDidMount() {
    this.projectsApiUrl()
  }

  projectsApiUrl = async () => {
    this.setState({status: statusList.loading})
    const {selectOptionId} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${selectOptionId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.projects.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({projectList: updatedData, status: statusList.success})
    } else {
      this.setState({status: statusList.failure})
    }
  }

  onChangeSelect = event => {
    this.setState({selectOptionId: event.target.value}, this.projectsApiUrl)
  }

  loader = () => (
    <LoaderContainer data-testid="loader">
      <Loader color="#328af2" type="ThreeDots" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccess = () => {
    const {projectList} = this.state

    return (
      <ListContainer>
        {projectList.map(eachList => (
          <ListItem key={eachList.id} itemDetails={eachList} />
        ))}
      </ListContainer>
    )
  }

  retry = () => {
    this.projectsApiUrl()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureContent>
        We cannot seem to find the page you are looking for
      </FailureContent>
      <RetryButton type="button" onClick={this.retry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  switchStatement = () => {
    const {status} = this.state

    switch (status) {
      case statusList.loading:
        return this.loader()
      case statusList.success:
        return this.renderSuccess()
      case statusList.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {selectOptionId} = this.state

    return (
      <AppContainer>
        <HeaderContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </HeaderContainer>
        <ResponsiveContainer>
          <Select value={selectOptionId} onChange={this.onChangeSelect}>
            {categoriesList.map(each => (
              <Option key={each.id} value={each.id}>
                {each.displayText}
              </Option>
            ))}
          </Select>
          {this.switchStatement()}
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default ProjectShowcase
