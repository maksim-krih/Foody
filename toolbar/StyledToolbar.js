import * as React from 'react';
import { Toolbar } from 'react-native-material-ui';

export default function StyledToolbar(props) {
  return (
    <Toolbar
        leftElement="menu"
        centerElement="Lviv"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          
        }}
        style={{container : {backgroundColor: "#04B193"}}}
        onRightElementPress={ (label) => { console.log(label) }}
      />
  );
}
