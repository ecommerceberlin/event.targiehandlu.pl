import React from 'react'
import {
    connect,
    configure,
    reduxWrapper,
    PartnerPromo,
    PartnerPerformance,
    Wrapper,
    Markdown,
    MyButton as Button,
    Box,
    useSWR
  } from 'eventjuicer-site-components';
  

  import settings from '../../settings';

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

const fetcher = url => fetch(url).then(r => r.json())

const PhotosDownloadButton = ({id}) => {
   const { data, error } = useSWR(`/api/companies/${id}`, fetcher)
  if(error || !data || !("zip" in data)){
    return null
  }
  return ( <Box m={2}>
    <Button label="download" variant="contained" href={data.zip} size="large"  />
    </Box>)
  }

  const PageCompany = ({id}) => {
    
  return (
    <Wrapper>

     

     <PartnerPromo 
     show_points={false} 
     id={id} 
     icons={{
      Badges, 
      Presentation,
      Video_interview,
      Brand_highlight,
      Earlybird,
      Meetups,
      Blog,
      Rollups
    }}
    start={
    <PhotosDownloadButton id={id} />
    }
    sidebar={null }
    />

    <Markdown label="exhibitor.promo.about" />

    </Wrapper>
  );
  
  }

/**   
   <div>
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
      limit={5}
      />
      <Button href="/" label="exhibitor.ranking.button" />
  </div>
*/

  export async function getStaticPaths() {

    return {
      paths: [],
      fallback: "blocking" 
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    const {params:{id}} = props;

    await configure(props, {
      settings : settings,
      preload : ['ranking', 'prizes']
    })

    return {
        props : {
            id
        },
        revalidate : 10
    }
  
  })
  



  
  export default connect()(PageCompany);
  