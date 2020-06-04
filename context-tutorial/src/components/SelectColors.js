import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;

  // 메인 color 설정하는 함수
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  // subColor 설정하는 함수
  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: 'flex' }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: '24px',
//                   height: '24px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   e.preventDefault(); // 마우스 오른쪽 버튼 클릭시 메뉴가 뜨는 것을 무시함
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// };

export default SelectColors;
