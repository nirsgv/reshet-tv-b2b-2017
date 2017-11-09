import React, { Component } from 'react';

class Print extends Component {
    render() {
        return(
            <div className="pdf-print">
                <a href={this.props.printLink}
                   target="_blank"
                   className="print-link"
                   rel="noopener noreferrer"
                >
                    <span className="print-txt">
                        לוח להדפסה
                    </span>                    
                </a>
            </div>
        )
    }
}


export default Print;











