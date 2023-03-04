import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function TestimonialsScreen() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
    <div>
        <h1 className='py-3 text-center'>Testimonials</h1>
    </div>
    <Carousel responsive={responsive}>
        <div>
            <Card variant='top' className='my-3 p-3 rounded'>

                <Card.Img src='static/images/kea.jpg' />

                <Card.Body>
                    <Card.Title>
                        <strong>
                            From 84kg's to 70kg's
                        </strong>
                    </Card.Title>

                    <Card.Text as='div'>
                        <div>
                            My journey with Dietician Palesa has been nothing short of amazing.
                        </div>

                    </Card.Text>
                </Card.Body>

            </Card>
        </div>


        <div>
            <Card className='my-3 mx-3 p-3 rounded wrapper'>

                <Card.Img src='static/images/john.jpg' />

                <Card.Body>
                    <Card.Title>
                        <strong>
                            From 90kg's to 82kg's
                        </strong>
                    </Card.Title>

                    <Card.Text as='div'>
                        <div>
                            I have gained more muscle than I had anticipated, I feel healthier and more confident than I have ever been. Huge thank you to Palesa.
                        </div>

                    </Card.Text>
                </Card.Body>

            </Card>
        </div>


        <div>
        <Card className='my-3 mx-3 p-3 rounded wrapper'>

            <Card.Img src='static/images/prince.jpg' />

            <Card.Body>
                <Card.Title>
                    <strong>
                        From 90kg's to 82kg's
                    </strong>
                </Card.Title>

                <Card.Text as='div'>
                    <div>
                        I feel like a brand new person all thanks to the 21 day challenge hosted by Palesa, I took on the challenged having been highly motivated by Palesa and the team.
                    </div>

                </Card.Text>
            </Card.Body>

        </Card>
        </div>


        <div>
        <Card className='my-3 mx-3 p-3 rounded wrapper'>

            <Card.Img src='static/images/marcos.jpg' />

            <Card.Body>
                <Card.Title>
                    <strong>
                        From 90kg's to 82kg's
                    </strong>
                </Card.Title>

                <Card.Text as='div'>
                    <div>
                       Bye Bye M'Khaba, I feel as light as a feather, It has been a while since i have been this happy, my favorite clothes fit again, I am ready for summer!
                    </div>

                </Card.Text>
            </Card.Body>

        </Card>
        </div>
      </Carousel>
      </div>
  )
}

export default TestimonialsScreen
