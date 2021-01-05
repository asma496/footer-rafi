



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '2px solid black'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  row:{
    padding:'5px !important' ,
  },
  list:{
    textDecoration: 'none !important',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <Grid item xs={12} container spacing={1}>
        <Grid item xs={12} spacing={2} className={classes.row}>
              1 hour delivery

              cash on delivery

              0188-1234567
              or email support @chaldal .com
              pay with 
              <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1'  width= '60px' height='50px'/>
            
            <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1  'width= '60px' height='50px'/>
            <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1' width= '60px' height='50px'/>
            <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/bkash.png?v=1&q=low&webp=1&alpha=1' width= '60px' height='50px'/>
            <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/COD.png?v=1&q=low&webp=1&alpha=1'width= '60px' height='50px'/>
       
       
       
        </Grid>



          <Grid item x2={2}>
            <ul  className={classes.list}>
           <li> customer service</li>
           <li>contact us</li>
           <li>FaQ</li>
           <li>additional cost</li>
          </ul>
          </Grid>
          <Grid item x2={2}>
         
          </Grid>




          <Grid item x2={8} spacing={1}>
            <Grid item x2={2} >
              <ul>
              <li>About chaldal</li>
              <li>privacy policy</li>
              <li>Terms of use</li>
              </ul>
            </Grid>
          </Grid>
          <Grid item x2={8} spacing={6}>
            <Grid item x2={6} >
              <ul>
              <li>For Business</li>
              <li>corporate</li>
              </ul>

              </Grid>
              </Grid>
              <Grid item x2={8} spacing={6}>
            <Grid item x2={6} >
       <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1' width='80px' height='40px'/>
            <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/app_store.png?q=low&webp=1&alpha=1'  width='80px' height='40px'/>
            
            
            </Grid>
              </Grid>


              <Grid item x2={8} spacing={6}>
            <Grid item x2={6} >
            </Grid>
              </Grid>


              <Grid item x2={8} spacing={6}>
            <Grid item x2={6} >

              <a href='https://www.facebook.com/'><img src=' https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Facebook.png?q=low&webp=1&alpha=1 '    width= '40px' height='50px'/></a>
            
           <a href='https://www.youtube.com/'> <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1' width= '40px' height='50px'/></a>
            <a href='https://twitter.com/'> <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1' width= '40px' height='50px'/></a>
           <a href='https://www.instagram.com/'><img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Instagram.png?q=low&webp=1&alpha=1' width= '40px' height='50px'/></a>
           
           
            </Grid>
              </Grid>

        </Grid>
      </Grid>
    </div>
  );
}


