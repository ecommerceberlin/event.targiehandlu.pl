import React from 'react'
import {
    connect,
    configure,
    reduxWrapper,
    Wrapper,
    Markdown,
    PartnerPhotos
  } from 'eventjuicer-site-components';
  

  import settings from '../../../settings';



  const PageCompany = ({id}) => {
    
  return (
    <Wrapper>

    <PartnerPhotos id={id} />

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
      preload : ["companies2"]
    })
    return {
        props : {id},
        revalidate : 10
    }  
})
  

export default connect()(PageCompany);
  