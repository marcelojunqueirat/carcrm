import { Provider } from 'react-redux';
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Routes from './Routes';
import { Loading, Notify, Alert } from './view/components';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  },
  components: {
    MuiTextField: {
        defaultProps: {
            variant: 'outlined',
            fullWidth: true
        }
    }
  }
});

const App = () => (
    <Provider store={store} >
        <ThemeProvider theme={theme}>
            <Alert />
            <Notify />
            <Loading />
            <Routes />
        </ThemeProvider>
    </Provider>
)

export default App;