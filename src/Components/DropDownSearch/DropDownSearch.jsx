




import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { FixedSizeList as List } from "react-window";

import "./styles.css";

 

const height = 35;

 export default function Example()
 {
    const { options, children, maxHeight, getValue } = this.props;

    const [value] = getValue();

    const initialOffset = options.indexOf(value) * height;

        return (
            <>
            <p>sssssssssss</p>


    <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >

    {({ index, style }) => <div style={style}>{children[index]}</div>}

      </List>

    </>
    );
 }




// export default class dropDownSearch extends Component {
//   render() {
//     const lenght = 100;
//     const maxHeight = 300;
//     const height = 35;
//     const {getValue} = this.props;

//     const Row = ({ index, style }) => (
//         <div style={style}>Row {index}</div>
//       );

//     const initialOffset = -35;
  
//     return (
//         <List
//         height={150}
//         itemCount={1000}
//         itemSize={35}
//         width={300}
//       >
//         {Row}
//       </List>
//     );
//   }
// }

