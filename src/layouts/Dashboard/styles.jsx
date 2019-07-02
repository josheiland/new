export default theme => ({
  topbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  topbarShift: {
    marginLeft: '251px',
    width: 'calc(-251px + 100vw)'
  },
  drawerPaper: {
    zIndex: 1200,
    width: '251px'
  },
  sidebar: {
    width: '250px'
  },
  content: {
    marginTop: '64px',
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: '250px'
  }
});
