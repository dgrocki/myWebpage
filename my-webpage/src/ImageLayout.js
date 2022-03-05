import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LayoutImageButton from './LayoutImageButton';
import ProfilePhoto from "./img/one.jpg";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: "100vw", height: "100vh" }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <LayoutImageButton key={item.img} image={item.img} title={item.title}></LayoutImageButton>
      ))}

    </ImageList>
  );
}

const itemData = [
  {
    img: ProfilePhoto,
    title: 'Breakfast',
  },
  {
    img: ProfilePhoto,
    title: 'Burger',
  },
  {
    img: ProfilePhoto,
    title: 'Camera',
  }
]