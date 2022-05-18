import React from 'react';

type PageCoverProps = {
    pageName: string;
};


class PageCover extends React.Component<PageCoverProps> {

    render() {
      return (
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>{this.props.pageName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default PageCover;
