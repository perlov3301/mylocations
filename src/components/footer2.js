import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Archive from '@material-ui/icons/Archive';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import Button from '@material-ui/core/Button';
import Mybutton from './Mybutton';
import '../App.css';

const style11 =  ({
 backgroundColor: 'rgb(45, 65, 100)',
 color: 'white'
});

class Footer2 extends React.Component {
    render ()   {
      const { classes } = this.props;
        return (
          <nav className="navfooter navbarbackground">
              <legend> navfooter.js</legend> 
              {/* <Link to="/categornativemini" style={{textDecoration: 'none'}}>
               <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em'}} >
                  <LibraryBooksIcon />Categories:minimum FlatList
                </Button>
              </Link> */}
              <Link to="/categories1" style={{textDecoration: 'none'}}>
               <Button variant="contained"  
                        style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em'}} >
                  <LibraryBooksIcon />Categories:minimum FlatList
                </Button>
              </Link>
              <Link to="/categornative" style={{textDecoration: 'none'}}>
               <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em'}} >
                  <LibraryBooksIcon />Categories: FlatList with Map()
                </Button>
              </Link>
              <Link to="/" style={{textDecoration: 'none'}}>
               <Button variant="contained"  
                        style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em'}} >
                  <ListRoundedIcon />List of Locations
                </Button>
              </Link>
              <Link to="/sectionlist" style={{textDecoration: 'none'}}>
               <Mybutton style={style11} >
                  <Archive />sectionlist
                </Mybutton>
              </Link>
              {/* <div>Date.now(): {Date.now()}</div> */}
            </nav>
        );
    }
}

Footer2.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(style11)(Footer2);
// style={{backgroundColor: 'rgb(45,65, 100)',
//                         borderRadius: '0.3em',
//                         color: 'white',
//                         padding: '0.1em 0.3em'}}