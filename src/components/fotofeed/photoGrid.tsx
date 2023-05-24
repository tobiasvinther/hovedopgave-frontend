import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function PhotoGrid() {
  return (
    <Box 
        //sx={{ width: 1400, height: 650, overflowY: 'auto' }}
        sx={{ overflowY: 'auto' }}
    >
      <ImageList variant="masonry" cols={6} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Luscinia_svecica_volgae.jpg/250px-Luscinia_svecica_volgae.jpg',
    title: 'Bed',
  },
  {
    img: 'https://mst.dk/media/116691/blaahals-cb.jpg?width=678',
    title: 'Books',
  },
  {
    img: 'https://fanonatur.dk/wp-content/uploads/2020/02/130503-kf-Blaahals-IMG_3907.jpg',
    title: 'Sink',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bYMhI9YrPCKbeADIK4Jcyi2mCP58Bg1GlXlh0saZ1Qm7tsn5rblf2CarKCWm0PwkiWU&usqp=CAU',
    title: 'Kitchen',
  },
  {
    img: 'https://usercontent.one/wp/blog.allan-kierulff.dk/wp-content/uploads/Bl%C3%A5hals-7a-1.jpg?media=1679930295',
    title: 'Blinds',
  },
  {
    img: 'http://test.kongeaaen.tgsite.dk/sites/default/files/jom_luscinia_svecica_ssp_cyanecula_00002_web_0.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://birdsontop.files.wordpress.com/2015/05/5508.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://boldings.dk/_pix/Blaahals-Flatruet-3-foto-leif-bolding.jpg',
    title: 'Doors',
  },
  {
    img: 'https://www.doffyn.dk/images/nyheder/2021/1700801/080321bl3ls.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.ytimg.com/vi/_WtnoPnH4o0/maxresdefault.jpg',
    title: 'Storage',
  },
  {
    img: 'https://www.perhallum.dk/wp-content/gallery/spurvefugle-1/2017-07-06_NK5_2234.jpg',
    title: 'Candle',
  },
  {
    img: 'https://www.birdcamper.dk/images/birds_large/blaahals_sydlig_vejlerne_danmark_juli_2018.jpg',
    title: 'Coffee table',
  },
];