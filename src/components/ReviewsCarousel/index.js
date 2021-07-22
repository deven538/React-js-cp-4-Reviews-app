// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderActiveData = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="data-container">
        <img src={imgUrl} className="image" alt={`${username}-avatar`} />
        <p className="para">{username}</p>
        <p className="para-2">{companyName}</p>
        <p className="para-3">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsData[activeReviewIndex]
    return (
      <div className="bg-container">
        <h1 className="head">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="button-images"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="leftArrow"
            />
          </button>
          {this.renderActiveData(currentReviewData)}
          <button
            type="button"
            className="button-images"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
