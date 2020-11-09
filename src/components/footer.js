import React from 'react';
import {Footer} from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mystyle.css';

const MyFooter = () => {
    return (
      
        <div className="foot">
          <Footer
        className="example"
        copyrights="&copy; 2020 Dolapo Adebanjo" red
        //moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>} 
      >
        <div class="oops-foot">
        <h5 className="white-text">
          Connect with me on social media
        </h5>
        <div>
        {<ul class="foot-list">
          <li><a className="grey-text text-lighten-3 " href="https://web.facebook.com/ade.diligentdolapo" >
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          Facebook</a></li>

          <li><a className="grey-text text-lighten-3" href="https://linkedin.com/in/goldenzayn">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            LinkedIn</a></li>

          <li><a className="grey-text text-lighten-3" href="https://twitter.com/dolapo_adebanjo">
          <FontAwesomeIcon icon={['fab', 'twitter']} />Twitter</a></li>


          <li><a className="grey-text text-lighten-3" href="https://github.com/Adezayn">
            <FontAwesomeIcon icon={['fab', 'github']} />
          GitHub</a></li>

        </ul>}
        </div>


          
         </div> 
      </Footer>
      </div>
      
    )
}










export default MyFooter;