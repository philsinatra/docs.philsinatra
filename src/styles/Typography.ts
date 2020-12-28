import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
h1 {
  font-size: 40px;
  font-size: 2.5rem;
  line-height: 52px;
  line-height: 3.25rem;
  /* margin-top: 6.5rem; */
  margin-bottom: 1.625rem;
}
h2 {
  font-size: 27px;
  font-size: 1.6875rem;
  line-height: 39px;
  line-height: 2.4375rem;
  margin-top: 4.0625rem;
  margin-bottom: 0.8125rem;
}
h3 {
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 26px;
  line-height: 1.625rem;
  margin-top: 3.25rem;
  margin-bottom: 0.8125rem;
}
h4 {
  font-size: 19.2px;
  font-size: 1.2rem;
  line-height: 26px;
  line-height: 1.625rem;
  margin-top: 2.4375rem;
  margin-bottom: 0.8125rem;
}
h5,
h6 {
  font-size: 16px;
  font-size: 1rem;
  line-height: 26px;
  line-height: 1.625rem;
  margin-top: 4.0625rem;
  margin-bottom: 0.8125rem;
}
@media screen and (min-width: 40em) {
  h1 {
    font-size: 40px;
    font-size: 2.5rem;
    line-height: 62px;
    line-height: 3.444444444444445rem;
    /* margin-top: 6.888888888888889rem; */
    margin-bottom: 1.722222222222222rem;
  }
  h2 {
    font-size: 27px;
    font-size: 1.6875rem;
    line-height: 46.5px;
    line-height: 2.583333333333334rem;
    margin-top: 4.305555555555556rem;
    margin-bottom: 0.861111111111111rem;
  }
  h3 {
    font-size: 22px;
    font-size: 1.375rem;
    line-height: 31px;
    line-height: 1.722222222222222rem;
    margin-top: 3.444444444444445rem;
    margin-bottom: 0.861111111111111rem;
  }
  h4 {
    font-size: 19.2px;
    font-size: 1.2rem;
    line-height: 31px;
    line-height: 1.722222222222222rem;
    margin-top: 2.583333333333334rem;
    margin-bottom: 0.861111111111111rem;
  }
  h5,
  h6 {
    font-size: 16px;
    font-size: 1rem;
    line-height: 31px;
    line-height: 1.722222222222222rem;
    margin-top: 4.305555555555556rem;
    margin-bottom: 0.861111111111111rem;
  }
}
h1 + h2 {
  margin-top: 1.625rem;
}
@media screen and (min-width: 40em) {
  h1 + h2 {
    margin-top: 1.722222222222222rem;
  }
}
h2 + h3,
h3 + h4,
h4 + h5 {
  margin-top: 0.8125rem;
}
@media screen and (min-width: 40em) {
  h2 + h3,
  h3 + h4,
  h4 + h5 {
    margin-top: 0.861111111111111rem;
  }
}
h5 + h6 {
  margin-top: -0.8125rem;
}
@media screen and (min-width: 40em) {
  h5 + h6 {
    margin-top: -0.861111111111111rem;
  }
}
h6 {
  font-style: italic;
  font-weight: 400;
}
hgroup {
  display: block;
}
hr {
  margin: 3.25rem auto;
  box-sizing: content-box;
  border: 0;
  color: #222;
  display: block;
  height: 26px;
  height: 1.625rem;
  background-size: 100% 1.625rem;
  background-image: linear-gradient(
    to bottom,
    transparent 1px,
    transparent 11px,
    #222 11px,
    #222 15px,
    transparent 15px,
    transparent 26px
  );
  width: 100px;
}
@media screen and (min-width: 40em) {
  hr {
    margin-top: 3.444444444444445rem;
    margin-bottom: 3.444444444444445rem;
    height: 31px;
    height: 1.722222222222222rem;
  }
}
@media screen and (min-width: 40em) {
  hr {
    background-size: 100% 1.722222222222222rem;
    background-image: linear-gradient(
      to bottom,
      transparent 1px,
      transparent 13.5px,
      #222 13.5px,
      #222 17.5px,
      transparent 17.5px,
      transparent 31px
    );
  }
}
img {
  border: 0;
  max-width: 100%;
  display: block;
  margin: inherit;
  margin-right: auto;
  margin-left: auto;
}
svg:not(:root) {
  overflow: hidden;
}
ol li,
ul li {
  margin-bottom: 0;
}
nav {
  display: block;
}
progress {
  display: inline-block;
  vertical-align: baseline;
}
blockquote {
  font-style: italic;
  padding-left: 1.4375rem;
}
@media screen and (min-width: 40em) {
  blockquote {
    padding-left: 2rem;
  }
}
cite {
  display: block;
  font-style: normal;
}
figure blockquote {
  padding: 1.625rem 0;
}
@media screen and (min-width: 40em) {
  figure blockquote {
    padding: 3.444444444444445rem 0 1.722222222222222rem;
    text-align: center;
  }
}
figure blockquote p {
  font-size: 27px;
  font-size: 1.6875rem;
  line-height: 39px;
  line-height: 2.4375rem;
}
@media screen and (min-width: 40em) {
  figure blockquote p {
    font-size: 27px;
    font-size: 1.6875rem;
    line-height: 46.5px;
    line-height: 2.583333333333334rem;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
[hidden],
template {
  display: none;
}
br {
  margin-bottom: 0;
}
abbr {
  letter-spacing: 0.1em;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: 700;
}
dfn {
  font-style: italic;
}
em,
i {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  line-height: 13px;
  line-height: 0.8125rem;
  font-size: 70%;
}
@media screen and (min-width: 40em) {
  small {
    line-height: 15.5px;
    line-height: 0.861111111111111rem;
  }
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

pre {
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  margin: 3rem 0 !important;
}
`

export default Typography
