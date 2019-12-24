/** @jsx jsx */
import * as React from "react";
import { render } from "react-dom";
import { Select } from "../../src";
import { jsx, css, Global } from "@emotion/core";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const styles = {
  heading: css`
    margin: 3rem;
  `,
  container: css`
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  `,
  select: css`
    height: 30px;
  `,
  global: css`
    body {
      font-family: Roboto;
      margin: 0;
      background: #eee;
    }
  `
};

const code = (...props) => `<Select placeholder="Please select..."
    value={this.state.value} ${props.join("\n\t")}
    options={${JSON.stringify(options, null, 2)}} />`;

class Example extends React.Component {
  state = {
    selectedOption: ""
  };
  handleItemClick = selectedOption => {
    this.setState(
      { selectedOption: options.find(s => s.value === selectedOption)?.label },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        placeholder="Please select ..."
        value={selectedOption}
        options={options}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

render(
  <React.Fragment>
    <h1 css={styles.heading}>React Select Tile</h1>
    <div css={styles.container}>
      <Global styles={styles.global} />
      <div css={styles.select}>
        <Example />
      </div>
      <pre className="prettyprint">
        <code className="language-js">{code()}</code>
      </pre>
    </div>
  </React.Fragment>,
  document.getElementById("app")
);
