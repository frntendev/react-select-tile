# React-Select-Tile

The Select control for [React](https://reactjs.com).

Check demo [here](https://sepehr1313.github.io/react-select-tile.html)

Link to [CodeSandBox](https://codesandbox.io/s/react-select-tile-918u4)

![React Select Tile Demo](http://g.recordit.co/CgKLsLh2TH.gif)

# Installation and usage

The easiest way to use react-select-tile is to install it from npm and build it into your app with Webpack.

```
yarn add react-select-tile
```

or

```
npm install react-select-tile
```

Then use it in your app:

```js
import React from "react";
import Select from "react-select-tile";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const App = () => {
  const [value, setValue] = React.useState("");

  const handleItemClick = value => {
    setValue(value);
    console.log(`Option selected:`, value);
  };

  return (
    <Select
      placeholder="Please select ..."
      value={value}
      options={options}
      onItemClick={handleItemClick}
    />
  );
};
```

## Props

Common props you may want to specify include:

- `onInputChange` - subscribe to change events
- `options` - specify the options the user can select from
- `placeholder` - change the text displayed when no option is selected
- `value` - control the current value
- `onItemClick` - subscribe to menu item click events
- `onMenuClose` - will be called when the menu is closed
- `onMenuOpen` - will be called when the menu is opened
- `menuIsOpen` - determines weather menu should be opened or not (default = false)
- `containerClassName` - root element class
- `containerStyle` - root element style
- `inputClassName` - input element class
- `inputStyle` - input element style
- `menuClassName` - menu items container class
- `menuStyle` - menu items container style
- `menuItemClassName` - menu item class
- `menuItemStyle` - menu item style
- `activeItemClassName` - active menu item class
- `activeItemStyle` - active menu item style
- `iconClassName` - Chevron icon class
- `iconStyle` - chevron icon style
- `emptyComponent` - element to display when there are no options
- `menuComponent` - element to display as menu items container
- `menuItemComponent` - element to display as menu item,
- `openAnimationDelay` - animation duration (default = 300)
- `menuItemColumns` - number of menu item columns (default = 4)
- `menuItemWidth` - menu item width (default = 120px)
- `menuPosition` - where menu should be opened. either "top" or "bottom" (default = "bottom")
- `placeholder` - input placeholder (default = "")

## Controllable Props

You can control the following props by providing values for them. If you don't, react-select will manage them for you.

- `value` / `onChange` - specify the current value of the control
- `menuIsOpen` / `onMenuOpen` / `onMenuClose` - control whether the menu is open

## Run Demo Locally

`npm run demo`

Then open the browser and navigate to `http://localhost:5555`

## License

MIT Licensed. Copyright (c) Sepehr Aliakbari 2019.
