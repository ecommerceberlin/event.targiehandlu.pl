import React from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    PartnerPerformance,
    Wrapper,
    Markdown
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
    VolumeUp as Rollups
} from '@material-ui/icons'

 
  const PagePromo = () => (<Wrapper>

     <Markdown label="exhibitor.promo.about_short" />

    <PartnerPerformance icons={{
      Badges, 
      Presentation,
      Video_interview,
      Brand_highlight,
      Earlybird,
      Meetups,
      Blog,
      Rollups
    }} 
    show_points={false}
    />
</Wrapper>)
  
  
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
  