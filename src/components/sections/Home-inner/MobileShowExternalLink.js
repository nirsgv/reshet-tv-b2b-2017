import React, { Component } from 'react';


class MobileShowExternalLink extends Component {

    render() {
        const REFER_TO_PAGE_IN_SITE = 'לעמוד התוכנית באתר רשת';

        return (
            <a className="mobile-external-link animate-link"
               href={this.props.fullStateData.takeoverShow.site_url}
               target="_blank"
               rel="noopener noreferrer"
            >
                {REFER_TO_PAGE_IN_SITE}
            </a>
        )
    }
}


export default MobileShowExternalLink;











