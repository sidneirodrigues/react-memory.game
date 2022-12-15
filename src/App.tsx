import * as C from './App.styles';

//Img
import logoImage from './assets/logo/devmemory_logo.png';
import restartIcon from './assets/svgs/restart.svg';

//Components
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button'


//Functions
const resetAndCreateGrid = () => {
    alert('Estamos aqui!')
}
 
const App = () => {
  return (
    <C.Container>
        <C.Info>
            <C.LogoLink href="">
                <img src={logoImage} width="200" alt="" />
            </C.LogoLink>

            <C.InfoArea>
                <InfoItem label='Tempo' value='00:00'/>
                <InfoItem label='Movimentos' value='0' />
            </C.InfoArea>

            <Button label='Reiniciar' icon={restartIcon} onClick={ resetAndCreateGrid } />
        </C.Info>
        <C.GridArea>
            ...
        </C.GridArea>
    </C.Container>

  )
}


export default App;