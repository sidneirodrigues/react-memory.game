import { useEffect, useState } from 'react';

//types
import { GridItemType } from './types/GridItemsTypes';

//styled
import * as C from './App.styles';

//Img
import logoImage from './assets/logo/devmemory_logo.png';
import restartIcon from './assets/svgs/restart.svg';

// data
import { items } from './data/items'

//Components
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

 
const App = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() =>  resetAndCreateGrid(), []);

    //Functions
    const resetAndCreateGrid = () => {
        // passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        // passo 2 - criar o grid
        // 2.1 - Criar um grid vazio
        let tmpGrid: GridItemType[] = [];
        for(let i = 0; i < (items.length * 2); i++) tmpGrid.push({
            item: null, shown: false, permanentShown: false 
        })

        // 2.2 - preencher o grid
        for(let w = 0; w < 2; w++) {
            for(let i = 0; i < items.length; i++) {
                let position = -1;
                while( position < 0 || tmpGrid[position].item !== null ) {
                    position = Math.floor(Math.random() * (items.length * 2));
                }                
                tmpGrid[position].item = i;
            }
        }

        //2.3 - jogar no state
        setGridItems(tmpGrid);

        // passo 3 - começar o jogo
        setPlaying(true);
    }

    const handleItemClick = (index: number) => {

    }


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
            <C.Grid>
                {gridItems.map((item, index) => (
                    <GridItem 
                        key={index}
                        item={item}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </C.Grid>
        </C.GridArea>
    </C.Container>

    )
}


export default App;