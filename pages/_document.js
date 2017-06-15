import Document, {Head, Main, NextScript} from 'next/document';
import {DOMProperty} from 'react-dom/lib/ReactInjection';
import {properties as DOMProperties} from 'react-dom/lib/DOMProperty';
// By default React limit the set of valid DOM elements and attributes
// (https://github.com/facebook/react/issues/140) this config whitelist
// Amp elements/attributes
if (typeof DOMProperties.amp === 'undefined') {
  DOMProperty.injectDOMPropertyConfig({
    Properties: {
      amp: DOMProperty.MUST_USE_ATTRIBUTE
    },
    isCustomAttribute: attributeName => attributeName.startsWith('amp-')
  });
}

export default class MyDocument extends Document {
  render() {
    const {html} = this.props;
    return (
      <html amp="">
        <Head>
          <meta charset="utf-8"/>
          <link rel="canonical" href="/"/>
          <meta name="viewport" content="width=device-width,minimum-scale=1"/>
          <style amp-boilerplate="">
            {
              `body {
                -webkit-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
                -moz-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
                -ms-animation: -amp-start 8s steps(1,end) 0s 1 normal both;
                animation: -amp-start 8s steps(1,end) 0s 1 normal both;
              }
              @-webkit-keyframes -amp-start {
                from {
                  visibility: hidden;
                }
                to {
                  visibility: visible;
                }
              }
              @-moz-keyframes -amp-start {
                from {
                  visibility: hidden;
                }
                to {
                  visibility: visible;
                }
              }
              @-ms-keyframes -amp-start {
                from {
                  visibility: hidden;
                }
                to {
                  visibility: visible;
                }
              }
              @-o-keyframes -amp-start {
                from {
                  visibility: hidden;
                }
                to {
                  visibility: visible;
                }
              }
              @keyframes -amp-start {
                from {
                  visibility: hidden;
                }
                to {
                  visibility: visible;
                }
              }
               `}</style>
          <noscript>
            <style amp-boilerplate="">
              {
                `body {
                  -webkit-animation: none;
                  -moz-animation: none;
                  -ms-animation: none;
                  animation: none;
                }
                 `}
               </style>
          </noscript>
          <style amp-custom="">{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style-type: none;
              text-align: left;
              text-decoration: none;
              border-bottom: none;
              font-weight: normal;
              font-style: normal;
              border: none;
              color: #111111;
            }

            body {
                font-family: Georgia, serif;
                padding: 0;
                margin: 0;
                color: #111111;
                font-size: 62.5%;
              }

              .container {
                margin: 0 auto;
                background-color: #fff;
                padding: 1em;
                width: 85%;
                min-width: 780px;
                max-width: 1260px;
              }

              @media (max-width: 30rem) {
                body {
                    font-size: 60%;
                }
              }

              @media (max-width: 48rem) {
                .container {
                    width: 98%;
                    min-width: 0px;
                    overflow: hidden;
                    padding: 0.5em;
                }
              }

              .title {
                font-size: 2.88em;
                font-family: Trebuchet MS, Arial, Lucida Grande, Verdana, Lucida, Helvetica, sans-serif;
                line-height: 180%;
                margin-bottom: 0.5em;
              }

              .byline {
                color: #aaa;
                margin-bottom: 25px;
                font
              }

              p {
                font-size: 18px;
                line-height: 30px;
                margin-top: 30px;
              }

              .caption {
                color: #ccc;
                margin-top: 0;
                font-size: 14px;
                text-align: center;
              }
          `}</style>
          <script async src="https://cdn.ampproject.org/v0.js"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
