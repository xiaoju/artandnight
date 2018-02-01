// import React, { Component } from 'react';
// import { Button, Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import React from 'react';
// import { Menu } from 'semantic-ui-react';

// const items = [
//   { key: 'home', active: true, name: 'Home' },
//   { key: 'artists', name: 'Artists' },
//   { key: 'curators', name: 'Curators' }
// ];

function NavBar(props) {
  // return <Menu items={items} />;
  // }
  return <h2>NavBar</h2>;
}

// const { activeMenuItem } = props;
//   return (
//     <Menu pointing inverted size="small">
//       <Container>
//         <Menu.Item>
//           <Menu.Item header>
//             <Icon name="book" size="big" color="blue" />
//             art and night
//           </Menu.Item>
//         </Menu.Item>
//         <Menu.Item
//           name="home"
//           as={Link}
//           to="/"
//           active={activeMenuItem === 'home'}
//         />
//         <Menu.Item
//           name="search"
//           as={Link}
//           to="/search"
//           active={activeMenuItem === 'search'}
//         />
//         <Menu.Menu position="right">
//           <Dropdown item icon={<Icon name="ellipsis horizontal" size="big" />}>
//             <Dropdown.Menu>
//               <Dropdown.Item
//                 onClick={() => {
//                   window.location = UDACITY_URL;
//                 }}
//               >
//                 <Icon name="info circle" />
//                 React Nanodegree
//               </Dropdown.Item>
//               <Dropdown.Item
//                 onClick={() => {
//                   window.location = GITHUB_URL;
//                 }}
//               >
//                 <Icon name="github alternate" />
//                 Source Code
//               </Dropdown.Item>
//               <Dropdown.Item
//                 onClick={() => {
//                   window.location = LINKEDIN_URL;
//                 }}
//               >
//                 <Icon name="linkedin square" />
//                 Connect on LinkedIn
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Menu.Item>
//             <Button primary content="Add Book" as={Link} to="/search" />
//           </Menu.Item>
//         </Menu.Menu>
//       </Container>
//     </Menu>
//   );
// }

export default NavBar;
