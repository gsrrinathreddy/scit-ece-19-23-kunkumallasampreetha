import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://media.istockphoto.com/id/1064852106/photo/this-is-my-kinda-music.jpg?s=612x612&w=0&k=20&c=1pgsUGkDrMqYMOPPFVYNLgQ3DEfyugLNOFOTk2APPhk=',
    title: 'Listening music',
  },
  {
    img: 'https://m.misskyra.com/lifestyle/fun-things-to-do-with-your-friends-while-youre-social-distancing/amp_photostory/75250079.cms ',
    title: 'Chitchatting with friends',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.iHMB0wYhvp4PNm6un4thJgHaGq?w=222&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'veggie',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.eaadjfEyXUuX1LIpLDkndgHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Watching movies',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.cIsfYKTLx-d2MtxRSlVnYAHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Cooking',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.FdAu5NZ02Vr2JQp8-7IhjgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Badminton',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.n776Wkx8zJxhgaGOXa-3pQHaE7?pid=ImgDet&rs=1',
    title: 'Reading books',
  },
];