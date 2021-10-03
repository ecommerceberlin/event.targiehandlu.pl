import React from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    PartnerPerformance,
    Wrapper
  } from 'eventjuicer-site-components';
  
  import settings from '../settings';
  

  import {
    AssignmentInd as Badges,
    Mic as Presentation,
    Videocam as Video_interview,
    Web as Brand_highlight,
    MonetizationOn as Earlybird,
    Event as Meetups,
    Description as Blog,
    AssignmentInd as Rollups
} from '@material-ui/icons'

 
  const PagePromo = () => (
  
    <>
    
    <Wrapper>
    <PartnerPerformance icons={{
      Badges, 
      Presentation,
      Video_interview,
      Brand_highlight,
      Earlybird,
      Meetups,
      Blog,
      Rollups
    }}/>
    </Wrapper>

   
    </>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings : settings,
      preload : ['ranking','prizes']
    })
  
    return {props: {}, 
        revalidate: 30
    }

  })
  
  
  export default connect()(PagePromo);
  