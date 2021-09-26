import React, {useCallback} from 'react';
import { Overview , Tab} from './Page.styles'
import { withRouter } from "react-router";

interface componentProps {
  history: any
}
const Page: React.FC<componentProps> = (props)=> {
  const changePage = useCallback((type) => {
    props.history.push(type)
  }, []);
    return (
        <Overview>
           <Tab onClick={() => changePage('Page1')}>
             Backlog
           </Tab>
           <Tab onClick={() => changePage('Page2')}>
             In progress
           </Tab>
           <Tab onClick={() => changePage('Page3')}>
             Dev completed
           </Tab>
           <Tab onClick={() => changePage('Page4')}>
             Deployed
           </Tab>
        </Overview>
    );
}

export default withRouter(Page);