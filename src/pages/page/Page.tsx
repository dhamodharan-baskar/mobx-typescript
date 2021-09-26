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
             Page 1
           </Tab>
           <Tab onClick={() => changePage('Page2')}>
             Page 2
           </Tab>
           <Tab onClick={() => changePage('Page3')}>
             Page 3
           </Tab>
           <Tab onClick={() => changePage('Page4')}>
             Page 4
           </Tab>
        </Overview>
    );
}

export default withRouter(Page);