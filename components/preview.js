import React from 'react';
import {stylesheet, classNames} from './preview.css';
import Link from 'next/link';


export default class Article extends React.Component {
  render() {
    return (
      <Link href={this.props.src}>
        <div
          className={classNames.preview}
          style={{backgroundImage: 'url(' + this.props.image + ')'}}
          >
            <style dangerouslySetInnerHTML={{__html: stylesheet}} />
            <div className={classNames['scrim-top']} />
            <div className={classNames['scrim-bottom']} />
            <h3>{this.props.title}</h3>
            <h4>{this.props.subtitle}</h4>
        </div>
      </Link>
    );
  }
}
Article.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  image: React.PropTypes.string,
  src: React.PropTypes.string,
};
